import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { QuestionsState, selectQuestionsLoading, selectQuestionsValue } from './questions.features'
import * as QuestionsActions from './questions.actions'
import { Observable } from 'rxjs'
import { Question } from '../../models'
import { EntityStatus } from '../../enums'

@Injectable({
    providedIn: 'root',
})
export class QuestionsFacadeService {
    public questions: Observable<Question[]>
    public questionsLoading: Observable<boolean>

    constructor(private store: Store<QuestionsState>) {
        this.questions = this.store.select(selectQuestionsValue)
        this.questionsLoading = this.store.select(selectQuestionsLoading)
    }

    public getQuestions(): void {
        this.store.dispatch(QuestionsActions.getQuestions())
    }
}
