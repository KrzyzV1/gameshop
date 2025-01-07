package pl.krzyzv1.gameshop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game{
	private Integer id;
	private Integer quantity;
	private String name;
	private Double price;
	private String imgUrl;
}