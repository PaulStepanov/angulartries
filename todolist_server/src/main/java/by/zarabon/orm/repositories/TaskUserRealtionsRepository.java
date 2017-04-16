package by.zarabon.orm.repositories;

import by.zarabon.orm.entyties.TaskUserRealtionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskUserRealtionsRepository extends JpaRepository<TaskUserRealtionsEntity, Long> {

    List<TaskUserRealtionsEntity> findByUserName(String userName);
}
