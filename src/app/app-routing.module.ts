import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlmacenesComponent } from './catalogos/almacenes/lista-almacenes/lista-almacenes.component';
import { AgregarArticuloComponent } from './catalogos/articulos/agregar-articulo/agregar-articulo.component';
import { AgregarMaestroComponent } from './catalogos/articulos/agregar-maestro/agregar-maestro.component';
import { ArticulosComponent } from './catalogos/articulos/articulos.component';
import { DescargarArticuloComponent } from './catalogos/articulos/descargar-articulo/descargar-articulo.component';
import { DetalleArticuloComponent } from './catalogos/articulos/detalle-articulo/detalle-articulo.component';
import { DetalleMaestroComponent } from './catalogos/articulos/detalle-maestro/detalle-maestro.component';
import { EditarArticuloComponent } from './catalogos/articulos/editar-articulo/editar-articulo.component';
import { EditarMaestroComponent } from './catalogos/articulos/editar-maestro/editar-maestro.component';
import { EliminarArticuloComponent } from './catalogos/articulos/eliminar-articulo/eliminar-articulo.component';
import { EliminarMaestroComponent } from './catalogos/articulos/eliminar-maestro/eliminar-maestro.component';
import { ImportarArticuloComponent } from './catalogos/articulos/importar-articulo/importar-articulo.component';
import { ListaArticulosComponent } from './catalogos/articulos/lista-articulos/lista-articulos.component';
import { ListaInterfazComponent } from './catalogos/articulos/lista-interfaz/lista-interfaz.component';
import { ListaMaestroComponent } from './catalogos/articulos/lista-maestro/lista-maestro.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ListaLocacionesComponent } from './catalogos/locaciones/lista-locaciones/lista-locaciones.component';
import { PanelCatalogosComponent } from './catalogos/panel-catalogos/panel-catalogos.component';
import { DashboardComponent } from './hawk/dashboard/dashboard.component';
import { HawkComponent } from './hawk/hawk.component';
import { AuthGuard } from './usuarios/auth.guard';
import { LoginComponent } from './usuarios/login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'hawk', 
    pathMatch: 'full' 
  },
  {
    path: 'hawk',
    component: HawkComponent,
    children:[
      {
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full'
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'catalogos',
        component: CatalogosComponent,
        children:[
          {
            path:'',
            redirectTo:'panel-catalogos',
            pathMatch:'full'
          },
          {
            path:'panel-catalogos',
            component: PanelCatalogosComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'almacenes',
            component: ListaAlmacenesComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'locaciones',
            component: ListaLocacionesComponent,
            canActivate:[AuthGuard],
          },/*
          {
            path: 'locaciones-articulos',
            component: LocacionesArticulosComponent,
            canActivate:[AuthGuard]
          },
          
          {
            path: 'locaciones-articulos-lista/:id',
            component: LocacionesArticulosListaComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'locaciones-centros-consumo',
            component: LocacionesCentrosConsumoComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'unidades-de-medida',
            component: ListaUnidadesDeMedidaComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'categorias',
            component: ListaCategoriasComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'subcategorias',
            component: ListaSubcategoriasComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'proveedores',
            component: ProveedoresComponent,
            children:[
              {
                path:'',
                redirectTo: 'lista-proveedores',
                pathMatch: 'full'
              },
              {
                path: 'lista-proveedores',
                component: ListaProveedoresComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'razones-sociales/:id',
                component: RazonesSocialesComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
          {
            path:'conceptos',
            component: ListaConceptosComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'centros-de-consumo',
            component: ListaCentrosConsumoComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'centros-locaciones',
            component: CentrosLocacionesComponent,
            canActivate: [AuthGuard]
          }*/
          {
            path:'articulos',
            component: ArticulosComponent,
            canActivate: [AuthGuard],
            children:[
              {
                path:'',
                redirectTo: 'lista-articulos',
                pathMatch: 'full'
              },
              {
                path:'lista-articulos',
                component: ListaArticulosComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'agregar',
                component: AgregarArticuloComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'editar/:id',
                component: EditarArticuloComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'detalle/:id',
                component: DetalleArticuloComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'eliminar/:id',
                component: EliminarArticuloComponent,
                canActivate: [AuthGuard]
              },/*
              {
                path:'articulos-proveedores/:id',
                component: ArticulosProveedoresComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'inactivos',
                component: ListaArticulosInactivosComponent,
                canActivate: [AuthGuard]
              },*/
              {
                path:'interfaz',
                component: ListaInterfazComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'importar/:id',
                component: ImportarArticuloComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'maestro',
                component: ListaMaestroComponent,
                canActivate:[AuthGuard]
              },
              {
                path: 'agregar-maestro',
                component: AgregarMaestroComponent,
                canActivate:[AuthGuard]
              },
              {
                path: 'editar-maestro/:id',
                component: EditarMaestroComponent,
                canActivate:[AuthGuard]
              },
              {
                path: 'detalle-maestro/:id',
                component: DetalleMaestroComponent,
                canActivate:[AuthGuard]
              },
              {
                path: 'eliminar-maestro/:id',
                component: EliminarMaestroComponent,
                canActivate:[AuthGuard]
              },
              {
                path: 'descargar-articulo/:id',
                component: DescargarArticuloComponent,
                canActivate:[AuthGuard]
              },/*
              {
                path: 'articulos-locaciones/:ida/:idl',
                component: ArticulosLocacionesComponent,
                canActivate:[AuthGuard]
              }*/
            ]
          }
        ]
      },/*
      {
        path: 'ventas',
        component: VentasComponent,
        children:[
          {
            path: '',
            redirectTo:'panel-ventas',
            pathMatch:'full'
          },
          {
            path:'panel-ventas',
            component: PanelVentasComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'elementos-de-menu',
            component: ListaElementosDeMenuComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'receta-en-preparacion',
            component: RecetaEnPreparacionComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'clientes',
            component: ListaClientesComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'eventos',
            component: ListaEventosComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'paquetes',
            component: ListaPaquetesComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'localidades',
            component: ListaLocalidadesComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'personal',
            component: ListaPersonalComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'categorias-personal',
            component: ListaCategoriaComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'tiempos',
            component: ListaTiemposComponent,
            canActivate:[AuthGuard]
          }
        ]
      },
      {
        path: 'inventarios',
        component: InventariosComponent,
        children: [
          {
            path: '',
            redirectTo:'panel-inventarios',
            pathMatch:'full'
          },
          {
            path:'panel-inventarios',
            component: PanelInventariosComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'compras',
            component: ComprasComponent,
            children:[
              {
                path: '',
                redirectTo: 'lista-compras',
                pathMatch: 'full'
              },
              {
                path:'lista-compras',
                component: ListaComprasComponent,
                canActivate:[AuthGuard]
              },
              {
                path:'agregar-compra',
                component: AgregarCompraComponent,
                canActivate:[AuthGuard]
              },
              {
                path:'editar-compra',
                component: EditarCompraComponent,
                canActivate:[AuthGuard]
              },
              {
                path:'eliminar-compra',
                component: EliminarCompraComponent,
                canActivate:[AuthGuard]
              },
              {
                path:'detalle-compra',
                component: AgregarCompraComponent,
                canActivate:[AuthGuard]
              }
            ]
          },
          {
            path:'almacenes',
            component: LocacionesPorAlmacenComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'conteos-fisicos',
            component: ConteosFisicosComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'locaciones-por-almacen',
            component: LocacionesPorAlmacenComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'movimientos',
            component: MovimientosComponent,
            children:[
              {
                path: '',
                redirectTo:'lista-movimientos',
                pathMatch:'full'
              },
              {
                path: 'detalle-movimiento/:id',
                component: DetalleMovimientoComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'asignar-articulos/:id',
                component: AsignarArticulosComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'lista-movimientos',
                component: ListaMovimientosComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'panel-movimientos',
                component: PanelMovimientosComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'entradas',
                component: EntradasComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'lista-entradas',
                component: ListaEntradasComponent,
                canActivate: [AuthGuard]
              },
              {
                path:'salidas',
                component: SalidasComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'traspasos',
                component: TraspasosComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'ingreso-por-scanner',
                component: IngresoPorScannerComponent,
                canActivate:[AuthGuard]
              }
            ]
          }
        ]
      }*/
    ]
  },
  {
    path:'usuario',
    component: UsuariosComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },/*
  {
    path:'sistema',
    component: SistemaComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
