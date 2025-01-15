package gameshop.sterowniki;

import java.math.BigDecimal;

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
	private BigDecimal price;
	private String imgUrl;
}