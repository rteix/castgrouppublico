package br.com.igorrocha.teste.controller;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;

import br.com.igorrocha.teste.dtos.request.LoginRequest;
import br.com.igorrocha.teste.dtos.response.RespostaResponse;
import br.com.igorrocha.teste.models.EPapel;
import br.com.igorrocha.teste.models.Papel;
import br.com.igorrocha.teste.models.User;
import br.com.igorrocha.teste.repository.PapelRepository;
import br.com.igorrocha.teste.repository.UserRepository;
import br.com.igorrocha.teste.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

	
	
	@Autowired
	UserRepository userdao;

	@Autowired
	PapelRepository papeldao;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	UserService userService;
	
	@Autowired(required = true )
	AuthenticationManager authenticationManager;
	
	
	@GetMapping("/")
	public String home() {
		return "Tudo ok!";
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> logar(@Valid @RequestBody LoginRequest loginrequest ){
		return ResponseEntity.ok(userService.logar(loginrequest));
	}
	
	@PostMapping("/addUsuario")
	public ResponseEntity<?> addUsuario() throws RuntimeException {
		User user = new User("igor", 
				 "igorrteixeira@hotmail.com",
				 encoder.encode("1"));
		Set<Papel> roles = new HashSet<>();
		Papel userRole;
		try {
			userRole = papeldao.findByName(EPapel.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Papel não encontrado"));
			roles.add(userRole);
		} catch (RuntimeException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		userdao.save(user);

		return ResponseEntity.ok(new RespostaResponse("User registered successfully!"));
	}
	
	

}
