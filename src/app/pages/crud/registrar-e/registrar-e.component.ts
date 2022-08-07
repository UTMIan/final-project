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

 empresa: EmpresasModel = new EmpresasModel();
  constructor(private readonly empresasService: EmpresasService) { }

  ngOnInit(): void {
  }

  resgistrarE(forma: NgForm){
   this.empresasService.postEmpresas(this.empresa)
    .then((response:any)=>{
      Swal.fire({
        icon: "success",
        text:"Empresa registrada"
    });
    forma.reset();
  })
    .catch((error:any)=>{
      Swal.fire({
        icon: "error",
        text:"Ha ocurrido un error"
      });
    });

  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }
}
