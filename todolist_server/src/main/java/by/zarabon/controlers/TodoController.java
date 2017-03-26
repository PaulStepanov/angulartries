package by.zarabon.controlers;

import by.zarabon.orm.repositories.TaskUserRealtionsRepository;
import by.zarabon.orm.repositories.TasksRepository;
import by.zarabon.orm.servicies.TaskService;
import by.zarabon.serverFormats.Task;
import by.zarabon.serverFormats.TaskEntityConverter;
import by.zarabon.serverFormats.serverResponse.AddedTaskResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @Autowired
    TaskService taskService;

    @RequestMapping(path = "/recent/{amountOfTasks}",method = RequestMethod.GET)
    public ResponseEntity<List<Task>> getRecentTasks(@PathVariable Integer amountOfTasks, Principal principal){
        //If user not logged throw 403 FORBIDDEN
        if (principal==null){
            return new ResponseEntity<List<Task>>(HttpStatus.FORBIDDEN);
        }

        return ResponseEntity.ok(
                taskService.getTasksByUserName(principal.getName())
        );
    }

    @RequestMapping(path = "/add",method = RequestMethod.POST)
    public AddedTaskResponse addTask(@RequestBody Task task, Principal principal){
        Task addedTask = taskService.addTask(principal.getName(),taskEntityConverter.convertToTaskEntity(task));

        return new AddedTaskResponse()
                .setId(Long.valueOf(addedTask.getId()))
                .setisOk(true);
    }

}
