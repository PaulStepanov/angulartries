package by.zarabon.orm.entyties.manager;

import by.zarabon.exeptions.UnmergableExeption;
import by.zarabon.orm.entyties.TaskEntity;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Merge second entity to first
 */
@Component
@Scope("singleton")
public class TaskEntityMerger {
    public boolean isMergable(TaskEntity entity1, TaskEntity entity2){
        if (entity1.getId() != null && entity2.getId() != null && entity1.getId() != entity2.getId()) {
            return false;
        }
        return true;
    }

    public TaskEntity merge(TaskEntity entity1, TaskEntity entity2) throws UnmergableExeption {
        if (!this.isMergable(entity1, entity2)) {
            throw new UnmergableExeption("Entities is unmergable");
        }

        TaskEntity resultEntity = new TaskEntity();
        //Merging
        resultEntity.setId(entity1.getId() != null ? entity1.getId() : entity2.getId());
        resultEntity.setDone(entity2.isDone());
        resultEntity.setDate(entity2.getDate() != null ? entity2.getDate() : entity1.getDate());
        resultEntity.setText(entity2.getText() != null ? entity2.getText() : entity1.getText());
        resultEntity.setPriority(entity2.getPriority() != null ? entity2.getPriority() : entity1.getPriority());
        resultEntity.setTaskRelationId(entity2.getTaskRelationId() != null ? entity2.getTaskRelationId() : entity1.getTaskRelationId());

        return resultEntity;
    }

}
