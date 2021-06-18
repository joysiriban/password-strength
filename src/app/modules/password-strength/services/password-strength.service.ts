import { Injectable } from '@angular/core';
import { ApiService } from '@core/_services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor(private _apiService: ApiService) { }

  passwordStrength(password: string): Observable<any> {
    return this._apiService.post('/password/strength', { password });
  }
}
