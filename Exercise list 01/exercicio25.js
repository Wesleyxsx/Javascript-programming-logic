function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonathan', 'Wesley']
    if (ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entra'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
}   