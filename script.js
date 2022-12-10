const form = document.getElementById('cadastro');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


/*a função mask vem da biblioteca jquery, q foi importada no index html*/
$('#cep').mask('00000-000');
$('#tel').mask('(00) 00000-0000');

form.addEventListener('submit', (event) => {

    (event.preventDefault());
    if (nameValidate() == true && emailValidate() == true && mainPasswordValidate() == true && numberValidate() == true && cepValidate() == true) {
        // Aciona o Modal com js
        $('#modalExemplo').modal('show');
        $('#fecharModal').modal('hide');
    } else {
        $('#modalErro').modal('show');
        $('#fecharModal').modal('hide');

    }
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
        return false;
    }
    else {
        removeError(0);
        return true;
    }

}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return false;
    }
    else {
        removeError(1);
        return true;
    }

}

function numberValidate() {
    if (campos[2].value.length < 15) {
        setError(2);
        return false;
    }
    else {
        removeError(2);
        return true;
    }

}

function mainPasswordValidate() {
    if (campos[3].value.length < 8) {
        setError(3);
        return false;
    }
    else {
        removeError(3);
        return true;
    }

}

function cepValidate() {
    if (campos[4].value.length < 9) {
        setError(4);
        return false;
    }
    else {
        removeError(4);
        return true;
    }
}

function limparFormulario(endereco) {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';

}

function preencherFormulario(endereco) {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;

}

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    url = `http://viacep.com.br/ws/${cep}/json/`

    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')) {
        document.getElementById('logradouro')
    } else {
        preencherFormulario(endereco);
    }

}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

