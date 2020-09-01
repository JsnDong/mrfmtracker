const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const getItems = (request, response) => {
  pool.query('SELECT * FROM items', (error, results) => {
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

const addItems = (request, response) => {
  const {name, category, text, status} = request.body;

  pool.query(
    'INSERT INTO items (name, category, text, status) VALUES ($1, $2, $3, $4)',
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
app.route('/items')
   .get(getItems)
   .post(addItems);
app.route('/sightings')
   .get(getSightings)
   .post(addSighting);

app.listen(process.env.PORT || 3002, () => {
  console.log('server listening')
});
