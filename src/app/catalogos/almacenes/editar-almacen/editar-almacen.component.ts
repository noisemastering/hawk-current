import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';         
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete'
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';

import { Almacen } from 'src/app/shared/classes/almacen';
import { Locacion } from 'src/app/shared/classes/locacion';
import { Response } from 'src/app/shared/classes/response';

import { AlmacenesService } from '../almacenes-service.service';                                //
import { AutocompleteService } from 'src/app/servicios/autocomplete.service';
import { NotificationsService } from 'src/app/servicios/notifications.service';
import { DuplicatesService } from 'src/app/servicios/duplicates.service';

import { Usuario } from 'src/app/shared/classes/usuario';
import { KeywordsService } from 'src/app/servicios/keywords.service';
import { Keyword } from 'src/app/shared/classes/keyword';

 
@Component({
  selector: 'app-editar-almacen',
  templateUrl: './editar-almacen.component.html',
  styleUrls: ['./editar-almacen.component.scss'],
  providers:[AutocompleteService]
})
export class EditarAlmacenComponent implements OnInit {

  /////////////////////// No mover !!! /////////////////////////////////
  theForm: FormGroup;                                         //
  submitted= false;                                                   //
  items= <any>[];                                                     //
  keyws= <any>[];               
  //Chip
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  keywords: string[] = [];
  separatorKeysCodes = [ENTER, COMMA];
                           //
  @ViewChild('keysInput') keysInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoKW') matAutocompleteKW: MatAutocomplete;   //
  
  public theID: number;                                               //
  permission: boolean;               
  theOriginalName: string = '';          
  listData: MatTableDataSource<any>;
  displayColumns: string[]=['Nombre','Acciones'];                       //
  /////////////////// /No mover !!! ////////////////////////////////////

