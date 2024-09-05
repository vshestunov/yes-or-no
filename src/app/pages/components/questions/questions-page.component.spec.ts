import { ComponentFixture, TestBed } from '@angular/core/testing'
import { QuestionsPageComponent } from './questions-page.component'
import { QuestionsFacadeService } from '../../../core/store/questions/questions-facade.service'
import { QuestionComponent, ResultComponent } from '../../../core/components'
import { ChainQuestion, FinalQuestion, QuestionAnswer } from '../../../core/models'
import { signal } from '@angular/core'
import { YesNo } from '../../../core/enums'

describe('QuestionsPageComponent', () => {
    let component: QuestionsPageComponent
    let fixture: ComponentFixture<QuestionsPageComponent>
    let facadeService: jasmine.SpyObj<QuestionsFacadeService>

    beforeEach(async () => {
        const facadeSpy = jasmine.createSpyObj(
            'QuestionsFacadeService',
            ['getQuestions', 'saveAnswer', 'openQuestionsTree', 'retakeQuestions'],
            {
                questions: signal([]),
                questionsLoading: signal(false),
                activeQuestion: signal({}),
            }
        )

        await TestBed.configureTestingModule({
            imports: [QuestionsPageComponent, QuestionComponent, ResultComponent],
            providers: [{ provide: QuestionsFacadeService, useValue: facadeSpy }],
        }).compileComponents()

        facadeService = TestBed.inject(QuestionsFacadeService) as jasmine.SpyObj<QuestionsFacadeService>
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionsPageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should initialize questions, activeQuestion, and loading from facade service', () => {
        // Verify initial values
        expect(component.questions).toBe(facadeService.questions)
        expect(component.activeQuestion).toBe(facadeService.activeQuestion)
        expect(component.loading).toBe(facadeService.questionsLoading)

        expect(facadeService.getQuestions).toHaveBeenCalled()
    })

    it('should sort answers in chainQuestion computed property', () => {
        const chainQuestion: ChainQuestion = {
            id: '',
            question: '',
            answers: [{ value: YesNo.YES }, { value: YesNo.NO }],
        } as ChainQuestion

        component.activeQuestion = signal(chainQuestion)
        fixture.detectChanges()
        const sortedAnswers = component.chainQuestion().answers
        expect(sortedAnswers[0].value).toBe(YesNo.NO)
        expect(sortedAnswers[1].value).toBe(YesNo.YES)
    })

    it('should call saveAnswer on facade service when questionAnswered is invoked', () => {
        const questionAnswer: QuestionAnswer = {
            id: 'string',
            value: YesNo.YES,
            nextStep: {
                id: '',
                result: '',
            },
        }
        component.questionAnswered(questionAnswer)
        expect(facadeService.saveAnswer).toHaveBeenCalledWith(questionAnswer)
    })

    it('should call openQuestionsTree on facade service when openQuestionsTree is invoked', () => {
        component.openQuestionsTree()
        expect(facadeService.openQuestionsTree).toHaveBeenCalled()
    })

    it('should call retakeQuestions on facade service when retakeQuestions is invoked', () => {
        component.retakeQuestions()
        expect(facadeService.retakeQuestions).toHaveBeenCalled()
    })
})
