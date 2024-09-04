import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Question } from '../models'
import { YesNo } from '../enums'

const RELAX_ANSWER = 'Everything is ok, relax.'

const MOCK_QUESTIONS: Question[] = [
    {
        id: 'q1',
        question: 'Does it work properly?',
        answers: [
            {
                value: YesNo.NO,
                id: 'a1-1',
                nextStep: {
                    id: 'q2-1',
                    question: 'Doest it move?',
                    answers: [
                        {
                            value: YesNo.NO,
                            id: 'a2-1',
                            nextStep: {
                                id: 'q3-1',
                                question: 'Should it move?',
                                answers: [
                                    {
                                        value: YesNo.NO,
                                        id: 'a3-1',
                                        nextStep: {
                                            id: 'q4-1',
                                            result: RELAX_ANSWER,
                                        },
                                    },
                                    {
                                        value: YesNo.YES,
                                        id: 'a3-2',
                                        nextStep: {
                                            id: 'q4-2',
                                            result: 'Use tape',
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            value: YesNo.YES,
                            id: 'a2-2',
                            nextStep: {
                                id: 'q3-2',
                                question: 'Should it move?',
                                answers: [
                                    {
                                        value: YesNo.NO,
                                        id: 'a3-3',
                                        nextStep: {
                                            id: 'q4-3',
                                            result: 'USE WD-40',
                                        },
                                    },
                                    {
                                        value: YesNo.YES,
                                        id: 'a3-4',
                                        nextStep: {
                                            id: 'q4-4',
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
                id: 'a1-2',
                nextStep: {
                    id: 'q2-2',
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
        return of(MOCK_QUESTIONS)
    }
}
