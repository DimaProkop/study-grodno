CREATE TABLE learning_option(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
CREATE TABLE university(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(30) NOT NULL,
  site VARCHAR(100) NOT NULL
);

CREATE TABLE department(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  education_institution_id INT REFERENCES university(id)
);

CREATE TABLE speciality(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(50) NOT NULL,
  free_education BOOLEAN NOT NULL,
  price INT NOT NULL,
  department_id INT REFERENCES department(id)
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

CREATE TABLE university_learning_option(
  learning_option_id INT REFERENCES learning_option(id),
  university_id INT REFERENCES university(id),
  PRIMARY KEY (learning_option_id, university_id)
);