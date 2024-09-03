import {
    createAction,
    emptyProps,
    props,
} from '@ngrx/store'
import { Question, QuestionAnswer } from '../../models'

export const getQuestions = createAction(
    'Get Questions',
    emptyProps
)
export const getQuestionsSuccess = createAction(
    'Get Questions Success',
    props<{ questions: Question[] }>()
)
export const getQuestionsError = createAction(
    'Get Questions Error',
    emptyProps
)
export const saveAnswer = createAction(
    'Save Answer',
    props<{ answer: QuestionAnswer }>()
)
export const retakeQuestions = createAction(
    'Retake Questions',
    emptyProps
)
