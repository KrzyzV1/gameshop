package pl.krzyzv1.gameshop.sterowniki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void someMethod() {
        // użycie passwordEncoder
    }
}
