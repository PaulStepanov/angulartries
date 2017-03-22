CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `priority` INT NOT NULL DEFAULT 4,
  `date` DATETIME(1) NOT NULL,
  `isDone` TINYINT NULL DEFAULT 0,
  `task_relation_id_task` INT(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_tasks_task_relation1`
  FOREIGN KEY (`task_relation_id_task`)
  REFERENCES `task_relation` (`idtask_relation`));

CREATE TABLE IF NOT EXISTS `users` (
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `enabled` TINYINT NOT NULL DEFAULT 1,
  `task_relation_id_task` INT(11),
  PRIMARY KEY (`username`),
   CONSTRAINT `fk_users_task_relation1`
    FOREIGN KEY (`task_relation_id_task`)
    REFERENCES `task_relation` (`idtask_relation`));

CREATE TABLE IF NOT EXISTS `task_relation` (
  `idtask_relation` INT NOT NULL AUTO_INCREMENT,
  `users_username` VARCHAR(45) NOT NULL,
  `tasks_idtasks` INT NOT NULL,
  PRIMARY KEY (`idtask_relation`),
  CONSTRAINT `fk_task_relation_users1`
  FOREIGN KEY (`users_username`)
  REFERENCES `users` (`username`),
  CONSTRAINT `fk_task_relation_tasks1`
  FOREIGN KEY (`tasks_idtasks`)
  REFERENCES `tasks` (`id`));


CREATE TABLE IF NOT EXISTS user_roles (
  user_role_id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(45) NOT NULL,
  role varchar(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  UNIQUE KEY uni_username_role (role,username),
  KEY fk_username_idx (username),
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users (username));



