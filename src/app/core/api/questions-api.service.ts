import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Question } from '../models'
import { YesNo } from '../enums'

@Injectable({
    providedIn: 'root',
})
export class QuestionsApiService {
    public getQuestions(): Observable<Question[]> {
        return of([{ level: 1, question: 'Who are you?', answers: [YesNo.NO, YesNo.YES], results: [''] }])
    }
}
