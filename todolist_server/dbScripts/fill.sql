insert into users(username,password) values ("user","user");
insert into users(username,password) values ("test","test");

insert into user_roles(username,role) values("user","USER");
insert into user_roles(username,role) values("test","USER");

insert into tasks (text, date,task_relation_id_task) values ("Test1","2017-03-20",1);
insert into tasks (text, date,task_relation_id_task) values ("Test2","2017-03-21",1);
insert into tasks (text, date,task_relation_id_task) values ("Test3","2017-03-22",1);

insert into task_relation(user, tasks) values ("user",1);
