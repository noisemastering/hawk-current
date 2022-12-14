import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';         
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { AlmacenesService } from '../almacenes-service.service';

import { Almacen } from 'src/app/shared/classes/almacen';
import { Locacion } from 'src/app/shared/classes/locacion';

@Component({
  selector: 'app-detalle-almacen',
  templateUrl: './detalle-almacen.component.html',
  styleUrls: ['./detalle-almacen.component.scss']
})
export class DetalleAlmacenComponent implements OnInit {

  /////////////////////// No mover !!! /////////////////////////////////
  theForm: FormGroup;                                       //
  submitted= false;                                                 //
  items= <any>[];                                                   //
  keyws= <any>[];                                                   //
  working: boolean= false;                                          //
  
  //MatChip                                                         //
  visible: boolean = true;                                          //
  selectable: boolean = true;                                       //
  removable: boolean = true;                                        //
  addOnBlur: boolean = true;                                        //
  keywords = [];                                                    //
  separatorKeysCodes = [ENTER, COMMA];                              //
  @ViewChild('keysInput') keysInput: ElementRef<HTMLInputElement>;  //
  public theID: number;                                             //
  listData: MatTableDataSource<any>;
  displayColumns: string[]=['Nombre','Acciones'];
  
/////////////////// /No mover !!! ////////////////////////////////////

  ///// Adaptar al objeto correspondiente
  private almacen: Almacen;
  locaciones: Locacion[];
  title: string="Detalle Almac??n";
  ///// /Adaptar al objeto correspondiente

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any, //No mover!!!
    private formBuilder: FormBuilder, //No mover!!!
    public dRef: MatDialogRef<DetalleAlmacenComponent>, //Adaptar seg??n modelo correspondiente
    private theService: AlmacenesService, //Adaptar seg??n modelo correspondiente
  ) { 
    this.theID= data.theID; console.log("The ID: ", this.theID)
  }

  ngOnInit(): void {
    this.theForm = this.formBuilder.group({
      itemID: [''],
      descripcion: [''],
      keys: [''],
      notas: [''],
      fechaCreacion: [''],
      usuarioCreacion: [''],
      ultimaModificacion: [''],
      usuarioModificacion: [''],
      items: this.formBuilder.array([])
  });
    this.getRecord();// No mover!!!
  }

  //////////// Formulario
  get f() { return this.theForm.controls; } // No mover

  createItem(): FormGroup {
    return this.formBuilder.group({
      descripcion: [''],
      notas: ['']
    });
  }

  createPopulatedItem(locP: Locacion): FormGroup {
    console.log("Item creado", locP.Nombre);
    return this.formBuilder.group({
      descripcion: [locP.Nombre]
    });
  }

  addPopulatedItem(locP: Locacion): void {
    this.items = this.theForm.get('items') as FormArray;
    this.items.push(this.createPopulatedItem(locP));
  }

  /////////// Ventanas
  onClose(){
    this.dRef.close();
  
  }

  ////////// Traer datos
  getRecord(): void {
    this.almacen= new Almacen;
    this.almacen.AlmacenID= this.theID
    this.theService.getDetailNA(this.almacen.AlmacenID)
      .subscribe((response )=>{
        this.almacen= response as Almacen; 
        console.log('Detail: ', response);
        
        ///////////// Adaptar al modelo correspondiente ////////////
        this.theForm.controls['itemID'].setValue(response.AlmacenID);
        this.theForm.controls['descripcion'].setValue(response.Nombre);
        this.theForm.controls['notas'].setValue(response.Notas);
        this.theForm.controls['ultimaModificacion'].setValue(response.Modificado);
        this.theForm.controls['usuarioModificacion'].setValue(response.Modifico);
        this.theForm.controls['fechaCreacion'].setValue(response.Creado);
        this.theForm.controls['usuarioCreacion'].setValue(response.Creo);
        this.keyws= this.almacen.Keywords;
        let locs: Locacion[];
        locs= response.NALocaciones as Locacion[];
        this.listData= new MatTableDataSource(locs);
        this.listData.sort= this.sort;
        this.listData.paginator= this.paginator;

        this.working= false; //No mover
    });
  }
}
