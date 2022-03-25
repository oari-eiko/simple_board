-- testデータベースを作成
CREATE DATABASE IF NOT EXISTS `test`;
GRANT ALL ON test.* TO 'my_user'@'%';
GRANT ALL ON simple_board.* TO 'my_user'@'%';
