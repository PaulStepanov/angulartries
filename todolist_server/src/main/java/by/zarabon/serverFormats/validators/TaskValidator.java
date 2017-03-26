package by.zarabon.serverFormats.validators;

import by.zarabon.serverFormats.Task;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component()
@Scope("singleton")
/**
 * Class for validating tasks getted from server
 * */
public class TaskValidator {

    public boolean isValid(Task task) {
        if (task.getDate()==null && task.getTitle()==null){
            return false;
        }
        return true;
    }
}
