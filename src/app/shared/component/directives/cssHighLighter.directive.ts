import { Directive, ElementRef, OnInit } from "@angular/core";



@Directive({
    selector:'[basicCss]'
})
export class cssHighLighterDirective implements OnInit{
constructor(private _eleRef:ElementRef){}
    ngOnInit(): void {
        console.log(this._eleRef.nativeElement,'Directive cssHighLighterDirective')
        this._eleRef.nativeElement.style.backgroundColor='orange'
        this._eleRef.nativeElement.style.color='white'
        this._eleRef.nativeElement.style.padding='10px'
         this._eleRef.nativeElement.style.margin='10px'






    }
}