import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-altasreq',
  templateUrl: './altasreq.component.html',
  styleUrls: ['./altasreq.component.scss']
})
export class AltasreqComponent implements OnInit {
  altaReq:FormGroup;
  fecha = new Date();
  añoEjercicio = this.fecha.getFullYear();
  fechaHoy = this.fecha.toLocaleDateString();
  folio = 0
  estatus = 'Captura';
  usuarioCap = 'SamuelGT'

  

  constructor(private fb:FormBuilder, private router:Router) { 

      this.altaReq = this.fb.group({
      ejercicio:[this.añoEjercicio,[Validators.required]],
      folio:[this.folio + 1,[Validators.required]],
      fechaCap:[this.fechaHoy,[Validators.required]],
      estatus:[this.estatus,[Validators.required]],
      usuarioCap:[this.usuarioCap,[Validators.required]],
      departamento:['0',[Validators.required]],
      CC:['0',[Validators.required]],
      detalle:['',[Validators.required]],

    });

  }

  ngOnInit(
    
  ): void {
  }

  reqSubmit():void{
    if(this.altaReq.valid){
      console.log(this.altaReq.value)
      alert(`Requisicion Guardada y enviada al correo ${localStorage.getItem('email')}`)
      this.router.navigate(['/dashboard']);
    }else{
      console.log("Datos Incompletos-.");
      
    }

  }
  selectCC(){
 
  this.altaReq.controls['CC'].setValue(this.altaReq.get('departamento')?.value);
    
  }

}
