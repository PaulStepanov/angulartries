insert into user(username,password) values ("user","user");
insert into user(username,password) values ("test","test");

insert into user_roles(username,role) values("user","USER");
insert into user_roles(username,role) values("test","USER");

insert into tasks (text, date,task_relation_id_task) values ("Ebana kurwa podjąć w filmie","2017-03-20",1);

insert into task_relation(user, tasks) values ("user",1);
