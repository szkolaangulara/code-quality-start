import {Component, OnInit} from '@angular/core';

import {Car} from './car-card/car';
import {CarService} from './car-card/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public cars: Car[];

  private brandValue: string;
  private priceToValue: number;

  constructor(private carService: CarService) {
  }

  public ngOnInit(): void {
    this.carService.fetchCars()
      .subscribe((cars: Car[]) => this.cars = cars);
  }

  public brandValueChanged(value: string | number): void {
    this.brandValue = value as string;
  }

  public priceToValueChanged(value: string | number): void {
    this.priceToValue = value as number;
  }

  public searchCars(): void {
    this.carService.fetchFilteredCars(this.brandValue, this.priceToValue)
      .subscribe((cars: Car[]) => this.cars = cars);
  }
}
