function Kg_to_Lbs(weight) {
    // Norrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
Kg_to_Lbs(10);
Kg_to_Lbs('10 Kgs');
