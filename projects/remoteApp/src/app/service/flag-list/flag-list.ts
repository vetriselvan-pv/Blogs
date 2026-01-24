import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IFlagList } from '../../model/flags.model';

@Injectable({
  providedIn: 'root',
})
export class FlagListService {
  private httpClient = inject(HttpClient);

  getflagList(): Observable<
   IFlagList[]
  > {
    return this.httpClient.get('https://restcountries.com/v3.1/all?fields=name,flags').pipe(
      map((res: any) => res),
      catchError((err) => {
        return of([]);
      }),
    );
  }
}
