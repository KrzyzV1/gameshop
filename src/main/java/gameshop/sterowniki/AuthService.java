package gameshop.sterowniki;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public boolean authenticate(String username, String password) {
        // Tu możesz dodać logikę weryfikacji użytkowników, np. odczyt z bazy danych
        return "user".equals(username) && "password".equals(password);
    }
}
