import { Component, OnInit, Signal } from '@angular/core'
import { QuestionsFacadeService } from '../../../core/store/questions/questions-facade.service'
import {
    QuestionComponent,
    ResultComponent,
} from '../../../core/components'
import {
    Answer,
    ChainQuestion,
    Question,
} from '../../../core/models'
import { AnswersComponent } from '../../../core/components/answers/answers.component'

@Component({
    selector: 'yon-answers-page',
    standalone: true,
    imports: [
        QuestionComponent,
        ResultComponent,
        AnswersComponent,
    ],
    templateUrl: './answers-page.component.html',
    styleUrl: './answers-page.component.scss',
})
export class AnswersPageComponent implements OnInit {
    public questions: Signal<Question[]>
    public answers: Signal<Answer[]>

    constructor(private facade: QuestionsFacadeService) {
        this.questions = this.facade.questions
        this.answers = this.facade.answers
    }

    public ngOnInit(): void {}
}
