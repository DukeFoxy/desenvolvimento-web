function imcCalc(heigth, weight) {
    const imc = weight / heigth ** 2;
    return imc.toFixed(2);}



console.log(imcCalc(1.85, 80));