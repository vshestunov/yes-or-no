import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BodyComponent } from './core/components'
import { FooterComponent } from './core/components'
import { HeaderComponent } from './core/components'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BodyComponent, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'yes-or-no'
}
