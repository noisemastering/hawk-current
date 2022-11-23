import { Injectable } from '@angular/core';                       //
import { Observable, of } from 'rxjs';                            //
import { HttpClient, HttpHeaders} from '@angular/common/http';    //
import { Request } from 'src/app/shared/classes/request';         //
import { Usuario } from 'src/app/shared/classes/usuario';         //
import { GenericList } from 'src/app/shared/classes/generic-list';//
import { Strings } from 'src/app/shared/classes/strings';           //
import { Keyword } from 'src/app/shared/classes/keyword';
///////////// /No Mover ////////////////////////////////////////////

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  public strings: Strings= new Strings;
  public serviceURL:string= "https://localhost:5001/api/NAKeywords/";
  genList= new GenericList;

  constructor(
    private http: HttpClient,
  ) { }

  /////// No mover!!!
  getItems(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.serviceURL);
  }    

  getDetailNA(id: number){
    return this.http.get<any>(this.serviceURL+id);
  }

  /////// Adaptar al modelo correspondiente
  addRecord (obj: any): Observable<any> {
      return this.http.post<any>(this.serviceURL, obj as Keyword);
  }

  addArray (obj:any): Observable<any>{
    return this.http.post<any>(this.serviceURL+"AddList", obj as Keyword[]);
  }

  /////// Adaptar al modelo correspondiente
  editRecord (obj: any): Observable<any> {
    return this.http.put<any>(this.serviceURL+obj.AlmacenID, obj as Keyword);
  }
}
