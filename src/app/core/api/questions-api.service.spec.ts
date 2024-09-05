import { TestBed } from '@angular/core/testing'
import { MOCK_QUESTIONS, QuestionsApiService } from './questions-api.service'
import { Question } from '../models'

describe('QuestionsApiService', () => {
    let service: QuestionsApiService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(QuestionsApiService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should return the mock questions', (done) => {
        service.getQuestions().subscribe((questions: Question[]) => {
            expect(questions).toEqual(MOCK_QUESTIONS)
            done()
        })
    })
})
