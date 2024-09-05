import { Routes } from '@angular/router'
import { provideState } from '@ngrx/store'
import { QuestionsPageComponent } from './pages/components/questions/questions-page.component'
import { questionsFeature, stateFeatureKey } from './core/store/questions/questions.features'
import { provideEffects } from '@ngrx/effects'
import { QuestionsEffects } from './core/store/questions/questions.effects'
import { AnswersPageComponent } from './pages/components/answers/answers-page.component'
import { AppRoutes } from './core/enums'

export const routes: Routes = [
    {
        path: AppRoutes.Questions,
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
        path: AppRoutes.Answers,
        loadComponent: () => AnswersPageComponent,
        providers: [
            provideState({
                name: stateFeatureKey,
                reducer: questionsFeature,
            }),
            provideEffects(QuestionsEffects),
        ],
    },
    {
        path: '**',
        redirectTo: AppRoutes.Questions,
    },
]
