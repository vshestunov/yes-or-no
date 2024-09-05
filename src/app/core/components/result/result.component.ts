import { Component, input, output } from '@angular/core'
import { NgClass } from '@angular/common'
import { FinalQuestion } from '../../models'

@Component({
    selector: 'yon-result',
    standalone: true,
    imports: [NgClass],
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss',
})
export class ResultComponent {
    public result = input<FinalQuestion>()
    public showActionButtons = input<boolean>()
    public openQuestionsTree = output<void>()
    public retakeQuestions = output<void>()
}
