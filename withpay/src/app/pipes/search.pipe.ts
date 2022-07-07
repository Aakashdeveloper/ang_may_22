import {Pipe, PipeTransform} from '@angular/core';
import {IRest} from '../home/rest.model';

@Pipe({
    name:'searchFilter'
})

export class RestSearchPipe implements PipeTransform{
    transform(value:IRest[], userInput:string){
        userInput = userInput ? userInput.toLowerCase() : ''
        return userInput ? value.filter((data) => 
            ((data.restaurant_name.toLowerCase().indexOf(userInput) > -1) || 
            (data.rating_text.toLowerCase().indexOf(userInput) > -1))
        ) : value
    }
}