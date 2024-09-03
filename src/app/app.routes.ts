import { Routes } from '@angular/router'
import { provideState } from '@ngrx/store'
import { QuestionsPageComponent } from './pages/components/questions/questions-page.component'
import {
    questionsFeature,
    stateFeatureKey,
} from './core/store/questions/questions.features'
import { provideEffects } from '@ngrx/effects'
import { QuestionsEffects } from './core/store/questions/questions.effects'
import { AnswersPageComponent } from './pages/components/answers/answers-page.component'

export const routes: Routes = [
    {
        path: 'questions',
        loadComponent: () => QuestionsPageComponent,
        providers: [
            provideState({
                name: stateFeatureKey,
                reducer: questionsFeature,
            }),
            provideEffects(QuestionsEffects),
        ],
    },
    {
        path: 'answers',
        loadComponent: () => AnswersPageComponent,
        providers: [
            provideState({
                name: stateFeatureKey,
                reducer: questionsFeature,
            }),
            provideEffects(QuestionsEffects),
        ],
    },
]
