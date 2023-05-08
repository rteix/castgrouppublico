package br.com.igorrocha.teste.models;
import javax.persistence.*;


/**
 * entitdade do modelo que referencia a tabela papel 
 * @author igorr
 *
 */
@Entity
@Table(name="papel")
public class Papel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 100)
	private EPapel name ;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public EPapel getName() {
		return name;
	}

	public void setName(EPapel name) {
		this.name = name;
	} 
	
	
	
	

}
