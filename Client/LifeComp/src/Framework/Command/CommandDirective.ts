import {Directive, ElementRef, Renderer, HostListener, Input, AfterViewChecked} from "@angular/core";
import {RelayCommand} from "./RelayCommand";
@Directive({
  selector: '[Command]'
})
export class CommandDirective implements AfterViewChecked {

  ngAfterViewChecked(): any {
    let value: string;
    if (!this.Command.CanExecute(this.CommandParameter))
      value = 'disabled';
    else
      value = null;
    this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', value);
  }

  @Input('Command') Command: RelayCommand;
  @Input('CommandParameter') CommandParameter:any;

  private _elementRef: ElementRef;
  private _renderer: Renderer;

  constructor(el: ElementRef, renderer: Renderer) {
    this._elementRef = el;
    this._renderer = renderer;
  }

  //TODO : Declencher le CanExecute à chaque changement du model
  //TODO : Passer un paramètre à la directive pourque la Command puisse executer de la sorte this.Command.Execute(paramètre)
  //TODO : Ne pas utiliser l'event click en dur permettre au developpeur de passer l'event qui declent le execute
  @HostListener('click') onClick() {
    this.Command.Execute(this.CommandParameter);
  }


}
