import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogisitcsService {

  constructor() { }

  addProduct()
  {

  }
  deleteProduct()
  {

  }
  updateProduct()
  {
    
  }
  addCategory()
  {

  }
  removeCategory()
  { 

  }
  disableProduct(disable:boolean):boolean
  {
    return !disable
  }
  disableCategory(disable: boolean)
  {
    return !disable
  }
  
}
