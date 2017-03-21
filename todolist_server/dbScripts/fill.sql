insert into users(username,password,task_relation_id_task) values ("user","user",1);
insert into users(username,password,task_relation_id_task) values ("test","test",1);

insert into user_roles(username,role) values("user","USER");
insert into user_roles(username,role) values("test","USER");

insert into tasks (text, date,task_relation_id_task) values ("Ebana kurwa podjąć w filmie","2017-03-20",1);

insert into task_relation(users_username, tasks_idtasks) values ("user",1);
