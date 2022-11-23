import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlmacenesComponent } from './catalogos/almacenes/lista-almacenes/lista-almacenes.component';
import { DetalleAlmacenComponent } from './catalogos/almacenes/detalle-almacen/detalle-almacen.component';
import { AgregarAlmacenComponent } from './catalogos/almacenes/agregar-almacen/agregar-almacen.component';
import { EliminarAlmacenComponent } from './catalogos/almacenes/eliminar-almacen/eliminar-almacen.component';
import { EditarAlmacenComponent } from './catalogos/almacenes/editar-almacen/editar-almacen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaLocacionesComponent } from './catalogos/locaciones/lista-locaciones/lista-locaciones.component';
import { DetalleLocacionComponent } from './catalogos/locaciones/detalle-locacion/detalle-locacion.component';
import { AgregarLocacionComponent } from './catalogos/locaciones/agregar-locacion/agregar-locacion.component';
import { EliminarLocacionComponent } from './catalogos/locaciones/eliminar-locacion/eliminar-locacion.component';
import { EditarLocacionComponent } from './catalogos/locaciones/editar-locacion/editar-locacion.component';
import { HawkComponent } from './hawk/hawk.component';
import { DashboardComponent } from './hawk/dashboard/dashboard.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { PanelCatalogosComponent } from './catalogos/panel-catalogos/panel-catalogos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './usuarios/login/login.component';
import { CartWidgetComponent } from './recetas/cart-widget/cart-widget.component';
import { SubcartWidgetComponent } from './recetas/subcart-widget/subcart-widget.component';
import { MaestroComponent } from './catalogos/articulos/maestro/maestro.component';
import { ListaArticulosComponent } from './catalogos/articulos/lista-articulos/lista-articulos.component';
import { ArticulosComponent } from './catalogos/articulos/articulos.component';
import { ListaMaestroComponent } from './catalogos/articulos/lista-maestro/lista-maestro.component';
import { AgregarArticuloComponent } from './catalogos/articulos/agregar-articulo/agregar-articulo.component';
import { EditarArticuloComponent } from './catalogos/articulos/editar-articulo/editar-articulo.component';
import { ListaInterfazComponent } from './catalogos/articulos/lista-interfaz/lista-interfaz.component';
import { ImportarArticuloComponent } from './catalogos/articulos/importar-articulo/importar-articulo.component';
import { AgregarMaestroComponent } from './catalogos/articulos/agregar-maestro/agregar-maestro.component';
import { EditarMaestroComponent } from './catalogos/articulos/editar-maestro/editar-maestro.component';
import { DetalleMaestroComponent } from './catalogos/articulos/detalle-maestro/detalle-maestro.component';
import { EliminarMaestroComponent } from './catalogos/articulos/eliminar-maestro/eliminar-maestro.component';
import { DescargarArticuloComponent } from './catalogos/articulos/descargar-articulo/descargar-articulo.component';
import { EliminarArticuloComponent } from './catalogos/articulos/eliminar-articulo/eliminar-articulo.component';
import { DetalleArticuloComponent } from './catalogos/articulos/detalle-articulo/detalle-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlmacenesComponent,
    DetalleAlmacenComponent,
    AgregarAlmacenComponent,
    EliminarAlmacenComponent,
    EditarAlmacenComponent,
    ListaLocacionesComponent,
    DetalleLocacionComponent,
    AgregarLocacionComponent,
    EliminarLocacionComponent,
    EditarLocacionComponent,
    HawkComponent,
    DashboardComponent,
    CatalogosComponent,
    PanelCatalogosComponent,
    UsuariosComponent,
    LoginComponent,
    CartWidgetComponent,
    SubcartWidgetComponent,
    MaestroComponent,
    ListaArticulosComponent,
    ArticulosComponent,
    ListaMaestroComponent,
    AgregarArticuloComponent,
    EditarArticuloComponent,
    ListaInterfazComponent,
    ImportarArticuloComponent,
    AgregarMaestroComponent,
    EditarMaestroComponent,
    DetalleMaestroComponent,
    EliminarMaestroComponent,
    DescargarArticuloComponent,
    EliminarArticuloComponent,
    DetalleArticuloComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore
  ],
  entryComponents: [
    AgregarAlmacenComponent,
    EditarAlmacenComponent,
    EliminarAlmacenComponent,
    DetalleAlmacenComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
