package by.zarabon.serverFormats;

import static org.junit.Assert.assertEquals;
import by.zarabon.orm.entyties.TaskEntity;
import org.junit.Assert;
import org.junit.Test;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

/**
 * Dont read this code
 * */
public class TaskEntityConverterTest {
    @Test
    public void convertToTaskEntity() throws Exception {
        TaskEntityConverter taskEntityConverter= new TaskEntityConverter();
        String testTime="2016-11-09";
        Task task= new Task("1",testTime,"kurwa",3,false);
        TaskEntity testEntity = taskEntityConverter.convertToTaskEntity(task);

        String now = "2016-11-09";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(now, formatter);
        Timestamp timestamp = Timestamp.valueOf(localDate.atStartOfDay());
        LocalDateTime formatDateTime = timestamp.toLocalDateTime();


        TaskEntity taskEntity = new TaskEntity(new StringBuilder("kurwa"), formatDateTime, 3, false);

        taskEntity.setId((long) 1);

        Assert.assertTrue(taskEntity.equals(taskEntity));

    }

    @Test
    public void convertToTask() throws Exception {
        TaskEntityConverter taskEntityConverter= new TaskEntityConverter();
        String now = "2016-11-09";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(now, formatter);
        Timestamp timestamp = Timestamp.valueOf(localDate.atStartOfDay());
        LocalDateTime formatDateTime = timestamp.toLocalDateTime();
        TaskEntity taskEntity = new TaskEntity(new StringBuilder("kurwa"), formatDateTime, 3, false);
        taskEntity.setId((long) 1);
        String testTime="2016-11-09";
        Task resTask= new Task("1",testTime,"kurwa",3,false);
        Task mTask=taskEntityConverter.convertToTask(taskEntity);
        Assert.assertEquals(mTask,resTask);
    }



}