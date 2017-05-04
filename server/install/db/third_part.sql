INSERT INTO "user"(login, password, role) VALUES
  ('dionp95@mail.ru', 'tuborg95', 'owner'),
  ('123', '123', 'admin'),
  ('333', '333', 'user');
INSERT INTO education_institution (name, type_education_institution, email, feedback, site, address, city, local_rating, user_id) VALUES
  ('ГрГУ', 'Университет', 'grsu@tut.by', 'feedback@email.com', 'grsu.by', 'Беларусь, Гродно, ул.Ожешко 22', 'Гродно', 100, 2);
INSERT INTO faculty (name, address, education_institution_id) VALUES
  ('Факультет математики и информатики', 'Ожешко 22', '1'),
  ('Филологический факультет', 'Ожешко 28', '1'),
  ('Факультет экономики и управления', 'Горького 95А', '1'),
  ('Факультет физической культуры', 'Захарова 32', '1');
INSERT INTO speciality(name, code, free_education, duration, price, faculty_id) VALUES
  ('ПОИТ', 11, TRUE, 4, 1500, 1),
  ('Кибернетическая безопасность', 12, TRUE, 4, 1200, 1),
  ('УИР', 13, TRUE, 4, 1000, 1),
  ('English', 21, FALSE , 4, 1050, 2),
  ('DTH', 22, TRUE , 5, 950, 2),
  ('ИСИТ', 31, TRUE , 4, 1250, 3),
  ('Физрук', 43, TRUE , 3, 800, 4);
INSERT INTO direction(name) VALUES
  ('Педагогика. Профессиональное обучение.'),
  ('Экологическая наука.'),
  ('Социологическая защита.'),
  ('Общественное питание.'),
  ('Бытовое обслуживаение.'),
  ('Служба безопасности.'),
  ('Физическая культура.'),
  ('Туризм и гостеприимство.'),
  ('Здравохранение.'),
  ('Сельское и лесное хозяйство.'),
  ('Садово-парковое строительство.'),
  ('Архитектура и строительство.'),
  ('Техника и технологии.'),
  ('Естественные науки.'),
  ('Коммуникации.'),
  ('Право.'),
  ('Экономика и управление.'),
  ('Экономика и организация производства.'),
  ('Гуманитарные науки.'),
  ('Исскуство и дизайн.');
INSERT INTO level_of_education(name) VALUES
  ('Аспирантура'),
  ('Бакалавриат'),
  ('Магистратура'),
  ('Ординатура'),
  ('Специалитет');
INSERT INTO language_learning(name) VALUES
  ('Русский'),
  ('Английский');
INSERT INTO form_of_education(name) VALUES
  ('Дистанционная'),
  ('Заочная'),
  ('Очная'),
  ('Вечерняя');
INSERT INTO language_learning(name) VALUES
  ('английский'),
  ('русский');
INSERT INTO speciality_direction(speciality_id, direction_id) VALUES
  (1, 13),
  (2, 13),
  (3, 13),
  (3, 18),
  (7, 7),
  (4, 1),
  (4, 20),
  (5, 1),
  (5, 20),
  (6, 18);
INSERT INTO speciality_level_of_education(speciality_id, level_of_education_id) VALUES
  (1, 1),
  (2, 2),
  (2, 3),
  (7, 3);
INSERT INTO speciality_form_of_education(speciality_id, form_of_education_id) VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (3, 1),
  (4, 2),
  (5, 1),
  (5, 2),
  (6, 2),
  (7, 1),
  (7, 2);
INSERT INTO speciality_language_learning(speciality_id, language_learning_id) VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (3, 1),
  (4, 2),
  (5, 1),
  (5, 2),
  (6, 2),
  (7, 1),
  (7, 2);
INSERT INTO choice(name) VALUES
  ('speciality'),
  ('university'),
  ('news');
