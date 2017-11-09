export class Premium {
    public pricing_date: String;
    public underlying: String;
    public maturity: number;
    public premium: number;
    public domestic_interest_rate: number;
    public foreign_interest_rate: number;
    public forex_rate: number;
    public expected_depreciation: number;

    constructor (pricing_date: String, underlying: String, maturity: number,
        premium: number, domestic_interest_rate: number, foreign_interest_rate: number,
        forex_rate, expected_depreciation) {}
    }
