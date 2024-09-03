import { BaseQuestion } from './question'
import { YesNo } from '../enums'

export interface Answer extends BaseQuestion {
    answer: YesNo
}
