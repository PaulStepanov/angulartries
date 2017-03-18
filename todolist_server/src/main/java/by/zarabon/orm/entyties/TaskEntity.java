package by.zarabon.orm.entyties;

import by.zarabon.orm.converters.StringBuilderConverter;
import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "")
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @Convert(converter = StringBuilderConverter.class)
    private StringBuilder text;

    @Column
    // Will be mapped as DATE (on MySQL), i.e. only date without timestamp
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDate")
    private LocalDate birthdayDate;

    @Column
    private boolean isDone;

    public TaskEntity(StringBuilder text) {
        this.text = text;
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

    public LocalDate getBirthdayDate() {
        return birthdayDate;
    }

    public TaskEntity setBirthdayDate(LocalDate birthdayDate) {
        this.birthdayDate = birthdayDate;
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
