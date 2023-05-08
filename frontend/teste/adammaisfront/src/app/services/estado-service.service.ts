import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { requestOptions } from '../contsglobal/service';

@Injectable({
  providedIn: 'root'
})
export class EstadoServiceService {
  private estadourl = environment.api + '/codedata/getEstados';
  private cidadeurl = environment.api + '/codedata/getCidades?estado=';
  private cepurl = 'https://viacep.com.br/ws/';
  constructor(private http: HttpClient) { 

   }
   getAllEstados(){
      return this.http.get(this.estadourl , requestOptions)
   }
   getAllCidades(estado : string ){
    
    return this.http.get(this.cidadeurl + estado , requestOptions)

   }
   getEnderecoCEP(cep : string){
    // https://viacep.com.br/ws/45570-000/json/
     return this.http.get(this.cepurl + cep + '/json/') 
   }

}
