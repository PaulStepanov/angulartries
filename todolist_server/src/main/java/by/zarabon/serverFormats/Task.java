package by.zarabon.serverFormats;

public class Task {
    private String id = "-1";//Auto seting id when adding to db
    private String date;
    private String title;
    private Integer priority = 4;
    private boolean isDone = false;

    public Task() {
    }

    public Task(String id, String date, String title, Integer priority, boolean isDone) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.priority = priority;
        this.isDone = isDone;
    }

    public String getId() {
        return id;
    }

    public Task setId(String id) {
        this.id = id;
        return this;
    }

    public String getDate() {
        return date;
    }

    public Task setDate(String date) {
        this.date = date;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Task setTitle(String title) {
        this.title = title;
        return this;
    }

    public Integer getPriority() {
        return priority;
    }

    public Task setPriority(Integer priority) {
        this.priority = priority;
        return this;
    }

    public boolean isDone() {
        return isDone;
    }

    public Task setDone(boolean done) {
        isDone = done;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Task task = (Task) o;

        if (isDone() != task.isDone()) return false;
        if (getId() != null ? !getId().equals(task.getId()) : task.getId() != null) return false;
        if (!getDate().equals(task.getDate())) return false;
        if (!getTitle().equals(task.getTitle())) return false;
        return getPriority().equals(task.getPriority());

    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + getDate().hashCode();
        result = 31 * result + getTitle().hashCode();
        result = 31 * result + getPriority().hashCode();
        result = 31 * result + (isDone() ? 1 : 0);
        return result;
    }
}
