package pl.krzyzv1.gameshop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game{
	private int id;
	private String name;
	private int rating;
}