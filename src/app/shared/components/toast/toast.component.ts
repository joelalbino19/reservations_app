import { NgModule, Component, enableProdMode } from '@angular/core';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';

@Component({
    selector: 'app-toast',
    templateUrl: `toast.component.html`,
    styleUrls: [`toast.component.css`],
})
export class ToastComponent {
    isVisible = false;

    type = 'info';

    message = '';

    constructor() {
    }

    checkAvailable({ value }: DxCheckBoxTypes.ValueChangedEvent) {
        this.type = value ? 'success' : 'error';
        this.message = (value ? ' is available' : ' is not available');
        this.isVisible = true;
    }
}
