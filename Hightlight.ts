import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'Hightlight'
})

export class HightlightPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any,  exponent: string, color: string): any {
        let receive = value.split(exponent);
        let newTxt = '';
        let showColor = color?color:'red';
        newTxt = receive.join('<span style="color:'+ showColor +';">' + exponent + '</span>');
        return this.sanitizer.bypassSecurityTrustHtml(newTxt);
    }

}
