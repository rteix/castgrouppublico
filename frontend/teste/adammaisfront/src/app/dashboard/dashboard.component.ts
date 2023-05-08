import { Component, OnInit } from '@angular/core';
import { AdamAutenticadorService } from '../services/adam-autenticador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username 
  constructor(
    private authService : AdamAutenticadorService, 
    private router: Router)
  {}
  ngOnInit(): void {
      this.username = this.authService.Username;
      if (this.username == undefined){
        this.router.navigate([''])    
      }
      setTimeout(()=>{
        this.logout()
      },60000)
  }
  logout(){
    this.authService.logout() ; 
    this.router.navigate([''])
  }

}
