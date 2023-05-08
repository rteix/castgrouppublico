package br.com.igorrocha.teste.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.igorrocha.teste.models.User;
import br.com.igorrocha.teste.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userdao;

	@Override
	@Transactional
	  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			User user = userdao.findByUsername(username)
	        .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com esse nome: " + username));
	    return UserDetailsImpl.build(user);
	  }

}
