import { Injectable } from '@angular/core';
import { Axios } from 'axios';

@Injectable()
export class ProductoAlCarritoService {
  getCarrito(dni: string): Promise<any> {
    return axios.get(`/ruta-de-consulta/?dni=${dni}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error.response.data.error);
      });
  }
}