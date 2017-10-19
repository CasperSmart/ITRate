import {Company} from './company'
import {Mark} from './mark'
import {Rater} from './rater'

export class CompanyRate {
    Id:number;
    Company:Company;
    Mark:Mark;
    Rater:Rater;
    Value:number;
    Date:Date;
    CompanyId:number;
    MarkId: number;
    RaterId:number;
}
