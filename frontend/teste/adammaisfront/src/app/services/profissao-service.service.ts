import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { requestOptions } from '../contsglobal/service';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoServiceService {
  private profissaoservice = environment.api + '/codedata/getProfissoes/'
  constructor(private http: HttpClient) { }

  getAllProfissoes(str : string) {
    return this.http.get(this.profissaoservice + str   , requestOptions)
  }
  
}

