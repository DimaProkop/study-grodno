CREATE TABLE role(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40) NOT NULL
);

CREATE TABLE citizenship(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40) NOT NULL
);

CREATE TABLE skill(
  id SERIAL PRIMARY KEY NOT NULL,
  native_language VARCHAR(30) NOT NULL,
  russian_language VARCHAR(30) NOT NULL,
  english_language VARCHAR(30) NOT NULL
);

CREATE TABLE level_of_education(
  id SERIAL PRIMARY KEY NOT NULL,
  current_education VARCHAR(50) NOT NULL,
  country VARCHAR(30) NOT NULL,
  name_education_institution VARCHAR(50) NOT NULL,
  year_of_ending INT NOT NULL
);

CREATE TABLE personal_info(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  middle_name VARCHAR(40) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  date_of_birth DATE NOT NULL,
  phone VARCHAR(30) NOT NULL,
  motivation_letter VARCHAR(500) NOT NULL,
  citizenship_id INT NOT NULL REFERENCES citizenship(id),
  level_of_education_od INT NOT NULL REFERENCES level_of_education(id),
  skill_id INT NOT NULL REFERENCES skill(id)
);

CREATE TABLE "user"(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(40) UNIQUE NOT NULL,
  password VARCHAR(40) NOT NULL,
  role_id INT NOT NULL REFERENCES role(id),
  personal_info_id INT REFERENCES personal_info(id)
);

CREATE TABLE user_role(
  user_id INT REFERENCES "user"(id),
  role_id INT REFERENCES role(id),
  PRIMARY KEY (user_id, role_id)
);