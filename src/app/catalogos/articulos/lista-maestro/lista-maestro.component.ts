import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListaArticuloMaestro } from 'src/app/shared/classes/lista-articulo-maestro';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/servicios/notifications.service';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-lista-maestro',
  templateUrl: './lista-maestro.component.html',
  styleUrls: ['./lista-maestro.component.scss']
})
export class ListaMaestroComponent implements OnInit {

searchKey: string;
listData: MatTableDataSource<any>;
articulos: ListaArticuloMaestro[];

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;


displayColumns: string[]=['id', 'nombre', 'tipo', 'categoria', 'subcategoria', 'acciones']; // Adaptar las columnas (actualizar tabla)

  constructor(
    private changeDetectorRefs: ChangeDetectorRef, // No mover!!!
    private router: Router,
    private notificationService: NotificationsService, // No Mover!!!
    private theService: ArticulosService,
    //private fireDatabase: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.theService.getMasterList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.articulos = data;
      this.listData= new MatTableDataSource(this.articulos);
      this.listData.sort= this.sort;
      this.listData.paginator= this.paginator;
      console.log("Artículos en el catálogo maestro: ", this.articulos);
    });
    this.changeDetectorRefs.detectChanges();
  }

  ///////// Buscador No mover!!! /////////
  onSearchClear(){
    this.searchKey="";
    this.applyFliter();
  }

  applyFliter(){
    this.listData.filter= this.searchKey.trim().toLowerCase();
  }
  ///////// Buscador ////////////////////
  
  ////////// Navegación
  onCreate(){
    let route='/hawk/catalogos/articulos/agregar-maestro';
    //var url = `${route}/${id}`;
    this.router.navigateByUrl(route);
  }

  onDownload(row: any){
    let route='/hawk/catalogos/articulos/descargar-articulo';
    this.router.navigate([route, row.id], {queryParams:{obj: row}});
  }

  onEdit(row: any){
    let route='/hawk/catalogos/articulos/editar-maestro';
    this.router.navigate([route, row.id], {queryParams:{obj: row}});
  }

  onDetail(row: any){
    let route='/hawk/catalogos/articulos/detalle-maestro';
    this.router.navigate([route, row.id], {queryParams:{obj: row}});
  }
}
