/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */

CREATE TABLE accounts(
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(15),
   password VARCHAR(15),
   email VARCHAR(320)
);

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

