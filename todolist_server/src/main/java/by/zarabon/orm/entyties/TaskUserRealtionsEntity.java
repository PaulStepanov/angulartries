package by.zarabon.orm.entyties;

import javax.persistence.*;

@Entity
@Table(name = "task_relations")
public class TaskUserRealtionsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;


}
