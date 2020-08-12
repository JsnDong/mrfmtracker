/* SQL STATESMENT FOUND BELOW WILL ALLOW US TO
   POPULATE THE DATABASE WITH TEST VALUES */

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
