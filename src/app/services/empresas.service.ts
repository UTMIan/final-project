import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { EmpresasModel } from 'src/app/models/Empresas.model'

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url: string = `${environment.baseURL}/empresa`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { }

  getEmpresas(){
    return lastValueFrom (this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
  }

  getEmpresa(idEmpresa:string){
    return lastValueFrom (this.http.get(`${this.url}/${idEmpresa}`, {params: {matricula: this.matricula}}));
  }

  postEmpresas(empresa: EmpresasModel){
    return lastValueFrom(this.http.post(`${this.url}`, empresa, {params:{matricula:this.matricula}}));
  }

  putEmpresa(empresa: EmpresasModel, idEmpresa: string){
    return lastValueFrom(this.http.put(`${this.url}/${idEmpresa}`, empresa, {params:{matricula:this.matricula}}));
  }

  deleteEmpresas(idEmpresa: any){
    return lastValueFrom(this.http.delete(`${this.url}/${idEmpresa}`, {params:{matricula:this.matricula}}));
  }

}
