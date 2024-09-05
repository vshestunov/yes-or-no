import { Component, Input, output, signal } from '@angular/core'
import { ChainQuestion, QuestionAnswer } from '../../models'
import { NgClass } from '@angular/common'
import { YesNo } from '../../enums'

export const QUESTION_CHANGE_TIMEOUT = 500

@Component({
    selector: 'yon-question',
    standalone: true,
    imports: [NgClass],
    templateUrl: './question.component.html',
    styleUrl: './question.component.scss',
})
export class QuestionComponent {
    @Input() question: ChainQuestion
    public questionAnswered = output<QuestionAnswer>()

    public showLoaderForId = signal<string>(null)

    public answerSelected(answer: QuestionAnswer): void {
        this.showLoaderForId.set(answer.id)
        setTimeout(() => {
            this.showLoaderForId.set(null)
            this.questionAnswered.emit(answer)
        }, QUESTION_CHANGE_TIMEOUT)
    }

    public readonly yesNo = YesNo
}
