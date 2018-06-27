// \c travel_db

DELETE FROM favorites;
DELETE FROM users;
DELETE FROM vacations;

-- create users table
INSERT INTO users
  (name, email, hashpassword)
VALUES
  ('Eleanor Brown', 'ebrown@yahoo.com','123456'),
  ('Harry Moebin', 'harry772@msn.com', '123456'),
  ('Jason Backle', 'jayjaybabyback@gmail.com','123456'),
  ('Margaret Tuny', 'margietootoo@gmail.com','123456'),
  ('George Finlaw', 'georgesharkfin@yahoo.com','123456');


-- vacations

INSERT INTO vacations
 (location, description, latitude, longitude, img_url)
VALUES
('Hawaii', 'Amazing and exotic island with thrilling volcanos and lush gardens.', 19.8967662,-155.58278180000002, './hawaii1.jpeg' ),
('Florida', 'Warm and inviting.',27.6648274,-81.51575350000002, './florida2.jpeg'),
('New York', 'This is truly the city that never sleeps!',40.7127753,-74.0059728,'./newyork1.jpeg'),
('California', 'Sun and fun every day!',36.778261,-119.41793239999998,'./california1.jpeg'),
('Australia', 'The is the land of the down under with tons of fun and beauty.',-25.274398,133.77513599999997,'./austrailia-sydney.jpeg'),
('Mexico', 'Spicy food and music and life with plenty of sun.',23.634501,-102.55278399999997,'./mexico1.jpeg'),
('Barbados', 'Crystal clear waters and amazing island cuisine.',13.193887,-59.54319799999996, './barbados1.jpeg'),
('Italy', 'Beautiful views and excellent entertainment.',41.87194,12.567379999999957, './italy1.jpeg'),
('Brazil', 'Music with laughter and fun for all.',-14.235004,-51.92527999999999, './brazil.jpeg'),
('Cayman Islands', 'The white sandy beaches are endless and peaceful.',19.3133,-81.25459999999998, './cayman-island1.jpeg'),
('Paris', 'This is truly the land of love and romance.',48.856614,2.3522219000000177, './paris1.jpeg'),
('British Columbia', 'This places feels so royal!',53.7266683,-127.64762050000002, './british-columbia1.jpeg'),
('Singapore', 'The is the place where exquisite design meets beauty and technology.',1.352083,103.81983600000001, './singapore1.jpeg'),
('Ecuador', 'Best place for delicious crabs!',-1.831239,-78.18340599999999, './ecuador1.jpeg'),
('Kenya', 'Exotic and rural at the same time!',-0.023559,37.90619300000003, './kenya1.jpeg'),
('Ethiopia', 'Full of tribal history.',9.145000000000001,40.48967300000004, './ethiopia1.jpeg'),
('India', 'Full of life and color.',20.593684,78.96288000000004, './india1.jpeg'),
('China', 'Land of wisdom and poise.',35.86166,104.19539699999996, './china1.jpeg'),
('Germany', 'Much history and many places of beauty.',51.165691,10.451526000000058, './germany1.jpeg'),
('Japan', 'This place is rich with culture and music. They are very skilled in the arts!',36.204824,138.252924, './japan1.jpeg'),
('Alaska', 'So cold yet so lovely!',64.2008413,-149.4936733, './alaska1.jpeg');

-- favorites
INSERT INTO favorites
  (fave_notes, user_id, vacations_id)
VALUES
  ('Loved this place',1, 2),
  ('I am hoping for lots of time on the beach at this spot',2, 3),
  ('Looking forward to the scuba lessons and nice views',3, 1),
  ('They say the wine tasting is second to none',4, 4),
  ('I can not wait to checkout the igloo hotels',5, 5);
