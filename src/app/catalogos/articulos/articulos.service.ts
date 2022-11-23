import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Strings } from '../../shared/classes/strings';  
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Articulo } from 'src/app/shared/classes/articulo';
import {
  getDocs,
  collection,
  onSnapshot,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import { ListaArticuloMaestro } from 'src/app/shared/classes/lista-articulo-maestro';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private dbPath = '/articulos';

  itemsRef: AngularFirestoreCollection<ListaArticuloMaestro>;

  public strings: Strings= new Strings;
  public serviceURL: string= 'NAArticulos/'

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) { 
    this.itemsRef = db.collection(this.dbPath);
  }


  /////// No mover!!!
  getNAItems(): Observable<any> {
    return this.http.get<any>(this.strings.baseURL+this.serviceURL);
  } 

  getMasterList(): AngularFirestoreCollection<ListaArticuloMaestro> {
    return this.itemsRef;
  }
/*
  create(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }*/
}
