import { Component, OnInit } from '@angular/core';
import { EmpresasModel } from 'src/app/models/Empresas.model';
import Swal from 'sweetalert2';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  showUpdate: boolean = false;
  Empresas: EmpresasModel[] = [];
  idEmpresa: string="";

  constructor(private readonly empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.empresasService.getEmpresas()
    .then((response:any)=>{
      this.Empresas = response.cont.usuarios;
      console.log(this.Empresas);
    })
    .catch((error:any)=>{
      Swal.fire({
        icon: "error",
        text: error.error.msg
      })
    })
  }

  update(idEmpresa: any){
    this.idEmpresa = idEmpresa;
    this.showUpdate = !this.showUpdate;
  }

}
