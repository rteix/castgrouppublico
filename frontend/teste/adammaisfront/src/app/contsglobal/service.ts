import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environments";

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
  }

 export const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };