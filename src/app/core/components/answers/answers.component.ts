import { Component, Input } from '@angular/core'
import { Answer, ChainQuestion, FinalQuestion, Question, QuestionAnswer } from '../../models'
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
    @Input() public question: Question
    @Input() public answers: Answer[]

    public getChainQuestion(question: Question): ChainQuestion {
        return question && 'answers' in question ? question : null
    }

    public getResult(question: Question): FinalQuestion {
        return question && 'result' in question ? question : null
    }

    public isAnswerSelected(checkedAnswer: QuestionAnswer): boolean {
        return this.answers?.some((answer) => answer.id === checkedAnswer.id)
    }
}
