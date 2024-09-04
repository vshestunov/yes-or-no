import { Component, computed, OnInit, Signal } from '@angular/core'
import { QuestionsFacadeService } from '../../../core/store/questions/questions-facade.service'
import { ChainQuestion, FinalQuestion, Question, QuestionAnswer } from '../../../core/models'
import { QuestionComponent, ResultComponent } from '../../../core/components'

@Component({
    selector: 'yon-questions-page',
    standalone: true,
    imports: [QuestionComponent, ResultComponent],
    templateUrl: './questions-page.component.html',
    styleUrl: './questions-page.component.scss',
})
export class QuestionsPageComponent implements OnInit {
    public questions: Signal<Question[]>
    public activeQuestion: Signal<Question>
    public isChainQuestion = computed(() => 'question' in this.activeQuestion())
    public chainQuestion = computed(() => {
        const chainQuestion = this.activeQuestion() as ChainQuestion
        return {
            ...chainQuestion,
            answers: [...chainQuestion.answers].sort((a, b) => a.value.localeCompare(b.value)),
        }
    })
    public isResult = computed(() => 'result' in this.activeQuestion())
    public result = computed(() => this.activeQuestion() as FinalQuestion)
    public loading: Signal<boolean>

    constructor(private facade: QuestionsFacadeService) {}

    public ngOnInit(): void {
        this.questions = this.facade.questions
        this.loading = this.facade.questionsLoading
        this.activeQuestion = this.facade.activeQuestion
        this.facade.getQuestions()
    }

    public questionAnswered(questionAnswer: QuestionAnswer): void {
        this.facade.saveAnswer(questionAnswer)
    }

    public openQuestionsTree(): void {
        this.facade.openQuestionsTree()
    }

    public retakeQuestions(): void {
        this.facade.retakeQuestions()
    }
}
