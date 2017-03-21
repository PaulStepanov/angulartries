package by.zarabon.orm.entyties;

import by.zarabon.orm.converters.LocalDateTimeConverter;
import by.zarabon.orm.converters.StringBuilderConverter;



import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class TaskEntity {
    @Id
    @Column(name = "idtasks")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "text")
    @Convert(converter = StringBuilderConverter.class)
    private StringBuilder text;

    @Column(name = "date")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime date;

    @Column(name = "isDone")
    private boolean isDone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idtask_relation")
    private TaskEntity taskRelationId;

    public TaskEntity(){};

    public TaskEntity(StringBuilder text, LocalDateTime date, boolean isDone) {
        this.text = text;
        this.date = date;
        this.isDone = isDone;
    }

    public Long getId() {
        return id;
    }

    public TaskEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public StringBuilder getText() {
        return text;
    }

    public TaskEntity setText(StringBuilder text) {
        this.text = text;
        return this;
    }

    public boolean isDone() {
        return isDone;
    }

    public TaskEntity setDone(boolean done) {
        isDone = done;
        return this;
    }
}
