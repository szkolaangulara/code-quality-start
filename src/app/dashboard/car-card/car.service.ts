import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Car} from './car';



import {catchError, filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  public cachedValues: any;

  constructor(private httpClient: HttpClient) {
  }


  public fetchCars(): Observable<Car[]>     {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars/all');
  }




  public fetchFilteredCars(brand: string, priceTo: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars/all')
         .pipe(
                 map((cars: Car[]) => cars.filter((car: Car) => {
          let shouldFilterCar: boolean;
            shouldFilterCar = !brand ? true : car.brand.toLowerCase().includes(brand.toLowerCase());
          console.log('jaka jest cena?', car.price);
            console.log('jaka jest cena szukana?', priceTo);
          console.log('car.price > priceFrom', car.price > priceTo);
            console.log('car.price > priceFrom && shouldReturn', car.price > priceTo && shouldFilterCar);
          return !priceTo ? shouldFilterCar : car.price < priceTo && shouldFilterCar;
        }))
      );
  }



        public fetchAllCars(): void {
  }
}
