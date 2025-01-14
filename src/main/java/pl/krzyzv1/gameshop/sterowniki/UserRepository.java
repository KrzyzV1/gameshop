package pl.krzyzv1.gameshop.sterowniki;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username); // Wyszukiwanie użytkownika po nazwie
}
