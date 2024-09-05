import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AnswersComponent } from './answers.component'
import { ChainQuestion, FinalQuestion, Question, QuestionAnswer } from '../../models'
import { YesNo } from '../../enums'

describe('AnswersComponent', () => {
    let component: AnswersComponent
    let fixture: ComponentFixture<AnswersComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AnswersComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(AnswersComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    describe('getChainQuestion', () => {
        it('should return ChainQuestion if the question has "answers"', () => {
            const question: Question = { id: '1', question: 'What is this?', answers: [] } as ChainQuestion
            const result = component.getChainQuestion(question)
            expect(result).toEqual(question)
        })

        it('should return null if the question does not have "answers"', () => {
            const question: Question = { id: '1', question: 'What is this?', result: '' } as FinalQuestion
            const result = component.getChainQuestion(question)
            expect(result).toBeNull()
        })
    })

    describe('getResult', () => {
        it('should return FinalQuestion if the question has "result"', () => {
            const question: Question = { id: '1', question: 'What is this?', result: '' } as FinalQuestion
            const result = component.getResult(question)
            expect(result).toEqual(question)
        })

        it('should return null if the question does not have "result"', () => {
            const question: Question = { id: '1', question: 'What is this?' } as ChainQuestion
            const result = component.getResult(question)
            expect(result).toBeNull()
        })
    })

    describe('isAnswerSelected', () => {
        it('should return true if the answer is in the answers list', () => {
            const answer: QuestionAnswer = { id: '1', value: YesNo.YES, nextStep: null }
            component.answers = [{ id: '1', answer: YesNo.YES }]
            const result = component.isAnswerSelected(answer)
            expect(result).toBeTrue()
        })

        it('should return false if the answer is not in the answers list', () => {
            const answer: QuestionAnswer = { id: '1', value: YesNo.YES, nextStep: null }
            component.answers = []
            const result = component.isAnswerSelected(answer)
            expect(result).toBeFalse()
        })
    })
})
