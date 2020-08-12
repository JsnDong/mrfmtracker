/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */

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