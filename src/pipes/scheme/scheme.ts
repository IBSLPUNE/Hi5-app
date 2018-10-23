import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SchemePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'scheme',
})
export class SchemePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.from_date.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.to_date.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        });
    }
}
