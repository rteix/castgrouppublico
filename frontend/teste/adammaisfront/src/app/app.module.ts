import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AdamAutenticadorService } from './services/adam-autenticador.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ProfissaoServiceService } from './services/profissao-service.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    NgbModule, 
    InputTextModule, 
    BrowserAnimationsModule, 
    FormsModule, ReactiveFormsModule, HttpClientModule, 
    MessagesModule, 
    RadioButtonModule, 
    ButtonModule,
    CheckboxModule, 
    DialogModule, 
    ImageModule, 
    CardModule, 
    CalendarModule,
    AutoCompleteModule, 
    InputMaskModule, 
    ToastModule,
    ProgressBarModule,
    ProgressSpinnerModule, 
    DropdownModule
    
  ],
  providers: [AdamAutenticadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
