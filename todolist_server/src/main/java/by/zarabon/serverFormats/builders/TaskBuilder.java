package by.zarabon.serverFormats.builders;

import by.zarabon.serverFormats.Task;

public final class TaskBuilder {
    private String id;
    private String date;
    private String title;
    private Integer priority;
    private boolean isDone=false;

    private TaskBuilder() {
    }

    public static TaskBuilder aTask() {
        return new TaskBuilder();
    }

    public TaskBuilder id(String id) {
        this.id = id;
        return this;
    }

    public TaskBuilder date(String date) {
        this.date = date;
        return this;
    }


    public TaskBuilder title(String title) {
        this.title = title;
        return this;
    }

    public TaskBuilder priority(Integer priority) {
        this.priority = priority;
        return this;
    }

    public TaskBuilder isDone(boolean isDone) {
        this.isDone = isDone;
        return this;
    }

    public Task build() {
        Task task = new Task(id,date,title,priority,isDone);
        return task;
    }
}
