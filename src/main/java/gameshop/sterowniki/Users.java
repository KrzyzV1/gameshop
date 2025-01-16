package gameshop.sterowniki;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users{
	private Integer id;
	private String username;
	private String password;
	private String role;
}