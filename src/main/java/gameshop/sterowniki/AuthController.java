package gameshop.sterowniki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<Users> optionalUser = userRepository.findByUsername(request.getUsername());

        if (optionalUser.isPresent() && optionalUser.get().getPassword().equals(request.getPassword())) {
            Users user = optionalUser.get();
            return ResponseEntity.ok(new LoginResponse("Zalogowano pomyślnie", user.getRole()));
        } else {
            return ResponseEntity.status(401).body("Nieprawidłowe dane logowania");
        }
    }
}

class LoginRequest {
    private String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class LoginResponse {
    private String message;
    private String role;

    public LoginResponse(String message, String role) {
        this.message = message;
        this.role = role;
    }

    public String getMessage() { return message; }
    public String getRole() { return role; }
}
