import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ResultComponent } from './result.component'
import { NgClass } from '@angular/common'
import { FinalQuestion } from '../../models'

describe('ResultComponent', () => {
    let component: ResultComponent
    let fixture: ComponentFixture<ResultComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResultComponent, NgClass],
        }).compileComponents()

        fixture = TestBed.createComponent(ResultComponent)
        component = fixture.componentInstance

        fixture.detectChanges()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should have a result input', () => {
        const mockFinalQuestion: FinalQuestion = null
        fixture.componentRef.setInput('result', mockFinalQuestion)
        fixture.detectChanges()
        expect(component.result()).toEqual(mockFinalQuestion)
    })

    it('should have a showActionButtons input', () => {
        fixture.componentRef.setInput('showActionButtons', true)
        fixture.detectChanges()
        expect(component.showActionButtons()).toBeTrue()
    })

    it('should emit openQuestionsTree output', () => {
        spyOn(component.openQuestionsTree, 'emit')
        component.openQuestionsTree.emit()
        expect(component.openQuestionsTree.emit).toHaveBeenCalled()
    })

    it('should emit retakeQuestions output', () => {
        spyOn(component.retakeQuestions, 'emit')
        component.retakeQuestions.emit()
        expect(component.retakeQuestions.emit).toHaveBeenCalled()
    })
})
