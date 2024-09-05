import { ComponentFixture, TestBed } from '@angular/core/testing'
import { QUESTION_CHANGE_TIMEOUT, QuestionComponent } from './question.component'
import { ChainQuestion, QuestionAnswer } from '../../models'
import { NgClass } from '@angular/common'
import { YesNo } from '../../enums'

describe('QuestionComponent', () => {
    let component: QuestionComponent
    let fixture: ComponentFixture<QuestionComponent>
    let questionChangedSpy: jasmine.Spy

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QuestionComponent, NgClass],
        }).compileComponents()

        fixture = TestBed.createComponent(QuestionComponent)
        component = fixture.componentInstance

        questionChangedSpy = spyOn(component.questionAnswered, 'emit')

        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should set question input', () => {
        const mockQuestion: ChainQuestion = { id: '1', question: 'What is this?', answers: [] }
        component.question = mockQuestion
        fixture.detectChanges()

        expect(component.question).toEqual(mockQuestion)
    })

    it('should emit questionAnswered event with the correct answer after delay', (done) => {
        const mockAnswer: QuestionAnswer = { id: 'a1', value: YesNo.YES, nextStep: null }

        component.answerSelected(mockAnswer)
        expect(component.showLoaderForId()).toEqual(mockAnswer.id)
        setTimeout(() => {
            expect(component.showLoaderForId()).toEqual(null)
            expect(questionChangedSpy).toHaveBeenCalledWith(mockAnswer)
            expect(component.showLoaderForId()).toBeNull()
            done()
        }, QUESTION_CHANGE_TIMEOUT + 100)
    })

    it('should initialize showLoaderForId with null', () => {
        expect(component.showLoaderForId()).toBeNull()
    })

    it('should update showLoaderForId on answerSelected call', () => {
        const mockAnswer: QuestionAnswer = { id: 'a1', value: YesNo.YES, nextStep: null }

        component.answerSelected(mockAnswer)

        expect(component.showLoaderForId()).toEqual(mockAnswer.id)

        setTimeout(() => {
            expect(component.showLoaderForId()).toBeNull()
        }, QUESTION_CHANGE_TIMEOUT + 100)
    })

    it('should have YesNo enum accessible', () => {
        expect(component.yesNo).toBe(YesNo)
    })
})
