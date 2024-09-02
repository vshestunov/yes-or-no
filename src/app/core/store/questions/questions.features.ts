import { Answer, Question } from '../../models'
import { createReducer, createSelector, on } from '@ngrx/store'
import * as QuestionsActions from './questions.actions'
import { EntityState } from '../../models/entity-state'
import { EntityStatus } from '../../enums'

export interface QuestionsState {
    questions: EntityState<Question[]>
    answers: EntityState<Answer[]>
}

const initialState: QuestionsState = {
    questions: {
        status: EntityStatus.Initial,
        value: [],
    },
    answers: {
        status: EntityStatus.Initial,
        value: [],
    },
}

export const stateFeatureKey = 'questionsAnswers'
export const questionsFeature = createReducer(
    initialState,
    on(QuestionsActions.getQuestions, (state) => {
        return {
            ...state,
            questions: {
                value: [],
                status: EntityStatus.Loading,
            },
        }
    }),
    on(QuestionsActions.getQuestionsSuccess, (state, { questions }) => {
        return {
            ...state,
            questions: {
                value: questions,
                status: EntityStatus.Loaded,
            },
        }
    }),
    on(QuestionsActions.getQuestionsError, (state) => {
        return {
            ...state,
            questions: {
                value: [],
                status: EntityStatus.Loaded,
            },
        }
    })
)

export const selectQuestions = (state: { [key: string]: QuestionsState }) => state[stateFeatureKey].questions
export const selectQuestionsValue = createSelector(selectQuestions, (questions) => questions?.value)
export const selectQuestionsLoading = createSelector(
    selectQuestions,
    (questions) => questions?.status === EntityStatus.Loading
)
