import { inject, Injectable } from '@angular/core'
import * as QuestionsActions from './questions.actions'
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects'
import { of } from 'rxjs'
import {
    exhaustMap,
    map,
    catchError,
    tap,
} from 'rxjs/operators'
import { QuestionsApiService } from '../../api/questions-api.service'
import { Router } from '@angular/router'

@Injectable()
export class QuestionsEffects {
    private actions$ = inject(Actions)
    constructor(
        private api: QuestionsApiService,
        private router: Router
    ) {}

    getQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(QuestionsActions.getQuestions),
            exhaustMap(() =>
                this.api.getQuestions().pipe(
                    map((questions) =>
                        QuestionsActions.getQuestionsSuccess(
                            { questions }
                        )
                    ),
                    catchError(() =>
                        of(
                            QuestionsActions.getQuestionsError()
                        )
                    )
                )
            )
        )
    )

    retakeQuestions$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(QuestionsActions.retakeQuestions),
                tap(() => {
                    this.router
                        .navigateByUrl('questions')
                        .then()
                })
            ),
        { dispatch: false }
    )
}
