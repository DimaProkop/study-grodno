INSERT INTO university (name, email, feedback, site, address, city, local_rating) VALUES
  ('ГрГУ', 'grsu@tut.by', 'feedback@email.com', 'grsu.by', 'Беларусь, Гродно, ул.Ожешко 22', 'Гродно', 100);
INSERT INTO faculty (name, address, university_id) VALUES
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