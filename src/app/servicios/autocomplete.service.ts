import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { SimpleRequest } from 'src/app/shared/classes/simple-request';
import { Usuario } from 'src/app/shared/classes/usuario';
import { Keyword } from '../shared/classes/keyword';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  url: string;

  constructor(private http: HttpClient) { }

  search(term) {
    var listOfItems = this.http.get(this.url + term)
    .pipe(
        debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
            (data: any) => {
                return (
                    data.length != 0 ? data as any[] : [{"Nombre": "Sin coincidencias"} as any]
                );
            }
    ));

    return listOfItems;  
    }

    searchKW(term: string) {
        var listOfItems = this.http.get('https://localhost:5001/api/NAKeywords/Autocomplete/'+term)
        .pipe(
            debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
            map(
                (data: any) => {
                    console.log("Silvia: ", data);
                    let arr:any[]=[];
                    if (data.length == 0){
                        arr.push({"Name": "Sin coincidencias"} as any)
                    }else{
                        data.forEach(k=>{
                            arr.push({"Name": k.Word});
                        })
                    }
                    return arr;
                }
        ));
    
        return listOfItems;  
        }     
}
