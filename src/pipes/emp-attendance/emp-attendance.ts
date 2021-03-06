import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EmpAttendancePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'empAttendance',
})
export class EmpAttendancePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.first_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.last_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.date.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.time.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        });
    }
}
