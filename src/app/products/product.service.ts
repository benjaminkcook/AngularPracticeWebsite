import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'assets/products.json';

    constructor(private http: HttpClient) {} // inject HttpClient service into http variable

    getProducts(): Observable<IProduct[]> { // returns an observable of IProduct[]
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))), // converts and object or array of objects to a json string
            catchError(this.handleError)
            ); // set the get method generic parameter to IProduct[], when we get a return it will automatically map the returned response to an array of products
    }
    
    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // a client-side or network error occured, handle it accordingly
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            // the backend returned an unsuccessful response code
            // the response body may contain clues as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}