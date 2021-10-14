import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ 
  name: 'ishiyoniikuikuiku',
  pure: false
})

export class Ishiyoniikuikuiku implements PipeTransform{
  transform = (value: string):string => {
    return value.toUpperCase();
  };
}