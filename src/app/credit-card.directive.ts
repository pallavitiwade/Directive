import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {

  constructor(
    private _eleRef:ElementRef,
    private _rendrer:Renderer2
  ) {}

  @HostListener('input',['$event'])
  validteCredit(eve:Event){
    let inputControl=eve.target as HTMLInputElement;
    let val=inputControl.value.replace(/\s+/g,' ')

    if(val.length>16){
      val=val.substring(0,16)

    }
    console.log(val);
    console.log(inputControl.nextElementSibling)
    console.log(/[^\d]/.test(val))

    if(/[^\d]/.test(val)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
       inputControl.nextElementSibling?.classList.add('d-none')

    }

    val=this.formatCreditCard(val)
    inputControl.value=val

  }

  ngOnInit(): void {
    // strong.className='text-danger d-none';
    // strong.innerText='please Enter a Valid Number'
    // this._eleRef.nativeElement.parentElement.append(strong)
    let strong=this._rendrer.createElement('strong')
    this._rendrer.addClass(strong,'text-danger')
    this._rendrer.addClass(strong,'d-none')
    const msg=this._rendrer.createText(`please Enter a Valid Number !!!`)
    this._rendrer.appendChild(strong,msg)
    this._rendrer.appendChild(this._eleRef.nativeElement.parentElement,strong
    )
  }



  formatCreditCard(str:string){
    let chukArr:string[]=[]
    for(let i=0; i<str.length; i=i+4){
      let v=str.slice(i,i+4)
      chukArr.push(v)
    }
    return chukArr.join(' ')
  }






}
