package pl.krzyzv1.gameshop.sterowniki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // CORS dla wszystkich metod w tym kontrolerze
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping("/games")
    @PreAuthorize("isAuthenticated()") // Każdy uwierzytelniony użytkownik może wyświetlać gry
    public List<Game> getAll() {
        return gameRepository.getAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()") // Każdy uwierzytelniony użytkownik może wyświetlać gry
    public Game getById(@PathVariable("id") int id) {
        return gameRepository.getById(id);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')") // Tylko administrator może dodawać gry
    public int add(@RequestBody List<Game> games) {
        return gameRepository.save(games);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Tylko administrator może edytować gry
    public int update(@PathVariable("id") int id, @RequestBody Game updatedGame) {
        Game game = gameRepository.getById(id);

        if (game != null) {
            game.setQuantity(updatedGame.getQuantity());
            game.setName(updatedGame.getName());
            game.setPrice(updatedGame.getPrice());
            game.setImgUrl(updatedGame.getImgUrl());

            gameRepository.update(game);

            return 1;
        } else {
            return -1;
        }
    }

    @PatchMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Tylko administrator może częściowo edytować gry
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Game updatedGame) {
        Game game = gameRepository.getById(id);

        if (game != null) {
            if (updatedGame.getQuantity() != null) game.setQuantity(updatedGame.getQuantity());
            if (updatedGame.getName() != null) game.setName(updatedGame.getName());
            if (updatedGame.getPrice() != null) game.setPrice(updatedGame.getPrice());
            if (updatedGame.getImgUrl() != null) game.setImgUrl(updatedGame.getImgUrl());

            gameRepository.update(game);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Tylko administrator może usuwać gry
    public int delete(@PathVariable("id") int id) {
        return gameRepository.delete(id);
    }
}
