import { Answer, Question } from '../../models'
import {
    createReducer,
    createSelector,
    on,
} from '@ngrx/store'
import * as QuestionsActions from './questions.actions'
import { EntityState } from '../../models/entity-state'
import { EntityStatus } from '../../enums'

export interface QuestionsState {
    questions: EntityState<Question[]>
    activeQuestion: Question
    answers: Answer[]
}

const initialState: QuestionsState = {
    questions: {
        status: EntityStatus.Initial,
        value: [],
    },
    activeQuestion: null,
    answers: [],
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
            activeQuestion: null,
        }
    }),
    on(
        QuestionsActions.getQuestionsSuccess,
        (state, { questions }) => {
            return {
                ...state,
                questions: {
                    value: questions,
                    status: EntityStatus.Loaded,
                },
                activeQuestion: questions[0],
            }
        }
    ),
    on(QuestionsActions.getQuestionsError, (state) => {
        return {
            ...state,
            questions: {
                value: [],
                status: EntityStatus.Loaded,
            },
        }
    }),
    on(QuestionsActions.saveAnswer, (state, { answer }) => {
        const savedAnswer: Answer = {
            id: state.activeQuestion.id,
            answer: answer.value,
        }
        return {
            ...state,
            activeQuestion: answer.nextStep,
            answers: [...state.answers, savedAnswer],
        }
    }),
    on(QuestionsActions.retakeQuestions, (state) => {
        return {
            ...state,
            activeQuestion: state.questions.value[0],
            answers: [],
        }
    })
)

export const selectQuestions = (state: QuestionsState) =>
    (state as unknown as { [key: string]: QuestionsState })[
        stateFeatureKey
    ].questions
export const selectQuestionsValue = createSelector(
    selectQuestions,
    (questions) => questions?.value
)
export const selectQuestionsLoading = createSelector(
    selectQuestions,
    (questions) =>
        questions?.status === EntityStatus.Loading
)

export const selectActiveQuestion = (
    state: QuestionsState
) =>
    (state as unknown as { [key: string]: QuestionsState })[
        stateFeatureKey
    ].activeQuestion
export const selectActiveQuestionValue = createSelector(
    selectActiveQuestion,
    (question) => question
)

export const selectAnswers = (state: QuestionsState) =>
    (state as unknown as { [key: string]: QuestionsState })[
        stateFeatureKey
    ].answers
export const selectAnswersValue = createSelector(
    selectAnswers,
    (answers) => answers
)
