import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';         
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.scss']
})
export class DetalleArticuloComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any, //No mover!!!
    private formBuilder: FormBuilder, //No mover!!!
    public dRef: MatDialogRef<DetalleArticuloComponent>, //Adaptar según modelo correspondiente
    private theService: ArticulosService, //Adaptar según modelo correspondiente
    ) { }

  ngOnInit(): void {
  }

  /////////// Ventanas
  onClose(){
    this.dRef.close();
  
  }

}
