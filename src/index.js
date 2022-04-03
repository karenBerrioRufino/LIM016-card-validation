import validator from './validator.js';
//PARA LA SELECCION DE MESES
const formCard = document.querySelector('.formCard');
for (let i = 1; i <= 12; i++) {
    let optionMonth = document.createElement('option'); //creando etiquetas de opcion
    optionMonth.value = i;//obtiene el valor
    optionMonth.innerHTML = i; //imprimir el texto que va dentro de la opcion 
    //insertar el valor dentro del select
    formCard.month.appendChild(optionMonth);//para poner dentro del select la opcion
}
//PARA LA SELECCION DE AÑOS
for (let i = 2015; i <= 2050; i++) {
    let optionYear = document.createElement('option'); //creando etiquetas de opcion
    optionYear.value = i;//obtiene el valor
    optionYear.innerText = i; //imprimir el texto que va dentro de la opcion 
    //insertar el valor dentro del select
    formCard.year.appendChild(optionYear);
}

/*function invest() {
    let validate = document.getElementById('validate');
    let cardNumber = document.getElementById('cardNumber');
    validate.addEventListener("click", invest);
    let number = cardNumber.value;
    cardNumber.value = number.split("").reverse().join("");
  }*/


console.log(validator);
//-----PARA INVERTIR LOS NUMEROS-----
let validate = document.getElementById('validate');//boton
validate.addEventListener('click', getData);
function getData(event) {
    event.preventDefault();
    let cardNumber = document.getElementById('cardNumber');//input
    let number = cardNumber.value;

    let cardVacio = number.length;
    if (cardVacio === 0) {
        document.getElementById('obligatorio').style.visibility = 'visible';
        obligatorio.innerHTML = "*Todos los campos son obligatorios";
        //alert("datos");
    }
    else {
        cardNumber.addEventListener('keydown', () => {
            document.getElementById('obligatorio').style.visibility = 'hidden';
            console.log('holi');
        });
        
        //estamos llamando a una instancia (es para llamar a la clase o funcion para accceder a los metodos 
        //y propiedades que tenga) de la clase isValid. La variable con que se hace esta instancia es isValidCard que es un objeto
        let isValidCard = validator.isValid(number); //regresa true o false, para jalarla funcion isValid
        //console.log(isValidCard);
        let maskifyCard = validator.maskify(number);//declaro una variable para llamar al metodo del objetos
        // console.log(maskifyCard);

        if (isValidCard == true) {
            //alert("tarjeta válida")   
            cardNumber.value = maskifyCard;
            document.getElementById('containerCheck').style.display = 'block';
        }
        else {
            //alert("tarjeta inválida");s
            document.getElementById('containerError').style.display = 'block';
        }

        let buttonOk = document.getElementById('buttonOk');
        buttonOk.addEventListener('click', function () {
        document.getElementById('containerCheck').style.display = 'none';
        formCard.reset();
        });

        let buttonError = document.getElementById('buttonError');
        buttonError.addEventListener('click', function () {
        document.getElementById('containerError').style.display = 'none';
        formCard.reset();
        });
    }
 }

