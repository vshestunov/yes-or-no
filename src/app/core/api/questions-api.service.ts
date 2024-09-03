import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Question } from '../models'
import { YesNo } from '../enums'

const RELAX_ANSWER = 'Everything is ok, relax.'

const MOCK_ANSWERS: Question[] = [
    {
        id: 1,
        question: 'Does it work properly?',
        answers: [
            {
                value: YesNo.NO,
                nextStep: {
                    id: 2,
                    question: 'Doest it move?',
                    answers: [
                        {
                            value: YesNo.NO,
                            nextStep: {
                                id: 3,
                                question: 'Should it move?',
                                answers: [
                                    {
                                        value: YesNo.NO,
                                        nextStep: {
                                            id: 4,
                                            result: RELAX_ANSWER,
                                        },
                                    },
                                    {
                                        value: YesNo.YES,
                                        nextStep: {
                                            id: 4,
                                            result: 'Use tape',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            value: YesNo.YES,
                            nextStep: {
                                id: 3,
                                question: 'Should it move?',
                                answers: [
                                    {
                                        value: YesNo.NO,
                                        nextStep: {
                                            id: 4,
                                            result: 'USE WD-40',
                                        },
                                    },
                                    {
                                        value: YesNo.YES,
                                        nextStep: {
                                            id: 4,
                                            result: RELAX_ANSWER,
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                value: YesNo.YES,
                nextStep: {
                    id: 2,
                    result: RELAX_ANSWER,
                },
            },
        ],
    },
]

@Injectable({
    providedIn: 'root',
})
export class QuestionsApiService {
    public getQuestions(): Observable<Question[]> {
        return of(MOCK_ANSWERS)
    }
}
