import { inject, Injectable } from '@angular/core'
import * as questionsActions from './questions.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { exhaustMap, map, catchError, tap } from 'rxjs/operators'
import { QuestionsApiService } from '../../api/questions-api.service'
import { Router } from '@angular/router'
import { AppRoutes } from '../../enums'

@Injectable()
export class QuestionsEffects {
    private actions$ = inject(Actions)
    constructor(
        private api: QuestionsApiService,
        private router: Router
    ) {}

    public getQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(questionsActions.getQuestions),
            exhaustMap(() => {
                console.log(123)
                return this.api.getQuestions().pipe(
                    map((questions) => questionsActions.getQuestionsSuccess({ questions })),
                    catchError(() => of(questionsActions.getQuestionsError()))
                )
            })
        )
    )

    public retakeQuestions$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(questionsActions.retakeQuestions),
                tap(() => {
                    this.router.navigateByUrl(AppRoutes.Questions).then()
                })
            ),
        { dispatch: false }
    )
}
