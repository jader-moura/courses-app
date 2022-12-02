import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number | string): string {
    function roundValue(value: number) {
      return ('0' + value).slice(-2);
    }

    if (value > 0) {
      return (
        roundValue(Math.floor(Number(value) / 60)) +
        ':' +
        roundValue(Number(value) % 60) +
        'hours'
      );
    } else if (value && value <= 0) {
      return 'Insert a valid amount';
    } else {
      return '00:00 hours';
    }
  }
}
