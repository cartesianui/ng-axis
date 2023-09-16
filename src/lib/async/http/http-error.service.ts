import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IError } from './types';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  public serverErrors$ = new Subject<IError>();

  dispatch(errors: IError) {
    this.serverErrors$.next(errors);
  }
}
