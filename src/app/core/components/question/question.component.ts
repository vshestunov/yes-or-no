import { Component, input, output, signal } from '@angular/core'
import { ChainQuestion, QuestionAnswer } from '../../models'
import { NgClass } from '@angular/common'
import { YesNo } from '../../enums'

@Component({
    selector: 'yon-question',
    standalone: true,
    imports: [NgClass],
    templateUrl: './question.component.html',
    styleUrl: './question.component.scss',
})
export class QuestionComponent {
    public question = input<ChainQuestion>()
    public questionAnswered = output<QuestionAnswer>()

    public showLoaderForId = signal<string>(null)

    public answerSelected(answer: QuestionAnswer): void {
        this.showLoaderForId.set(answer.id)
        setTimeout(() => {
            this.showLoaderForId.set(null)
            this.questionAnswered.emit(answer)
        }, 500)
    }

    protected readonly YesNo = YesNo
}
