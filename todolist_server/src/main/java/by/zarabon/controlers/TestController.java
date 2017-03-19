package by.zarabon.controlers;


import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.orm.repositories.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/")
public class TestController {

    @Autowired
    TasksRepository tasksRepository;

    @RequestMapping("/get")
    public TaskEntity getEntity(){
        String now = "2016-11-09 10:30";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime formatDateTime = LocalDateTime.parse(now, formatter);
        tasksRepository.save(new TaskEntity(new StringBuilder("kurwa"),formatDateTime,false));
        return tasksRepository.findOne((long) 1);
    }
}
