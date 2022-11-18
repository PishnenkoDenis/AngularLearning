import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";


@Injectable({
    providedIn: 'any'
})
export class BetterLoggerService extends LoggerService {
   
    constructor() {super()}
   
    override log(message: string): void {
        console.log(`Information of Dynamic Component Loading: ${message}`)
    }
}