import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {



  respuesta: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  fesPost(name: string, mail: string) {

    const url = 'http://localhost:8080/';
    const body = { nombre: name, correo: mail };

    const postObserver = {
      next: value => {
        console.log('POST: ');
        this.respuesta = value;
        console.log(this.respuesta);
      },
      error: err => {
        console.log('POST ERROR: ');
        console.log(err);
      },
      complete: () => {
        console.log('POST FINISHED !!');
      }
    };


    this.http.post(url, body).subscribe(postObserver);
  }

}
