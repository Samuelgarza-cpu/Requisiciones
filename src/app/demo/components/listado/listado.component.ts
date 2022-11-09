import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  requisicion:any = [];
  fecha:any;
  fechaHoy:any;
  fechaCaptura:any;
  cotizador = false
  id_requis:any;

  constructor(public service:ApiService) { }

  ngOnInit(): void {
    this.service.getRequisiciones().subscribe((res)=>{
    
      this.requisicion = Array.of(res);

    })
  }

  cotizar(event:any){
    this.cotizador = true
    this.id_requis = event
    console.log(event)
  }

}
