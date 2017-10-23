import {Mark} from './mark'

export class RaterMarks {
    CompanyId:number;
    RateId:number;
    TotalResult:number;
    MarkValues: Array<MarkValue>;    
}

export class MarkValue {
    Value:number;
    Mark:Mark;
    Date: Date;
}

