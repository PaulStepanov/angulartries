insert into users(username,password) values ("user","user");
insert into users(username,password) values ("test","test");

insert into user_roles(username,role) values("user","USER");
insert into user_roles(username,role) values("test","USER");

insert into tasks (text, date) values ("Ebana kurwa podjąć w filmie",2017-03-20);

insert into task_relation(users_username, tasks_idtasks) values ("user",1);