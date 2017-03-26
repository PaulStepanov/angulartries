package by.zarabon.serverFormats;

import by.zarabon.orm.entyties.TaskEntity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component("taskEntityConverter")
@Scope("singleton")
public class TaskEntityConverter {

    public Task convertToTask(TaskEntity entity) {
        return TaskBuilder.aTask()
                .id(entity.getId().toString())
                .title(entity.getText().toString())
                .priority(entity.getPriority())
                .date(entity.getDate().format(DateTimeFormatter.ISO_DATE))
                .isDone(entity.isDone())
                .build();
    }

    public TaskEntity convertToTaskEntity(Task task) {//TODO make taskEntity builder
        TaskEntity returnEntity= new TaskEntity();
        returnEntity.setId(Long.parseLong(task.getId()));
        returnEntity.setDone(task.isDone());
        returnEntity.setPriority(task.getPriority());
        returnEntity.setText(new StringBuilder(task.getTitle()));

        //Parsing date
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(task.getDate(), formatter);
        Timestamp timestamp = Timestamp.valueOf(localDate.atStartOfDay());
        LocalDateTime formatDateTime = timestamp.toLocalDateTime();
        returnEntity.setDate(formatDateTime);

        return returnEntity;

    }
}
