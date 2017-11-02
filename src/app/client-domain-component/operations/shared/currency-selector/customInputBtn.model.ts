export interface ICustomInputBtn {
    
    // tslint:disable-next-line:semicolon
    localInterestRate: boolean
    foreignInterestRate: boolean
    forexRate: boolean
    pricingDate:boolean
    maturityTime:{
        thirty:boolean
        sixty:boolean
        ninety:boolean
        oneHundredEighty: boolean
        threeHundredSixty:boolean
        typeBtn:boolean
    },
    expectedDepreciation : boolean
    typeBtn:boolean
}