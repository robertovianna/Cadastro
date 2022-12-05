const form = document.getElementById('cadastro');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

$('#cep').mask('00000-000');
$('#tel').mask('(00) 0000-00000');


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    numberValidate();
    cepValidate();
});


function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    span[index].style.display = 'none';

}

function nameValidate() {
    if (campos[0].value.length < 5) {
        setError(0);
    }
    else {
        removeError(0);
    }

}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }

}

function numberValidate() {
    if (campos[2].value.length < 15) {
        setError(2);
    }
    else {
        removeError(2);
    }

}

function mainPasswordValidate() {
    if (campos[3].value.length < 8) {
        setError(3);
    }
    else {
        removeError(3);
    }

}

function cepValidate() {
    if (campos[4].value.length < 9) {
        setError(4);
    }
    else {
        removeError(4);
    }

}