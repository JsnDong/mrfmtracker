const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({secret: 'playboys',
                 resave: true,
                 saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

passport.use(new LocalStrategy((username, password, done) => {
  pool.query(
    `SELECT * FROM accounts WHERE username = '${username}'`,
    (error, results) => {
      if (error) {
        return done(error);
      }

      if (results.rows.length > 0) {
        const user = results.rows[0];
        if (user.password === password) {
          done(null, user);
        } else {
          done(null, false);
        }
      } else {
        done (null, false);
      }
    }
  );
}));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  pool.query(
    `SELECT * FROM accounts WHERE username = '${username}'`,
    (error, results) => {
      if (error) {
        return done(error);
      }

      done(null, results.rows[0]);
    }
  );
});

const getTables = (requests, response) => {
  pool.query('SELECT table_name from information_schema.tables', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const getAccounts = (request, response) => {
  pool.query('SELECT * FROM accounts', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCategories = (request, response) => {
  const {parentCategory, category} = request.params;

  let query = 'SELECT category FROM categories';

  if (parentCategory) {
    query += ` WHERE parent_category = '${parentCategory}'`;
  }
  if (category) {
    query += ` AND category = '${category}'`;
  }

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const getItems = (request, response) => {
  pool.query('SELECT * FROM items', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getItem = (request, response) => {
  const {item} = request.params;

  pool.query(
    `SELECT * FROM items WHERE name = '${item}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
};

const getSightings = (request, response) => {
  pool.query('SELECT * FROM sightings', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getItemSightings = (request, response) => {
  const {item} = request.params;

  pool.query(
    `SELECT * FROM sightings WHERE item = ${item}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
};

const addAccount = (request, response) => {
  const {email, username, password} = request.body;

  pool.query(
    'INSERT INTO accounts (email, username, password) VALUES ($1, $2, $3)',
    [email, username, password],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({status: 'success', message: 'account added'});
    }
  )
}

const addItem = (request, response) => {
  const {name, category, text, stats} = request.body;

  pool.query(
    'INSERT INTO items (name, category, text) VALUES ($1, $2, $3, $4)',
    [name, category, text, stats],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({status: 'success', message: 'sighting added'});
    }
  )
}

const addSighting = (request, response) => {
  const {item, stats, creator, sightingDate, price, quantity, seller, location} = request.body;

  pool.query(
    'INSERT INTO sightings (item, stats, creator, sightingDate, price, quantity, seller, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [item, stats, creator, sightingDate, price, quantity, seller, location],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({status: 'success', message: 'sighting added'});
    }
  )
}

app.route('/tables')
   .get(getTables);
app.route('/signin')
  .post(passport.authenticate('local'),
    (request, response) => {
      response.send(request.user);
    });
app.route('/signup')
   .get(getAccounts)
   .post(addAccount);
app.route('/categories/:parentCategory?/:category?')
   .get(getCategories);
app.route('/items')
   .get(getItems)
   .post(addItem);
app.route('/item/:item')
   .get(getItem);
app.route('/sightings')
   .get(getSightings)
   .post(addSighting);
app.route('/:item/sightings')
   .get(getItemSightings);

app.listen(process.env.PORT || 9000, () => {
  console.log('server listening')
});
