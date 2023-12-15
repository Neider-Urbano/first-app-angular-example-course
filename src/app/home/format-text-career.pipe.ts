import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTextCareer',
})
export class FormatTextCareerPipe implements PipeTransform {
  transform(value: string, isApply: boolean): string {
    if (value) '';
    if (isApply) return value.toLocaleUpperCase();
    return value;
  }
}
