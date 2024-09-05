import { Component, input } from '@angular/core'
import { Answer, ChainQuestion, Question, QuestionAnswer } from '../../models'
import { NgClass } from '@angular/common'
import { ResultComponent } from '../result/result.component'

@Component({
    selector: 'yon-answers',
    standalone: true,
    imports: [NgClass, ResultComponent],
    templateUrl: './answers.component.html',
    styleUrl: './answers.component.scss',
})
export class AnswersComponent {
    public question = input<Question>()
    public answers = input<Answer[]>()

    public getChainQuestion(question: Question): ChainQuestion {
        return 'answers' in question ? (question as ChainQuestion) : null
    }

    public getResult(question: Question): string {
        return 'result' in question ? question.result : ''
    }

    public isAnswerSelected(checkedAnswer: QuestionAnswer): boolean {
        return this.answers().some((answer) => answer.id === checkedAnswer.id)
    }
}
