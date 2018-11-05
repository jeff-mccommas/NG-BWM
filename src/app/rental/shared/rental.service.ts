import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class RentalService {
  public getRentalById(rentalId: string): Observable<Rental> {}
}
