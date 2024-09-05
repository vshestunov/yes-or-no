import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import {
    QuestionsState,
    selectActiveQuestion,
    selectAnswersValue,
    selectQuestionsLoading,
    selectQuestionsValue,
} from './questions.features'
import * as questionsActions from './questions.actions'
import { toSignal } from '@angular/core/rxjs-interop'
import { QuestionAnswer } from '../../models'
import { Router } from '@angular/router'
import { AppRoutes } from '../../enums'

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
        this.questions = toSignal(this.store.select(selectQuestionsValue))
        this.questionsLoading = toSignal(this.store.select(selectQuestionsLoading))
        this.activeQuestion = toSignal(this.store.select(selectActiveQuestion))
        this.answers = toSignal(this.store.select(selectAnswersValue))
    }

    public getQuestions(): void {
        this.store.dispatch(questionsActions.getQuestions())
    }

    public saveAnswer(answer: QuestionAnswer): void {
        this.store.dispatch(questionsActions.saveAnswer({ answer }))
    }

    public openQuestionsTree(): void {
        this.router.navigateByUrl(AppRoutes.Answers).then()
    }

    public retakeQuestions(): void {
        this.store.dispatch(questionsActions.retakeQuestions())
    }
}
