/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */
CREATE TABLE accounts (
   accountID SERIAL PRIMARY KEY,
   username VARCHAR(20)
   password VARCHAR(20)
   email VARCHAR(320)
)

CREATE TABLE characters (
   name VARCHAR(20)
   level integer
   job CHAR(10)
   storeLocation VARCHAR(20)

)

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
      



)
CREATE TABLE listing (
   listingID SERIAL PRIMARY KEY,
   item TEXT REFERENCES items(name),
   stats JSON,
   seller TEXT REFERENCES characters(name),
   price integer NOT NULL,
   quantity integer,
   location JSON

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

