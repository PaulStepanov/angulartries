package by.zarabon.orm.entyties;

import by.zarabon.orm.converters.LocalDateTimeConverter;
import by.zarabon.orm.converters.StringBuilderConverter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class TaskEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = Long.valueOf(-1);

    @Column(name = "text")
    @Convert(converter = StringBuilderConverter.class)
    private StringBuilder text;

    @Column(name = "date")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime date;

    @Column(name = "priority")
    private Integer priority;

    @Column(name = "isDone")
    private boolean isDone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_relation_id_task")
    private TaskUserRealtionsEntity taskRelationId;

    public TaskEntity() {
    }

    ;

    public TaskEntity(StringBuilder text, LocalDateTime date, Integer priority, boolean isDone) {
        this.text = text;
        this.date = date;
        this.priority = priority;
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

    public LocalDateTime getDate() {
        return date;
    }

    public TaskEntity setDate(LocalDateTime date) {
        this.date = date;
        return this;
    }

    public Integer getPriority() {
        return priority;
    }

    public TaskEntity setPriority(Integer priority) {
        this.priority = priority;
        return this;
    }

    public boolean isDone() {
        return isDone;
    }

    public TaskEntity setDone(boolean done) {
        isDone = done;
        return this;
    }

    public TaskUserRealtionsEntity getTaskRelationId() {
        return taskRelationId;
    }

    public TaskEntity setTaskRelationId(TaskUserRealtionsEntity taskRelationId) {
        this.taskRelationId = taskRelationId;
        return this;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TaskEntity that = (TaskEntity) o;

        if (isDone() != that.isDone()) return false;
        if (!getId().equals(that.getId())) return false;
        if (!getText().equals(that.getText())) return false;
        if (!getDate().equals(that.getDate())) return false;
        return getPriority().equals(that.getPriority());

    }

    @Override
    public int hashCode() {
        int result = getId().hashCode();
        result = 31 * result + getText().hashCode();
        result = 31 * result + getDate().hashCode();
        result = 31 * result + getPriority().hashCode();
        result = 31 * result + (isDone() ? 1 : 0);
        return result;
    }
}
