package gameshop.sterowniki;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUsername(String username); // Znajduje użytkownika po nazwie użytkownika
    Optional<Users> findByUsernameAndPassword(String username, String password); // Znajduje użytkownika po nazwie i haśle
}
