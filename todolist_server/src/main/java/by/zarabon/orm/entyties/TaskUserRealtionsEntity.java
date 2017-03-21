package by.zarabon.orm.entyties;



import org.hibernate.annotations.IndexColumn;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "task_relation")
public class TaskUserRealtionsEntity {

    @Id
    @Column(name = "idtask_relation")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "taskRelationId")
    private List<TaskEntity>  tasks_idtasks;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "taskRelationId")
    private List<UserEntity> users_username;


    public Long getId() {
        return id;
    }

    public TaskUserRealtionsEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public List<TaskEntity> getTasks_idtasks() {
        return tasks_idtasks;
    }

    public TaskUserRealtionsEntity setTasks_idtasks(List<TaskEntity> tasks_idtasks) {
        this.tasks_idtasks = tasks_idtasks;
        return this;
    }

    public List<UserEntity> getUsers_username() {
        return users_username;
    }

    public TaskUserRealtionsEntity setUsers_username(List<UserEntity> users_username) {
        this.users_username = users_username;
        return this;
    }
}
