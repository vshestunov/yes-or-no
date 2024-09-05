import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AnswersPageComponent } from './answers-page.component'
import { QuestionsFacadeService } from '../../../core/store/questions/questions-facade.service'
import { QuestionComponent, ResultComponent, AnswersComponent } from '../../../core/components'
import { AppRoutes } from '../../../core/enums'
import { Question, Answer } from '../../../core/models'
import { signal } from '@angular/core'

describe('AnswersPageComponent', () => {
    let component: AnswersPageComponent
    let fixture: ComponentFixture<AnswersPageComponent>
    let facadeService: jasmine.SpyObj<QuestionsFacadeService>

    beforeEach(async () => {
        const facadeSpy = jasmine.createSpyObj('QuestionsFacadeService', ['retakeQuestions'], {
            questions: signal([]),
            answers: signal([]),
        })

        await TestBed.configureTestingModule({
            imports: [AnswersPageComponent, QuestionComponent, ResultComponent, AnswersComponent],
            providers: [{ provide: QuestionsFacadeService, useValue: facadeSpy }],
        }).compileComponents()

        facadeService = TestBed.inject(QuestionsFacadeService) as jasmine.SpyObj<QuestionsFacadeService>
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(AnswersPageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should initialize questions and answers from facade service', () => {
        const mockQuestions: Question[] = []
        const mockAnswers: Answer[] = []

        expect(component.questions()).toEqual(mockQuestions)
        expect(component.answers()).toEqual(mockAnswers)
    })

    it('should set questionsLink to AppRoutes.Questions', () => {
        expect(component.questionsLink).toBe(AppRoutes.Questions)
    })

    it('should call retakeQuestions method on facade service when retakeQuestions is invoked', () => {
        component.retakeQuestions()
        expect(facadeService.retakeQuestions).toHaveBeenCalled()
    })
})
