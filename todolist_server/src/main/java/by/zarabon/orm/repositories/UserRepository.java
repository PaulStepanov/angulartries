package by.zarabon.orm.repositories;

import by.zarabon.orm.entyties.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
}
