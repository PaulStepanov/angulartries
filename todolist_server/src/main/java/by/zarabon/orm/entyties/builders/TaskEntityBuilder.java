package by.zarabon.orm.entyties.builders;

import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.orm.entyties.TaskUserRealtionsEntity;

import java.time.LocalDateTime;

public final class TaskEntityBuilder {
    private Long id;
    private StringBuilder text;
    private LocalDateTime date;
    private Integer priority;
    private TaskUserRealtionsEntity taskRelationId;
    private boolean isDone = false;

    private TaskEntityBuilder() {
    }

    public static TaskEntityBuilder aTaskEntity() {
        return new TaskEntityBuilder();
    }

    public TaskEntityBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public TaskEntityBuilder text(StringBuilder text) {
        this.text = text;
        return this;
    }

    public TaskEntityBuilder date(LocalDateTime date) {
        this.date = date;
        return this;
    }

    public TaskEntityBuilder priority(Integer priority) {
        this.priority = priority;
        return this;
    }

    public TaskEntityBuilder taskRelationId(TaskUserRealtionsEntity taskRelationId) {
        this.taskRelationId = taskRelationId;
        return this;
    }

    public TaskEntityBuilder isDone(boolean isDone) {
        this.isDone = isDone;
        return this;
    }

    public TaskEntity build() {
        TaskEntity taskEntity = new TaskEntity();
        taskEntity.setDone(isDone);
        taskEntity.setId(id);
        taskEntity.setText(text);
        taskEntity.setDate(date);
        taskEntity.setPriority(priority);
        taskEntity.setTaskRelationId(taskRelationId);
        return taskEntity;
    }
}
