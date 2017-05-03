CREATE TABLE faculty(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  education_institution_id INT REFERENCES education_institution(id)
);

CREATE TABLE speciality(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(50) NOT NULL,
  free_education BOOLEAN NOT NULL,
  duration INT NOT NULL,
  price INT NOT NULL,
  faculty_id INT REFERENCES faculty(id)
);

CREATE TABLE language_learning(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE speciality_language_learning(
  speciality_id INT REFERENCES speciality(id),
  language_learning_id INT REFERENCES language_learning(id),
  PRIMARY KEY (speciality_id, language_learning_id)
);

CREATE TABLE form_of_education(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE speciality_form_of_education(
  id SERIAL PRIMARY KEY NOT NULL,
  speciality_id INT REFERENCES speciality(id),
  form_of_education_id INT REFERENCES form_of_education(id)
);

CREATE TABLE speciality_direction(
  id SERIAL PRIMARY KEY NOT NULL,
  speciality_id INT REFERENCES speciality(id),
  direction_id INT REFERENCES direction(id)
);

CREATE TABLE speciality_level_of_education(
  id SERIAL PRIMARY KEY NOT NULL,
  speciality_id INT REFERENCES speciality(id),
  level_of_education_id INT REFERENCES level_of_education(id)
);

CREATE TABLE comment (
  id SERIAL PRIMARY KEY NOT NULL,
  speciality_id INT NOT NULL,
  date VARCHAR(30) NOT NULL,
  text VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL
);

CREATE TABLE message (
  id SERIAL PRIMARY KEY NOT NULL,
  date VARCHAR(20) NOT NULL,
  from_id VARCHAR(50) NOT NULL,
  to_id VARCHAR(50) NOT NULL,
  header VARCHAR(50) NOT NULL,
  text VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL
);