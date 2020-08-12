/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */

CREATE TABLE listing (
   listingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items(name),
   stats JSON,
   seller TEXT REFERENCES characters(name),
   price integer NOT NULL,
   quantity integer,
   location JSON
);