import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpresasService } from '../../../services/empresas.service';
import { EmpresasModel } from '../../../models/Empresas.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-e',
  templateUrl: './actualizar-e.component.html',
  styleUrls: ['./actualizar-e.component.css']
})
export class ActualizarEComponent implements OnInit {

  empresa: EmpresasModel = new EmpresasModel();

  @Input() idEmpresa: string="";

  @Output() emiterUpdate: EventEmitter<any> = new EventEmitter();
  
  constructor(private readonly empresasService: EmpresasService) { }

  ngOnInit(): void {
    console.log(this.idEmpresa);
    this.empresasService.getEmpresa(this.idEmpresa)
    .then((response: any)=>{
      this.empresa = response.cont.empresa;
    })
    .catch(()=>{});
  }

  actualizarEmp(forma: NgForm){
    this.empresasService.putEmpresa(this.empresa, this.idEmpresa)
    .then((result: any) => {
      Swal.fire({
        icon: "success",
        text: "Datos de empresa actualizados"
      });

      forma.reset();
      this.emiterUpdate.emit();
    }).catch((err: any) => {
      Swal.fire({
        icon: "error",
        text: "Lo sentimos, los datos no se actualizaron"
      });
    }); 
  }

  limpiarForm(forma: NgForm){
    forma.reset();
  }

}
