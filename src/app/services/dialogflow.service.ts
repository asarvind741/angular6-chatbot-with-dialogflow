import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {



  constructor(private httpClient: HttpClient) { }

  getResponse(query: string) {
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${environment.DIALOG_CLIENT_TOKEN}` })

    return this.httpClient.post(`${environment.DIALOG_BASE_URL}`, data,
      { observe: 'body', headers: headers })
  }
}
