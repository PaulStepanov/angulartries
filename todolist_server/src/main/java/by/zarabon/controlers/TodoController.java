package by.zarabon.controlers;

import by.zarabon.orm.entyties.TaskUserRealtionsEntity;
import by.zarabon.orm.repositories.TaskUserRealtionsRepository;
import by.zarabon.orm.repositories.TasksRepository;
import by.zarabon.serverFormats.Task;
import by.zarabon.serverFormats.TaskEntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TodoController {

    @Autowired
    TasksRepository tasksRepository;

    @Autowired
    TaskUserRealtionsRepository taskUserRealtionsRepository;

    @Autowired
    TaskEntityConverter taskEntityConverter;

    @RequestMapping(path = "/recent/{amountOfTasks}",method = RequestMethod.GET)
    public List<Task> getTasks(@PathVariable Integer amountOfTasks,Principal principal){
        System.out.println(principal.getName());
//        TaskUserRealtionsEntity entity=taskUserRealtionsRepository.findOne();
        return null;
    }



}
