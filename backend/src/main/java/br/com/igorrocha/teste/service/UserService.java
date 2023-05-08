package br.com.igorrocha.teste.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import br.com.igorrocha.teste.config.security.TokenUtil;
import br.com.igorrocha.teste.dtos.request.LoginRequest;
import br.com.igorrocha.teste.dtos.response.TokenResponse;

@Service
public class UserService {

	@Autowired
	AuthenticationManager authmanaged;
	
	@Autowired
	TokenUtil tokenutil;
	
	
	public  TokenResponse logar(  LoginRequest loginRequest ) {
		Authentication authentication = authmanaged.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		return configurarAutenticacao(authentication) ;
	}
	
	private TokenResponse configurarAutenticacao(Authentication autentication ) {
		
		SecurityContextHolder.getContext().setAuthentication(autentication);
			
		String jwt = tokenutil.gerarToken(autentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) autentication.getPrincipal();
		
		List<String> papeis = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		
			
		// String token, String type, Long id, String username, String email, List<String> papeis
		TokenResponse token = new TokenResponse(jwt, 
				 userDetails.getId(), 
				 userDetails.getUsername(), 
				 userDetails.getEmail(), 
				 papeis);
		
		return token ; 
	}
	
}
