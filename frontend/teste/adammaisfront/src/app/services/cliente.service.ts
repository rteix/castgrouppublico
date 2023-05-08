import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { requestOptions } from '../contsglobal/service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cpfexisteservice = environment.api + '/cliente/isCPFUnico';
  private saveClientePF = environment.api + '/cliente/cadastroClientePF'
  
  constructor(private http: HttpClient) { }
  consultarCPF(cpf : string){
    const data = {
       cpf : cpf 
    }
    console.log(this.cpfexisteservice)
    console.log(data)
    return this.http.post<{mensagem: boolean}>(this.cpfexisteservice , data , requestOptions);
  }
  salvarDadosClientePF(dados){
    console.log(dados)
    return this.http.post<{mensagem: number}>(this.saveClientePF , dados , requestOptions);
  }
}
