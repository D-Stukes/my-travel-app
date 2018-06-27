DROP TABLE IF EXISTS vacations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;


CREATE TABLE users
(id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, hashpassword VARCHAR(255) );
CREATE TABLE vacations
(id SERIAL PRIMARY KEY, location VARCHAR(255), description TEXT, latitude DECIMAL(18,15), longitude DECIMAL(18,15), img_url TEXT);
CREATE TABLE favorites
(id SERIAL PRIMARY KEY, fave_notes VARCHAR(255), user_id INT REFERENCES users(id), vacations_id INT REFERENCES vacations(id) );
