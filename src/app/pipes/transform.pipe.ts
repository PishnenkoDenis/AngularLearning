import { Pipe, PipeTransform } from '@angular/core';
import { IData } from '../models/idata';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: IData[], args?: any): unknown {
    return value;
  }

}
