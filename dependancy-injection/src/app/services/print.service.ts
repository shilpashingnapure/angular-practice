import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrintService {

  constructor() { 

  }

  print(text : string){
    alert(`show this text ${text}`)
  }
}
