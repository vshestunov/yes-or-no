import { Component, input, output } from '@angular/core'
import {
    Answer,
    ChainQuestion,
    QuestionAnswer,
} from '../../models'
import { NgClass } from '@angular/common'

@Component({
    selector: 'yon-question',
    standalone: true,
    imports: [NgClass],
    templateUrl: './question.component.html',
    styleUrl: './question.component.css',
})
export class QuestionComponent {
    public question = input<ChainQuestion>()
    public questionAnswered = output<QuestionAnswer>()
}