  private almacen: Almacen;// Adaptar según modelo correspondiente
  title: string="Editar Almacén";
  locaciones: Locacion[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(
    @Inject(MAT_DIALOG_DATA) data, //No mover!!!
    private formBuilder: FormBuilder,  //No mover!!!
    private autocompleteService: AutocompleteService,  //No mover!!!
    private notificationService: NotificationsService,  //No mover!!!
    public dRef: MatDialogRef<EditarAlmacenComponent>, 
    private keywordsService: KeywordsService,
    private theService: AlmacenesService // Adaptar según modelo correspondienteya lo 
    ) { 
      this.theID= data.theID; console.log('ID: '+this.theID);
    }

  ngOnInit() {

    ////////// Creación de formulario, adaptar según modelo correspondiente
    this.theForm = this.formBuilder.group({
        itemID: [''],
        descripcion: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(24)])],
        keys: [''],
        notas: ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(160)])],
        fechaCreacion: [''],
        usuarioCreacion: [''],
        ultimaModificacion: [''],
        usuarioModificacion: ['']
    });
    /////////////// No mover!!! ////////////
    this.theForm.controls['keys'].valueChanges.subscribe(
      term => { console.log('entro')
        if (term != '') {
          this.autocompleteService.searchKW(term).subscribe(
            data => {
              this.keyws = data as any[];
              console.log("Keys: ", this.keyws);
          })
        }
    });  
    /////////////// /No mover!!! ////////////

    /////////// Traemos datos
    this.getRecord();// No mover!!!


  }

  ////// Funciones

  ////// Formularios y validaciones

  get f() { return this.theForm.controls; } // Mo mover!!!

  getItemsFormArray(): FormArray{
    return this.theForm.get('items') as FormArray;
  }
  
  duplicate(valor: string){ // Adaptar a los campos utilizados

    if(this.theForm.controls['descripcion'].value!=this.theOriginalName){ //Validación para que no tome el mismo nombre como duplicado
      this.theService.checkForDuplicate(this.theForm.controls['descripcion'].value)
      .subscribe(
        (res: any) => {
          console.log("Duplicate",res);
          if(res.Code==100){
            this.theForm.controls['descripcion'].setErrors({'duplicate': false});
            this.theForm.controls['descripcion'].updateValueAndValidity();
          }else{
            this.theForm.controls['descripcion'].setErrors({'duplicate': true});
          }
        }
      );
    }
  }

  resetForm(){ // No mover
    console.log('Form reset');
    this.theForm.reset();
  }

  validate() { // No mover
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.theForm.invalid) {
      this.findInvalidControls();
      console.log('Form invalid');
      return;
    }else{
      //console.log('Form is valid');
      //alert('SUCCESS!! \n\n' + JSON.stringify(this.keywords))
      this.editRecord();
    }
  }

  /////////// /Formularios
  
  ////////// Traer datos
  getRecord(): void {
    this.almacen= new Almacen;
    this.almacen.AlmacenID= this.theID
    this.theService.getDetailNA(this.almacen.AlmacenID)
      .subscribe((response )=>{
        this.almacen= response as Almacen; 
        
        ///////////// Adaptar al modelo correspondiente ////////////
        this.theForm.controls['itemID'].setValue(response.AlmacenID);
        this.theForm.controls['descripcion'].setValue(response.Nombre);
        this.theForm.controls['notas'].setValue(response.Notas);
        this.theForm.controls['ultimaModificacion'].setValue(response.Modificado);
        this.theForm.controls['usuarioModificacion'].setValue(response.Modifico);
        this.theForm.controls['fechaCreacion'].setValue(response.Creado);
        this.theForm.controls['usuarioCreacion'].setValue(response.Creo);
        this.keywords= JSON.parse(this.almacen.Keywords);
        this.theOriginalName = response.Nombre;
        this.locaciones= response.NALocaciones as Locacion[];
        this.listData= new MatTableDataSource(this.locaciones);
        this.listData.sort= this.sort;
        this.listData.paginator= this.paginator;
    });
  }


  ////// Formularios dinámicos, de lo contrario, borrar

  //Adaptar al modelo correspondiente
  createItem(): FormGroup {
    return this.formBuilder.group({
      descripcion: [''],
      notas: ['']
    });
  }
  ////// No mover!!!
  addItem(): void {
    this.items = this.theForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  ////// No mover!!!
  removeItem(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.items.removeAt(index);
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
  ////// /Formularios dinámicos, de lo contrario, borrar

  ////// Ventanas
  onClose(){ //No mover
    this.theForm.reset();
    this.dRef.close();
  }

  add(event: MatChipInputEvent): void {
    console.log("input");
    let input = event.input;
    let value = event.value;

    // Add our keyword
    if ((value || '').trim()) {
      this.keywords.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.theForm.controls['keys'].setValue(null);
  }

  remove(keyword: any): void {
    console.log("Entró: "+this.keywords);
    console.log("Keyword: "+keyword);
    let index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
    console.log("Terminó: "+this.keywords);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.theForm.controls['keys'].setValue(null);
    this.keywords.push(event.option.viewValue.trim());
    this.keysInput.nativeElement.value = '';
  }
  ////////// /Keywords

  //// Envío de datos al servidor

  editRecord(): void {

    ///////// Adaptar según el modelo correspondiente
    this.almacen.AlmacenID=  this.theForm.controls['itemID'].value;
    this.almacen.Nombre=  this.theForm.controls['descripcion'].value;
    this.almacen.Keywords=  JSON.stringify(this.keywords);
    this.almacen.Notas=  this.theForm.controls['notas'].value;
    this.almacen.Locaciones= [];
    console.log("Almacén a editar: ", this.almacen);
    let keysarr: Keyword[] = [];
    this.keywords.forEach((k)=>{
      let w= new Keyword;
      console.log("Mercedes: ", k)  
      w.Word= k;
      w.Count= 1;
      keysarr.push(w);
    })
  this.theService.editRecord(this.almacen)
      .subscribe({
        next: (response: Response) => {
        this.notificationService.success('Almacén actualizado');        
        this.keywordsService.addArray(keysarr).subscribe({
          next: (response) => { console.log("Keys response: ", response)},
          error: (err) => {console.log("Error: ", err.message)}
        })
      },
        error: (err) => {
          this.notificationService.error("Error: "+ err);
        }
      });
    this.onClose();
  } 
  // Función para encontrar el campo validador que no deja pasar al formulario
  public findInvalidControls() {
    const invalid = [];
    const controls = this.theForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            console.log('Invalid: '+name);
        }
    }
    
  }
}