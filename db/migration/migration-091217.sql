\c meditation_app_dev;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  display_name VARCHAR(255),
  email VARCHAR(255),
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  arist VARCHAR(255),
  category VARCHAR(255),
  image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users_songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  arist VARCHAR(255),
  category VARCHAR(255),
  image_url VARCHAR(255)
);
