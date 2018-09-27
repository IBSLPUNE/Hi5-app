import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SonamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'soname',
})
export class SonamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.contact_no.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        });
    }
}
