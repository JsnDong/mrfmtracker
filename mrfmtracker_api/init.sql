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
