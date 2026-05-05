import { Component, Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";



@Directive({
    selector:'[advanceCss]'
})

export class cssHighLighterRendere implements OnInit{

    constructor(
        private _eleRef:ElementRef,
        private _rendrer:Renderer2

    ){

    }


    ngOnInit(): void {
        this._rendrer.setStyle(this._eleRef.nativeElement,'background-color','orange')
        this._rendrer.setStyle(this._eleRef.nativeElement,'color','white')
        this._rendrer.setStyle(this._eleRef.nativeElement,'padding','10px')

        
    }

}






        
    


