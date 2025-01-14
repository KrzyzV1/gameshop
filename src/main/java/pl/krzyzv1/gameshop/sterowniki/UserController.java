package pl.krzyzv1.gameshop.sterowniki;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/signup")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    public String registerUser(@RequestBody User user) {
        // Sprawdzanie poprawności roli
        if (!user.getRole().equalsIgnoreCase("admin") && !user.getRole().equalsIgnoreCase("user")) {
            return "Invalid role. Use 'admin' or 'user'";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Kodowanie hasła
        userRepository.save(user);
        return "User registered successfully";
    }
}
