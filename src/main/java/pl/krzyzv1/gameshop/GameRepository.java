package pl.krzyzv1.gameshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GameRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Game> getAll(){
		return jdbcTemplate.query("SELECT id,name,rating FROM game",
				BeanPropertyRowMapper.newInstance(Game.class));
	}
	
	public Game getById(int id) {
	return jdbcTemplate.queryForObject("SELECT id,name,rating FROM game WHERE " +
	"id = ?", BeanPropertyRowMapper.newInstance(Game.class), id);
		}

	public int save(List<Game> games) {
		games.forEach(game -> jdbcTemplate
				.update("INSERT INTO game(name,rating) VALUES(?, ?)",
						game.getName(), game.getRating()
						));

		return 1;
	}
	
	public int update(Game game) {
		return jdbcTemplate.update("UPDATE game SET name=?, rating=? WHERE id=?",
			game.getName(), game.getRating(), game.getId());
	}
	
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM game WHERE id=?", id);
	}
}






