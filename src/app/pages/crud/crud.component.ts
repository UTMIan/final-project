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
  empresas: EmpresasModel[] = [];
  idEmpresa: string="";

  constructor(private readonly empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.obtenerEmp();
    }

    obtenerEmp(){
      this.empresasService.getEmpresas()
      .then((response:any)=>{
        this.empresas = response.cont.empresas;
      })
      .catch((error:any)=>{
        this.empresas = [];
      }) 
  }

  update(idEmpresa: any){
    this.idEmpresa = idEmpresa;
    this.showUpdate = !this.showUpdate;
  }

  restablecerRegistro(){
    this.showUpdate = false;
    this.obtenerEmp();
  }

  eliminar(empresa: EmpresasModel){
    Swal.fire({
      icon:'question',
      title: `Seguro que desea eliminar ${empresa.strNombre}?`,

      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    })
    .then((response) => {
      if (response.isConfirmed) {
        this.empresasService.deleteEmpresas(empresa._id)
        .then((result:any) => {
          Swal.fire({
            icon: "info",
            text: "Empresa eliminada"
          });
          this.obtenerEmp();
        })
      }
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: "Fallo en la eliminacion"
      })
    });
  }

  shwUpdate(idEmpresa:any){
    this.idEmpresa = idEmpresa;
    this.showUpdate = true;
  }

}
