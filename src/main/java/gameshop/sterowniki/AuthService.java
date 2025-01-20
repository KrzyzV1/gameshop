package gameshop.sterowniki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public Optional<Users> authenticate(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
