import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'yon-body',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss',
})
export class BodyComponent {}
