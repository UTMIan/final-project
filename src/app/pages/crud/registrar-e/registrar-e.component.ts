import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresasModel } from 'src/app/models/Empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-e',
  templateUrl: './registrar-e.component.html',
  styleUrls: ['./registrar-e.component.css']
})
export class RegistrarEComponent implements OnInit {

 usuario: EmpresasModel = new EmpresasModel();
  constructor(private readonly EmpresasService: EmpresasService) { }

  ngOnInit(): void {
  }

  resgistrarE(forma: NgForm){
   this.EmpresasService.postEmpresas(this.usuario)
    .then((response:any)=>{
      Swal.fire({
        icon: "success",
        text:"Registrado correctamente :D"
    });
    forma.reset();
  })
    .catch((error:any)=>{
      Swal.fire({
        icon: "error",
        text:"Ha ocurrido un error"
      });
    });
   // console.log('Se regstro correctamente');
   // console.log(this.usuario);
   // console.log(forma.invalid);
  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }
}
