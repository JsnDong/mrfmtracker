/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */
CREATE TABLE accounts (
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(20)
   password VARCHAR(20)
   email VARCHAR(320)

<<<<<<< HEAD
)

CREATE TABLE characters (
   name VARCHAR(20)
   level integer
   job CHAR(10)
   storeLocation VARCHAR(20)

)
=======
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
>>>>>>> f45e4ed33e52f8ea2e0cdf92676e2913b1559912
