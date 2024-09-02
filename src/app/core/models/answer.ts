import { BaseQuestion } from './question'
import { YesNo } from '../enums/yes-no'

export interface Answer extends BaseQuestion {
    answer: YesNo
}
