import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(duration: string): string {
    if (!duration) {
      return '';
    }

    const hoursMatch = duration.match(/(\d+)H/);
    const minutesMatch = duration.match(/(\d+)M/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    let readableFormat = '';
    if (hours > 0) {
      readableFormat += hours + 'hr' + (hours > 1 ? 's' : '') + ' ';
    }
    if (minutes > 0) {
      readableFormat += minutes + 'min' + (minutes > 1 ? 's' : '');
    }

    return readableFormat.trim();
  }

}
