package pl.krzyzv1.gameshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {
	
	@Autowired
	GameRepository gameRepository;
	
	
	@GetMapping("")
	public List<Game> getAll(){
		return gameRepository.getAll();
	}
	
	@GetMapping("/{id}")
	public Game getById(@PathVariable("id") int id) {
		return gameRepository.getById(id);
	}
	
	@PostMapping("")
	public int add(@RequestBody List<Game> games) {
		return gameRepository.save(games);
	}
	
	@PutMapping("/{id}")
	public int update(@PathVariable("id") int id, @RequestBody Game updatedGame) {
		Game game= gameRepository.getById(id);
		
		if (game !=null) {
			game.setQuantity(updatedGame.getQuantity());
			game.setName(updatedGame.getName());
			game.setPrice(updatedGame.getPrice());
			game.setImgUrl(updatedGame.getImgUrl());
			
			
			gameRepository.update(game);
			
			return 1;
		}
		else {
			return -1;
		}
	}
	
	@PatchMapping("/{id}")
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
	public int delete(@PathVariable ("id") int id) {
		return gameRepository.delete(id);
	}
}