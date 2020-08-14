/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */

CREATE TABLE accounts(
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(15),
   password VARCHAR(15),
   email VARCHAR(320)
);

INSERT INTO accounts (username, password, email)
VALUES
   ('jadong', '1234', 'jadong@gmail.com')

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
   name VARCHAR(20),
   level INTEGER,
   job TEXT REFERENCES jobs,
   location JSON
);

INSERT INTO characters (name, level, job)
VALUES
   ('Whatevers', 133, 'ARCH MAGE (F/P)')

CREATE TABLE categories (
   category TEXT PRIMARY KEY,
   parent_category TEXT
);

INSERT INTO categories (code, parent_category)
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
   ('POTION', 'USE'), ('AMMUNITION', 'USER'), ('SUMMON', 'USER'),
   ('RETURN SCROLL', 'USE'), ('SCROLL', 'USER'),
   ('DROPPING', 'ETC'), ('ORE', 'ETC'),
   ('GAME', 'ETC'), ('CRAFT', 'ETC'),
   ('SETUP', 'SETUP')

CREATE TABLE items (
   name TEXT PRIMARY KEY, 
   category TEXT REFERENCES categories,
   text TEXT,
   stats JSON
);

INSERT INTO items (name, category, text, stats)
VALUES
   ('Chaos Scroll 60%', 'SCROLL', 'Alter the...', NULL)

CREATE TABLE listings (
   listingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items(name),
   stats JSON,
   seller TEXT REFERENCES characters(name),
   listingDate DATE NOT NULL,
   soldDate DATE,
   price INTEGER NOT NULL,
   quantity INTEGER
);

INSERT INTO listings (item, stats, seller, listingDate, soldDate, price, quantity)
VALUES
   ('Chaos Scroll 60%', NULL, 'Whatevers', '2020-08-01', NULL, 499999999, 1),
   ('Dark Scroll for Wand for Magic 30%', NULL, 'Whatevers', '2020-08-14', NULL, 24999999, 5)

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

INSERT INTO sightings (item, stats, creator, sightingDate, price, quantity, seller)
VALUES
   ('Chaos Scroll 60%', NULL, 0, '2020-08-05', 549999999, NULL, 'MrsShi')

