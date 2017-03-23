package by.zarabon.controlers;


import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.orm.entyties.TaskUserRealtionsEntity;
import by.zarabon.orm.entyties.UserEntity;
import by.zarabon.orm.repositories.TaskUserRealtionsRepository;
import by.zarabon.orm.repositories.TasksRepository;
import by.zarabon.serverFormats.Task;
import by.zarabon.serverFormats.TaskEntityConverter;
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

    @Autowired
    TaskUserRealtionsRepository taskUserRealtionsRepository;

    @Autowired
    TaskEntityConverter taskEntityConverter;

    @RequestMapping("/get1")
    public TaskEntity getEntity(){
        String now = "2016-11-09 10:30";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime formatDateTime = LocalDateTime.parse(now, formatter);
        tasksRepository.save(new TaskEntity(new StringBuilder("kurwa"),formatDateTime,3,false));
        return tasksRepository.findOne((long) 1);
    }
    @RequestMapping("/get2")
    public TaskUserRealtionsEntity getEntity2(){
        TaskUserRealtionsEntity entity=taskUserRealtionsRepository.findOne((long) 1);
//        System.out.println(entity.getTasks().get(0).getText());
//        System.out.println(entity);
//        System.out.println(entity.getTasks().size());
//        entity.getTasks().forEach(taskEntity -> {
//            System.out.println(taskEntity);
//        });

        return entity;
    }
    @RequestMapping("/get3")
    public Task getEntity3(){
//        TaskUserRealtionsEntity entity=taskUserRealtionsRepository.findByUsers(new UserEntity("user",null,true)).get(1);
//        Task task=taskEntityConverter.convertToTask(entity.getTasks().get(0));
//        System.out.println(entity.getTasks().size());
//        entity.getTasks().forEach(taskEntity -> {
//            System.out.println(taskEntity);
//        });


        return null;
    }
}
