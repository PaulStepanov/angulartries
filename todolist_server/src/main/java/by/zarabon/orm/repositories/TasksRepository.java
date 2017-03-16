package by.zarabon.orm.repositories;

import by.zarabon.orm.entyties.TaskEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;

import java.io.Serializable;

public interface TasksRepository extends PagingAndSortingRepository<TaskEntity, Long> {


}
