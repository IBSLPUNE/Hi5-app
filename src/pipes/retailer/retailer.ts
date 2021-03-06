import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RetailerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'retailer',
})
export class RetailerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.distributor.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        });
    }
}
