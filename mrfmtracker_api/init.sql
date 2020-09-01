
/* THIS IS FOR RESTARTING THE DATABASE
   KEEP IT COMMENTED OUT OR ELSE EVERYTHING WILL BE DELETED
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO POSTGRES;
GRANT ALL ON SCHEMA public TO public;
*/

CREATE TABLE accounts(
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(15) NOT NULL,
   password VARCHAR(15) NOT NULL,
   email VARCHAR(320) NOT NULL
);

INSERT INTO accounts (username, password, email)
VALUES
   ('jadong', '1234', 'jadong@gmail.com'),
   ('Roaring','sugoi','sugoi@gmail.com'),
   ('Awrene', '1234', 'awrene@gmail.com');

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
   ('GUNSLINGER'), ('OUTLAW'), ('CORSAIR');

CREATE TABLE characters (
   name VARCHAR(20) PRIMARY KEY,
   level INTEGER,
   job TEXT REFERENCES jobs,
   location JSON
);

INSERT INTO characters (name, level, job)
VALUES
   ('Whatevers', 133, 'ARCH MAGE (F/P)'),
   ('RoaringWave', 123, 'BUCCANEER'),
   ('SaltyPopcorn', 183, 'NIGHT LORD');

CREATE TABLE categories (
   category TEXT PRIMARY KEY,
   parent_category TEXT
);

INSERT INTO categories (category, parent_category)
VALUES
   ('HAT', 'EQP'), ('EARRING', 'EQP'),
   ('TOP', 'EQP'), ('BOTTOM', 'EQP'), ('OVERALL', 'EQP'),
   ('GLOVE', 'EQP'), ('SHOES', 'EQP'),
   ('SHIELD', 'EQP'), ('CAPE', 'EQP'),
   ('1H SWORD', 'EQP'), ('1H AXE', 'EQP'), ('1H MACE', 'EQP'),
   ('DAGGER', 'EQP'), ('WAND', 'EQP'), ('STAFF', 'EQP'),
   ('2H SWORD', 'EQP'), ('2H AXE', 'EQP'), ('2H MACE', 'EQP'),
   ('SPEAR', 'EQP'), ('POLEARM', 'EQP'),
   ('BOW', 'EQP'), ('CROSSBOW', 'EQP'),
   ('CLAW', 'EQP'), ('KNUCKLE', 'EQP'), ('GUN', 'EQP'),
   ('POTION', 'USE'), ('AMMUNITION', 'USE'), ('SUMMON', 'USE'),
   ('RETURN SCROLL', 'USE'), ('SCROLL', 'USE'), ('BOOK', 'USE'),
   ('DROPPING', 'ETC'), ('ORE', 'ETC'),
   ('GAME', 'ETC'), ('CRAFT', 'ETC'),
   ('SETUP', 'SETUP');

CREATE TABLE items (
   name TEXT PRIMARY KEY, 
   category TEXT REFERENCES categories,
   text TEXT,
   stats JSON
);

INSERT INTO items (name, category, text, stats)
VALUES
   ('Chaos Scroll 60%', 'SCROLL', 'Alter the...', NULL),
   ('Dark Scroll for Wand for Magic 30%','SCROLL','Alter the...', NULL),
   ('Ninja Storm 30', 'BOOK', 'This increases the master level...', NULL);

CREATE TABLE listings (
   listingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items,
   stats JSON,
   seller VARCHAR(20) REFERENCES characters,
   listingDate DATE NOT NULL,
   soldDate DATE,
   price INTEGER NOT NULL,
   quantity INTEGER
);

INSERT INTO listings (item, stats, seller, listingDate, soldDate, price, quantity)
VALUES
   ('Chaos Scroll 60%', NULL, 'Whatevers', '2020-08-01', NULL, 499999999, 1),
   ('Dark Scroll for Wand for Magic 30%', NULL, 'RoaringWave', '2020-08-14', NULL, 24999999, 5),
   ('Ninja Storm 30', NULL, 'SaltyPopcorn', '2020-08-15', NULL, 199999999, 1);

CREATE TABLE sightings (
   sightingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items,
   stats JSON, 
   creator INTEGER REFERENCES accounts,
   sightingDate DATE NOT NULL,
   price integer NOT NULL,
   quantity integer,
   seller VARCHAR(20),
   location JSON 
);

INSERT INTO sightings (item, stats, creator, sightingDate, price, quantity, seller)
VALUES
   ('Chaos Scroll 60%', NULL, 1, '2020-08-05', 549999999, NULL, 'MrsShi'),
   ('Dark Scroll for Wand for Magic 30%', NULL, 2, '2020-08-15', 25999999, 2, 'MrLeon'),
   ('Ninja Storm 30', NULL, 3, '2020-08-10', 199999999, 1, 'SweetPopcorn');