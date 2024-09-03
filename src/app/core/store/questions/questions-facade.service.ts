import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import {
    QuestionsState,
    selectActiveQuestion,
    selectAnswersValue,
    selectQuestionsLoading,
    selectQuestionsValue,
} from './questions.features'
import * as QuestionsActions from './questions.actions'
import { toSignal } from '@angular/core/rxjs-interop'
import { Answer, QuestionAnswer } from '../../models'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class QuestionsFacadeService {
    public questions
    public questionsLoading
    public activeQuestion
    public answers

    constructor(
        private store: Store<QuestionsState>,
        private router: Router
    ) {
        this.questions = toSignal(
            this.store.select(selectQuestionsValue)
        )
        this.questionsLoading = toSignal(
            this.store.select(selectQuestionsLoading)
        )
        this.activeQuestion = toSignal(
            this.store.select(selectActiveQuestion)
        )
        this.answers = toSignal(
            this.store.select(selectAnswersValue)
        )
    }

    public getQuestions(): void {
        this.store.dispatch(QuestionsActions.getQuestions())
    }

    public saveAnswer(answer: QuestionAnswer): void {
        this.store.dispatch(
            QuestionsActions.saveAnswer({ answer })
        )
    }

    public openQuestionsTree(): void {
        this.router.navigateByUrl('answers')
    }

    public retakeQuestions(): void {
        this.store.dispatch(
            QuestionsActions.retakeQuestions()
        )
    }
}
