package by.zarabon.orm.entyties;



import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "task_relation")
public class TaskUserRealtionsEntity {

    @Id
    @Column(name = "idtask_relation")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "user")
    private String userName;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "taskRelationId")
    private List<TaskEntity> tasks;

    public Long getId() {
        return id;
    }

    public TaskUserRealtionsEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public List<TaskEntity> getTasks() {
        return tasks;
    }

    public TaskUserRealtionsEntity setTasks(List<TaskEntity> tasks) {
        this.tasks = tasks;
        return this;
    }

    public String getUserName() {
        return userName;
    }

    public TaskUserRealtionsEntity setUserName(String userName) {
        this.userName = userName;
        return this;
    }
}
