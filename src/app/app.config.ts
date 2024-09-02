import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideState, provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { QuestionsEffects } from './core/store/questions/questions.effects'
import { questionsFeature, stateFeatureKey } from './core/store/questions/questions.features'

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore(),
        provideState({ name: stateFeatureKey, reducer: questionsFeature }),
        provideEffects(QuestionsEffects),
    ],
}
