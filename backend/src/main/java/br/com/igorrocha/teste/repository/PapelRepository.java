package br.com.igorrocha.teste.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.igorrocha.teste.models.EPapel;
import br.com.igorrocha.teste.models.Papel;

@Repository
public interface PapelRepository extends JpaRepository<Papel, Long> {
  Optional<Papel> findByName(EPapel name);
}
