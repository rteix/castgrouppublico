package br.com.igorrocha.teste.dtos.response;

import java.util.List;

/**
 * @author igorr
 *
 */
public class TokenResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String email;
	private List<String> papeis;
	public TokenResponse(String token,  Long id, String username, String email, List<String> papeis) {
		super();
		this.token = token;
		this.id = id;
		this.username = username;
		this.email = email;
		this.papeis = papeis;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<String> getPapeis() {
		return papeis;
	}
	public void setPapeis(List<String> papeis) {
		this.papeis = papeis;
	}
	
	
	
	
}
