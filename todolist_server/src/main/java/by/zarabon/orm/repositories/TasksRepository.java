package by.zarabon.orm.repositories;


import by.zarabon.orm.entyties.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TasksRepository  extends CrudRepository<TaskEntity,Long> {


}
