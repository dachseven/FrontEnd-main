import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { proyectoServiceService } from 'src/app/service/proyecto.service.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private proyectoS: proyectoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreE, this.descripcionE);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
