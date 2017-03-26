package by.zarabon.orm.servicies;

import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.orm.entyties.TaskUserRealtionsEntity;
import by.zarabon.orm.repositories.TaskUserRealtionsRepository;
import by.zarabon.orm.repositories.TasksRepository;
import by.zarabon.orm.repositories.UserRepository;
import by.zarabon.serverFormats.Task;
import by.zarabon.serverFormats.TaskEntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Todo add transaction adding
 */
@Service("taskService")
@Scope("singleton")
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskUserRealtionsRepository taskUserRealtionsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskEntityConverter taskEntityConverter;

    @Autowired
    private TasksRepository tasksRepository;

    @Override
    public List<Task> getTasksByUserName(String userName) {
        ArrayList<TaskUserRealtionsEntity> entityArrayList = (ArrayList<TaskUserRealtionsEntity>) taskUserRealtionsRepository.findByUserName(userName);
        ArrayList<TaskEntity> taskEntities = new ArrayList<>();
        entityArrayList.forEach(taskUserRealtionsEntity -> {
            taskEntities.addAll(taskUserRealtionsEntity.getTasks());
        });
        ArrayList<Task> resTasks = new ArrayList<>();
        taskEntities.forEach(taskEntity -> resTasks.add(taskEntityConverter.convertToTask(taskEntity)));
        return resTasks;
    }

    @Override
    public Task addTask(String userName, TaskEntity taskEntity) {
        //Getting relations from table
        ArrayList<TaskUserRealtionsEntity> relationList = (ArrayList<TaskUserRealtionsEntity>) taskUserRealtionsRepository.findByUserName(userName);
        //If there is no relation
        if (relationList.size() == 0) {
            TaskUserRealtionsEntity resTaskUserRealtionsEntity = new TaskUserRealtionsEntity();
            resTaskUserRealtionsEntity.setUserName(userName);
            resTaskUserRealtionsEntity.setTasks(new ArrayList<TaskEntity>());

            resTaskUserRealtionsEntity = taskUserRealtionsRepository.save(resTaskUserRealtionsEntity);

            taskEntity.setTaskRelationId(resTaskUserRealtionsEntity);
            return taskEntityConverter.convertToTask(tasksRepository.save(taskEntity));
        } else {
            taskEntity.setTaskRelationId(relationList.get(0));
            return taskEntityConverter.convertToTask(tasksRepository.save(taskEntity));
        }

    }
}
