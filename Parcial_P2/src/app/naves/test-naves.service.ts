import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nave } from './nave';

@Injectable({
    providedIn: 'root'
  })
export class TestNavesService {

    constructor(private http: HttpClient) { }

    getNaves(): Observable<Nave[]> {
        return this.http.get<Nave[]>('https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json');
    }

}
