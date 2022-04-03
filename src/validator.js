const validator = {

    isValid: function (number) { //isValid es un metodo
        number = number.split('').reverse();
        //----PARA multiplicar x2 a todos los Nº en las posiciones pares----        
        for (let i = 0; i < number.length; i++) {
            if (i % 2 != 0) {
                number[i] = number[i] * 2;
                //para sumar los digitos de los Nº en las posiciones pares que sean > que 10----  
                if (number[i] > 9) {
                    let result = number[i];
                    /*    result.toString().split('').reduce(i,number);
                    console.log(result);*/
                    let c = result % 10;
                    let b = result / 10;//devuelve la parte entera
                    number[i] = parseInt(b + c);
                    //console.log(parseInt(b + c));
                }
            }
            else {
                number[i] = parseInt(number[i]); //Para convertir un número string en unnumerco
            }

        }
        // console.log(number);
        //----Para sumar todos los digitos del array----
        let adition = 0; //para almacenar el resultado
        for (let i = 0; i < number.length; i++) {
            adition += number[i];
            //console.log(adition)             
        }

        //sacarle el residuo a la división entre 10 del total de la suma
        let residuo = adition % 10;
        if (residuo === 0) {
            return true;//tarjeta válida
        }
        else { return false; } //tarjeta inválida
    }, //porque le estpy diciendo al método que estoy usando dos atributos

    maskify: function (number) {
        let numberMaski = number.split('');//para convertir en un arrglo

        for (let i = 0; i < numberMaski.length - 4; i++) {
            numberMaski[i] = '#';
            // let str = numberMaski.join('');
            //replaceAll(str, '#');

            //console.log(creditCardNumber);

        }

        return numberMaski.join('');//finalmente, pide que se conviert el array en un string

    }

};
export default validator;
//console.log(validator.maskify('79927398713'));
//let prueba = validator.maskify('79927398713');
//console.log(prueba);