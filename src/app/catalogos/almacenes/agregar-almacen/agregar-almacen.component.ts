import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete'
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';

import { Almacen } from 'src/app/shared/classes/almacen';
import { Locacion } from 'src/app/shared/classes/locacion';

import { AlmacenesService } from '../almacenes-service.service';                                //
import { AutocompleteService } from 'src/app/servicios/autocomplete.service';
import { NotificationsService } from 'src/app/servicios/notifications.service';
import { DuplicatesService } from 'src/app/servicios/duplicates.service';

import { Usuario } from 'src/app/shared/classes/usuario';
import { KeywordsService } from 'src/app/servicios/keywords.service';

@Component({
  selector: 'app-agregar-almacen',
  templateUrl: './agregar-almacen.component.html',
  styleUrls: ['./agregar-almacen.component.scss'],
  providers:[AutocompleteService]
})
export class AgregarAlmacenComponent implements OnInit {

  almacen: Almacen;
  theForm!: FormGroup;
  submitted= false;
  items= <any>[];
  keyws= <any>[];
  locaciones: Locacion[];
  selectedFile: File | undefined;
  title: string="Agregar Almacén";
  usuario: Usuario;
  working: boolean= false;
  isInit: boolean= true;
  

  //Chip
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  keywords: string[] = [];
  separatorKeysCodes = [ENTER, COMMA];

  @ViewChild('keysInput') keysInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoKW') matAutocompleteKW: MatAutocomplete;
  

  constructor(
    private almacenService: AlmacenesService, 
    private formBuilder: FormBuilder, 
    private autocompleteService: AutocompleteService,
    public dRef: MatDialogRef<AgregarAlmacenComponent>,
    private notificationService: NotificationsService,
    private keywordsService: KeywordsService,
    public datepipe: DatePipe
    ) { }

    ngOnInit() {
        //this.spinner.message="Cargando";
        this.theForm = this.formBuilder.group({
          descripcion: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(24)])],
            keys: [''],
            notas: ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(160)])],
            items: this.formBuilder.array([ this.createItem() ])
        });
        this.items.push(this.createItem());
        this.theForm.controls['keys'].valueChanges.subscribe(
          term => { console.log('entro')
            if (term != '') {
              this.autocompleteService.searchKW(term).subscribe(
                data => {
                  this.keyws = data as any[];
                  console.log(data[0].Name);
              })
            }
        });  
        this.usuario= JSON.parse(localStorage.getItem('user') || '{}') as Usuario;
    }

    // convenience getter for easy access to form fields
    get f() { 
      return this.theForm.controls; 
    }

    getItemsFormArray(): FormArray{
      return this.theForm.get('items') as FormArray;
    }

    addAlmacen(): void {
      this.almacen = new Almacen;
      this.almacen.Clave= "xxxx"
      this.almacen.Nombre=  this.theForm.controls['descripcion'].value;
      this.almacen.Notas=  this.theForm.controls['notas'].value;
      this.almacen.Keywords=  JSON.stringify(this.keywords);
      let date= Date.now();
      this.almacen.Modificado=  this.datepipe.transform(date, 'yyyy-MM-dd hh:mm:ss.sss');
      this.almacen.Modifico= this.usuario.ID;
      this.almacen.Creado=  this.datepipe.transform(date, 'yyyy-MM-dd hh:mm:ss.sss');
      this.almacen.Creo= this.usuario.ID;
      console.log("New: ", this.almacen);
      
      let locs: Locacion[] = [];
      for(const control of this.items.controls){
        let loc = new Locacion;
        loc.Nombre= control.controls['descripcion'].value;
        loc.Notas= control.controls['notas'].value;
        loc.Creado= this.datepipe.transform(date, 'yyyy-MM-dd hh:mm:ss.sss');
        loc.Creo= this.usuario.ID;
        loc.Modificado= this.datepipe.transform(date, 'yyyy-MM-dd hh:mm:ss.sss');
        loc.Modifico= this.usuario.ID;
        locs.push(loc);
      }
      this.almacen.Locaciones=  locs;
      //console.log("Almacen a agregar: ", this.almacen);

    this.almacenService.addRecord(this.almacen)
      .subscribe({
        next: () => { 
          this.notificationService.success('Almacén creado')
          this.keywordsService.addArray(this.keywords).subscribe({
            next: (response) => { console.log("Keys response: ", response)},
            error: (err) => {console.log("Error: ", err.message)}
          })
        },
        error: (err) => { this.notificationService.error("Error: "+ err)}
      });
    this.onClose();
    }
  
    resetForm(){
      console.log('Form reset');
      this.theForm.reset();
    }
  
    validate() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.theForm.invalid) {
        this.findInvalidControls();
        console.log('Form invalid');
        return;
      }else{
        //console.log('Form is valid');
        //alert('SUCCESS!! \n\n' + JSON.stringify(this.keywords))
        this.addAlmacen();
      }
    }

    onClose(){
      this.theForm.reset();
      this.dRef.close();
    }

    onFileSelected(event){
      this.selectedFile= <File>event.target.files[0];
      console.log(event);
    }

    duplicate(valor: string){
     this.almacenService.checkForDuplicate(this.theForm.controls['descripcion'].value)
      .subscribe(
        (res: any) => {
          if(res.Code==100){
            //console.log("Duplicate false");
            this.theForm.controls['descripcion'].setErrors({'duplicate': false});
            this.theForm.controls['descripcion'].updateValueAndValidity();
          }else{
            //console.log("Duplicate true");
            this.theForm.controls['descripcion'].setErrors({'duplicate': true});
          }
        }
      );
    }

    add(event: MatChipInputEvent): void {
      console.log("Chip input: ", event);
      const value = (event.value || '').trim();

      // Add our fruit
      if (value) {
        this.keywords.push(value);
      }

      // Clear the input value
      event.chipInput!.clear();
      this.theForm.controls['keys'].setValue(null);
    }
  
    remove(keyword: string): void {
      let index = this.keywords.indexOf(keyword);
  
      if (index >= 0) {
        this.keywords.splice(index, 1);
      }
      //console.log("Terminó: "+this.keywords);
    }

    selected(event: MatAutocompleteSelectedEvent): void {
      this.theForm.controls['keys'].setValue(null);
      this.keywords.push(event.option.viewValue.trim());
      this.keysInput.nativeElement.value = '';
    }

    createItem(): FormGroup {
      let initName = '';
      let initDesc = '';
      if(this.isInit){
        initName = 'General';
        initDesc = 'Locación general'
      }
      return this.formBuilder.group({
        descripcion: [initName],
        notas: [initDesc]
      });
    }

    addItem(): void {
      this.items = this.theForm.get('items') as FormArray;
      this.items.push(this.createItem());
    }

    removeItem(index) {
      // this.contactList = this.form.get('contacts') as FormArray;
      this.items.removeAt(index);
    }


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