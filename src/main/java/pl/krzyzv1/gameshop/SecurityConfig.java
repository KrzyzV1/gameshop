package pl.krzyzv1.gameshop;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true) // Włącz @PreAuthorize
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // Wyłącz CSRF na potrzeby testów
            .authorizeRequests()
                .anyRequest().authenticated() // Wymagaj autoryzacji dla wszystkich żądań
            .and()
            .httpBasic(); // Użyj prostej autoryzacji Basic Auth

        return http.build();
    }
}