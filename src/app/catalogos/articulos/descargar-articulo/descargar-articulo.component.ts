import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutocompleteService } from 'src/app/servicios/autocomplete.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';         
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Articulo } from 'src/app/shared/classes/articulo';
import { Almacen } from 'src/app/shared/classes/almacen';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/shared/classes/categoria';
import { NotificationsService } from 'src/app/servicios/notifications.service';
import { DuplicatesService } from 'src/app/servicios/duplicates.service';
import { ArticulosService } from '../articulos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NAArticulo } from 'src/app/shared/classes/NAArticulo';
import { NAPresentacionCompra } from 'src/app/shared/classes/NAPresentacion';
import { NAMerma } from 'src/app/shared/classes/NAMerma';
import { Presentacion } from 'src/app/shared/classes/presentacion';
import { DatePipe } from '@angular/common';
import { NAArticulosLocaciones } from 'src/app/shared/classes/articulos-locaciones';
import { NASistema } from 'src/app/shared/classes/NASistema';

@Component({
  selector: 'app-descargar-articulo',
  templateUrl: './descargar-articulo.component.html',
  styleUrls: ['./descargar-articulo.component.scss']
})
export class DescargarArticuloComponent implements OnInit {

    theForm: FormGroup;
    submitted= false;
    items= <any>[];
    keyws= <any>[];
    working: boolean= true;
    //MatChip
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    keywords = [];
    separatorKeysCodes = [ENTER, COMMA];
    @ViewChild('keysInput') keysInput: ElementRef<HTMLInputElement>;
    @ViewChild('autoKW') matAutocompleteKW: MatAutocomplete;


    title: string="Descargar Artículo";
    articulo: NAArticulo;
    almacenes: Almacen[];
    locaciones$: Observable<any[]>;
    categorias: Categoria[];
    subcategorias$: Observable<any[]>;
    ubase: string;
    theID: string;
    presentacionesForm= <any>[];
    mermasForm= <any>[];
    presentaciones: NAPresentacionCompra[]= [];
    mermas: NAMerma[]=[];

  constructor(
    private formBuilder: FormBuilder, // No Mover!!!
    private autocompleteService: AutocompleteService, // No Mover!!!
    private notificationService: NotificationsService, // No Mover!!!
    private duplicateService: DuplicatesService, // No Mover!!!
    private theService: ArticulosService, // Adaptar al objeto correspondiente
    private dialog: MatDialog,
    private theRouter: Router, // No mover!!!
    private actRoute: ActivatedRoute, // No mover!!!
  ) {
    this.theID= this.actRoute.snapshot.params.id;
    console.log("ID: ", this.theID);
   }

  ngOnInit(): void {
  }

} 
