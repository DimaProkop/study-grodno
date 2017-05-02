CREATE TABLE level_of_education(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE direction(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE role(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40) NOT NULL
);

CREATE TABLE personal_info(
  id SERIAL PRIMARY KEY NOT NULL, -- ИД
  first_name VARCHAR(40) NOT NULL, -- Имя
  last_name VARCHAR(40) NOT NULL, -- Фамилия
  middle_name VARCHAR(40), -- Отчество
  gender VARCHAR(10) NOT NULL, -- Пол
  date_of_birth DATE NOT NULL, -- Дата рождения
  motivation_letter VARCHAR(500) NOT NULL, -- Мотивационное письмо
  citizenship VARCHAR(50) NOT NULL, -- Гражданство
  native_language VARCHAR(50) NOT NULL, -- Родной язык
  russian_language_level VARCHAR(50) NOT NULL, -- уровень русского языка
  certificate_in_russian VARCHAR(50) NOT NULL, -- сертификат по русскому языку
  english_language_level VARCHAR(50) NOT NULL, -- уровень английского языка
  certificate_in_english VARCHAR(50) NOT NULL, -- сертификат по английскому языку
  other_languages VARCHAR(150) NOT NULL, -- знание других языков
  year_of_ending INT NOT NULL, -- год окончания учебного заведения
  name_completed_institution VARCHAR(150) NOT NULL, -- название оконченного учебного заведения
  year_of_receipt INT NOT NULL, -- планируемый год поступления
  country_education VARCHAR (50), -- Страна, где закончено учебное заведение
  current_level_of_education VARCHAR(50) NOT NULL, -- текущий уровень образования
  level_education_desired_id INT REFERENCES level_of_education(id),  -- Уровень образования, которое хочу получить
  selected_direction_id INT REFERENCES direction(id) -- Выбранное направление
);

CREATE TABLE "user"(
  id SERIAL PRIMARY KEY NOT NULL,
  login VARCHAR(40) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) DEFAULT ('user'),
  personal_info_id INT REFERENCES personal_info(id)
);

CREATE TABLE education_institution(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(30) NOT NULL,
  feedback VARCHAR(30) NOT NULL,
  site VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  local_rating INT NOT NULL,
  image_url VARCHAR (255),
  logo_url VARCHAR (255),
  type_education_institution VARCHAR(100) NOT NULL,
  user_id INT REFERENCES "user"(id)
);

CREATE TABLE news(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  create_date Date NOT NULL,
  education_institution_id INT REFERENCES education_institution(id) -- Выбранное направлени
);


CREATE TABLE personal_info_education_institution(
  personal_info_id INT REFERENCES personal_info(id),
  education_institution_id INT REFERENCES education_institution(id),
  PRIMARY KEY (personal_info_id, education_institution_id)
);


CREATE TABLE choice (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40) UNIQUE NOT NULL
);

CREATE TABLE bookmark (
  id SERIAL PRIMARY KEY NOT NULL,
  content_id INT NOT NULL,
  choice_id INT REFERENCES choice(id),
  user_id INT REFERENCES "user"(id)
);