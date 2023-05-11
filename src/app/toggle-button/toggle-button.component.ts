import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
    @Output() isToggledEmitter = new EventEmitter<boolean>();
    isToggled: boolean = false

    toggleButton(){
        this.isToggled = !this.isToggled
        this.isToggledEmitter.emit(this.isToggled)
    }
}
