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
		return jdbcTemplate.query("SELECT id,quantity,name,price,imgUrl FROM game",
				BeanPropertyRowMapper.newInstance(Game.class));
	}
	
	public Game getById(int id) {
	return jdbcTemplate.queryForObject("SELECT id,quantity,name,price,imgUrl FROM game WHERE " +
	"id = ?", BeanPropertyRowMapper.newInstance(Game.class), id);
		}

	public int save(List<Game> games) {
		games.forEach(game -> jdbcTemplate
				.update("INSERT INTO game(name,rating) VALUES(?, ?)",
						game.getQuantity(), game.getName(), game.getPrice(),
						game.getImgUrl()
						));

		return 1;
	}
	
	public int update(Game game) {
		return jdbcTemplate.update("UPDATE game SET quantity=?, name=?, price=?, imgUrl=? WHERE id=?",
				game.getQuantity(), game.getName(), game.getPrice(),
				game.getImgUrl(), game.getId());
	}
	
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM game WHERE id=?", id);
	}
}