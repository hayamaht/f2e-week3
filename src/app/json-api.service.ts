import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' });
};

export abstract class JsonApiService<T> {

  constructor(
    protected http: HttpClient,
    protected url: string
  ) {}

  protected handleError<U>(operation = 'operation', result?: U) {
    return (error: any): Observable<U> => {
      return of(result as U);
    };
  }

  getAll(): Observable< T[] > {
    return this.http
      .get<T[]>(this.url)
      .pipe(
        tap(_ => console.log('fetched collection'),
        catchError(this.handleError('getAll', []))
      );
  }

  find(id: number); : Observable < T > {
    const url = `${this.url}/${id}`;
    return this.http
      .get<T>(url)
      .pipe(
        tap(_ => console.log(`fetched collection id=${id}`)),
        catchError(this.handleError<T>(`find id=${id}`))
      );
  }

  create(obj: T); : Observable < T > {
    return this.http
      .post<T>(this.url, obj, httpOptions)
      .pipe(
        tap((obj: T) => console.log(`created collection w/ id=${obj.id}`)),
        catchError(this.handleError<T>('create'))
      );
  }

  update(obj: T); : Observable < any > {
    return this.http
      .put(this.url, obj, httpOptions)
      .pipe(
        tap(_ => console.log(`updated collection id=${obj.id}`)),
        catchError(this.handleError<any>('update'))
      );
  }

  destory(obj: T); : Observable < T > {
    const url = `${this.url}/${obj.id}`;

    return this.http
      .delete<T>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted collection id=${obj.id}`)),
        catchError(this.handleError<T>('destory'))
      );
  }
}
