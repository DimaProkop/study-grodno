INSERT INTO education_institution (name, type_education_institution, email, feedback, site, address, city, local_rating) VALUES
  ('ГрГУ', 'Университет', 'grsu@tut.by', 'feedback@email.com', 'grsu.by', 'Беларусь, Гродно, ул.Ожешко 22', 'Гродно', 100);
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
  ('Архитектура'),
  ('Биология'),
  ('Социология'),
  ('Кибербезопастность'),
  ('Физика и астрономия'),
  ('Фармация'),
  ('Химия'),
  ('Программирование');
INSERT INTO level_of_education(name) VALUES
  ('Аспирантура'),
  ('Бакалавриат'),
  ('Магистратура'),
  ('Ординатура'),
  ('Специалитет');
INSERT INTO form_of_education(name) VALUES
  ('Дистанционная'),
  ('Заочная'),
  ('Очная'),
  ('Вечерняя');