// 1

function calcuTax(income: number, Tax: number): number{  // : number -->return value
    if(Tax < 20_000)
        return income * 1.2;
    return income * 1.3;
}
calcuTax(10_000, 11_000);


// 2.

function calcu_Tax(income: number, Tax1: number = 11_111): number {
    if ((Tax1 || 11_111) < 20_000)
        return income * 1.2;
    return income * 1.3;
}
calcu_Tax(10_000);
