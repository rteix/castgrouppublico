import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AdamAutenticadorService } from '../services/adam-autenticador.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string ; 
  senha: string ;
  chave: string ;
  error: any;
  messages: Message[]; 
  constructor(
    private authService : AdamAutenticadorService, 
    private router: Router)
  {}
  ngOnInit(): void {
      this.usuario = ''
      this.senha = ''
      this.chave = ''
  }
  logar(username  : string , password : string  ){
    console.log(username)
      this.authService.login(username , password ).subscribe(
      success => this.router.navigate(['dashboard']),
      error => { 
        this.messages = [{  severity: 'error', summary: 'Login Inválido', detail: 'Seus dados de acessos estão inválidos!' } ]; } 
    );
      
  }

}
