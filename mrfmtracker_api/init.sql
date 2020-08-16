/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */
CREATE TABLE accounts (
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(20) NOT NULL
   password VARCHAR(20) NOT NULL
   email VARCHAR(320) NOT NULL
)
=======
   username VARCHAR(15), NOT NULL
   password VARCHAR(15), NOT NULL
   email VARCHAR(320) NOT NULL
);

INSERT INTO accounts (username, password, email)
VALUES
   ('jadong', '1234', 'jadong@gmail.com')
   ('Roaring','sugoi','sugoi@gmail.com')
   ('Awrene', '1234', 'awrene@gmail.com')

CREATE TABLE jobs(
   job TEXT PRIMARY KEY
);

INSERT INTO jobs (job)
VALUES
   ('BEGINNER'), ('SWORDSMAN'), ('MAGICIAN'), ('ARCHER'), ('ROGUE'), ('PIRATE'),
   ('FIGHTER'), ('CRUSADER'), ('HERO'),
   ('PAGE'), ('WHITE KNIGHT'), ('PALADIN'),
   ('SPEARMAN'), ('DRAGON KNIGHT'), ('DARK KNIGHT'),
   ('WIZARD (F/P)'), ('MAGE (F/P)'), ('ARCH MAGE (F/P)'),
   ('WIZARD (I/L)'), ('MAGE (I/L)'), ('ARCH MAGE (I/L)'),
   ('CLERIC'), ('PRIEST'), ('BISHOP'),
   ('HUNTER'), ('RANGER'), ('BOWMASTER'),
   ('CROSSBOWMAN'), ('SNIPER'), ('MARKSMAN'),
   ('ASSASSIN'), ('HERMIT'), ('NIGHT LORD'),
   ('BANDIT'), ('CHIEF BANDIT'), ('SHADOWER'),
   ('BRAWLER'), ('MARAUDER'), ('BUCCANEER'),
   ('GUNSLINGER'), ('OUTLAW'), ('CORSAIR')


CREATE TABLE characters (
   name VARCHAR(20) 
   level integer 
   job CHAR(10) 
   storeLocation VARCHAR(20)


)
=======
INSERT INTO characters (name, level, job)
VALUES
   ('Whatevers', 133, 'ARCH MAGE (F/P)')
   ('RoaringWave',123, 'BUCCANEER')
   ('SaltyPopcorn', 183, 'NIGHT LORD')

Create TABLE [mrfmtracker.] [schema_name.] table_name
       pk_column data_type Primary Key, 
       column_1 datatype NOT null, column_2 data_type,
       ...,
       table_constraints);

CREATE TABLE ITEMS (
      name INT PRIMARY KEY INDENTITY (1,1),
      Name varchar(50) NOT NULL,
      Text varchar(50) NOT NULL, 
      Category varchar(50) NOT NULL, 
      



=======
INSERT INTO items (name, category, text, stats)
VALUES
   ('Chaos Scroll 60%', 'SCROLL', 'Alter the...', NULL)
   ('Dark Scroll for Wand for Magic 30%','SCROLL','Alter the...' NULL)
   ('Ninja Storm 30', 'SKILL BOOK', 'This increases the master level...', NULL)

)
CREATE TABLE listing (
   listingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items(name),
   stats JSON,
   seller TEXT REFERENCES characters(name),
   price integer NOT NULL,
   quantity integer,
   location JSON
=======
   listingDate DATE NOT NULL,
   soldDate DATE,
   price INTEGER NOT NULL,
   quantity INTEGER
);

INSERT INTO listings (item, stats, seller, listingDate, soldDate, price, quantity)
VALUES
   ('Chaos Scroll 60%', NULL, 'Whatevers', '2020-08-01', NULL, 499999999, 1),
   ('Dark Scroll for Wand for Magic 30%', NULL, 'RoaringWave', '2020-08-14', NULL, 24999999, 5)
   ('Ninja Storm 30', NULL, 'SaltyPopcorn', '2020-08-15', NULL, 199999999, 1)

CREATE TABLE sightings (
   sightingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items(name),
   stats JSON, 
   creator INTEGER REFERENCES accounts(accountID),
   sightingDate DATE NOT NULL,
   price integer NOT NULL,
   quantity integer,
   seller VARCHAR(20),
   location JSON 
);

=======
INSERT INTO sightings (item, stats, creator, sightingDate, price, quantity, seller)
VALUES
   ('Chaos Scroll 60%', NULL, 0, '2020-08-05', 549999999, NULL, 'MrsShi')
   ('Dark Scroll for Wand for Magic 30%',NULL,0, '2020-08-15',25999999,2, 'MrLeon')
   ('Ninja Storm 30', NULL, 0, '2020-08-10', 199999999, 1, 'SweetPopcorn')

