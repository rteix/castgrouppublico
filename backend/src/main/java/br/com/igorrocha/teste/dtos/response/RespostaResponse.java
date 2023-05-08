package br.com.igorrocha.teste.dtos.response;

public class RespostaResponse {
	private String message;

	public RespostaResponse(String message) {
	    this.message = message;
	  }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
