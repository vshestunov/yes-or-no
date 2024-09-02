import { Component, OnInit, Signal } from '@angular/core'
import { QuestionsFacadeService } from '../../../core/store/questions/questions-facade.service'
import { Question } from '../../../core/models'
import { Observable } from 'rxjs'

@Component({
    selector: 'yon-questions-page',
    standalone: true,
    imports: [],
    templateUrl: './questions-page.component.html',
    styleUrl: './questions-page.component.scss',
})
export class QuestionsPageComponent implements OnInit {
    public questions: Observable<Question[]>
    public loading: Observable<boolean>
    constructor(private facade: QuestionsFacadeService) {}

    public ngOnInit(): void {
        this.questions = this.facade.questions
        this.loading = this.facade.questionsLoading
        this.questions.subscribe((q) => console.log(q))
        this.loading.subscribe((l) => console.log(l))
        this.facade.getQuestions()
    }
}
