CREATE TABLE university(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(30) NOT NULL,
  feedback VARCHAR(30) NOT NULL,
  site VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  local_rating INT NOT NULL
);

CREATE TABLE faculty(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  university_id INT REFERENCES university(id)
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
  speciality_id INT REFERENCES speciality(id),
  form_of_education_id INT REFERENCES form_of_education(id),
  PRIMARY KEY (speciality_id, form_of_education_id)
);

CREATE TABLE direction(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE speciality_direction(
  speciality_id INT REFERENCES speciality(id),
  direction_id INT REFERENCES direction(id),
  PRIMARY KEY (speciality_id, direction_id)
);

CREATE TABLE speciality_level_of_education(
  speciality_id INT REFERENCES speciality(id),
  level_of_education_id INT REFERENCES level_of_education(id),
  PRIMARY KEY (speciality_id, level_of_education_id)
);