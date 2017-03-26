package by.zarabon.orm.servicies;

import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.orm.entyties.TaskUserRealtionsEntity;
import by.zarabon.orm.repositories.TaskUserRealtionsRepository;
import by.zarabon.orm.repositories.UserRepository;
import by.zarabon.serverFormats.Task;
import by.zarabon.serverFormats.TaskEntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pili on 3/24/17.
 */
@Service("taskService")
@Scope("singleton")
public class TaskServiceImpl implements TaskService{
    @Autowired
    private TaskUserRealtionsRepository taskUserRealtionsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskEntityConverter taskEntityConverter;

    @Override
    public List<Task> getTasksByUserName(String userName){
        ArrayList<TaskUserRealtionsEntity> entityArrayList= (ArrayList<TaskUserRealtionsEntity>) taskUserRealtionsRepository.findByUserName(userName);
        ArrayList<TaskEntity> taskEntities = new ArrayList<>();
        entityArrayList.forEach(taskUserRealtionsEntity -> {
            taskEntities.addAll(taskUserRealtionsEntity.getTasks());
        });
        ArrayList<Task> resTasks=new ArrayList<>();
        taskEntities.forEach(taskEntity -> resTasks.add(taskEntityConverter.convertToTask(taskEntity)));
        return resTasks;
    }

    @Override
    public Task addTask(String userName) {
        taskUserRealtionsRepository.findByUserName(userName);
        return null;
    }
}
