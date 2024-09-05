import * as questionsActions from '../questions.actions'
import { questionsFeature, QuestionsState } from '../questions.features'
import { EntityStatus, YesNo } from '../../../enums'
import { Question, QuestionAnswer } from '../../../models'

describe('Questions Reducer', () => {
    const initialState: QuestionsState = {
        questions: {
            status: EntityStatus.Initial,
            value: [],
        },
        activeQuestion: null,
        answers: [],
    }

    it('should return the initial state', () => {
        const action = {} as any
        const state = questionsFeature(initialState, action)

        expect(state).toEqual(initialState)
    })

    it('should handle getQuestions action', () => {
        const action = questionsActions.getQuestions()
        const state = questionsFeature(initialState, action)

        expect(state).toEqual({
            ...initialState,
            questions: {
                value: [],
                status: EntityStatus.Loading,
            },
            activeQuestion: null,
        })
    })

    it('should handle getQuestionsSuccess action', () => {
        const questions: Question[] = [{ id: '1', question: 'Test Question', answers: [] }]
        const action = questionsActions.getQuestionsSuccess({ questions })
        const state = questionsFeature(initialState, action)

        expect(state).toEqual({
            ...initialState,
            questions: {
                value: questions,
                status: EntityStatus.Loaded,
            },
            activeQuestion: questions[0],
        })
    })

    it('should handle getQuestionsError action', () => {
        const action = questionsActions.getQuestionsError()
        const state = questionsFeature(initialState, action)

        expect(state).toEqual({
            ...initialState,
            questions: {
                value: [],
                status: EntityStatus.Loaded,
            },
        })
    })

    it('should handle saveAnswer action', () => {
        const answer: QuestionAnswer = { id: '1', value: YesNo.YES, nextStep: null }
        const action = questionsActions.saveAnswer({ answer })
        const state = questionsFeature(initialState, action)

        expect(state).toEqual({
            ...initialState,
            activeQuestion: null,
            answers: [{ id: '1', answer: YesNo.YES }],
        })
    })

    it('should handle retakeQuestions action', () => {
        const questions: Question[] = [{ id: '1', question: 'Test Question', answers: [] }]
        const stateWithQuestions = {
            ...initialState,
            questions: {
                value: questions,
                status: EntityStatus.Loaded,
            },
            activeQuestion: questions[0],
            answers: [{ id: '1', answer: YesNo.YES }],
        }

        const action = questionsActions.retakeQuestions()
        const state = questionsFeature(stateWithQuestions, action)

        expect(state).toEqual({
            ...stateWithQuestions,
            activeQuestion: questions[0],
            answers: [],
        })
    })
})
