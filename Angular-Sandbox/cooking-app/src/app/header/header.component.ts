//For angular to recognize this as a component we must use the component decorator
import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    //@output allows the "featureSelected" to be used by parent components
    @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature: string)
    {
        this.featureSelected.emit(feature);
    }

}