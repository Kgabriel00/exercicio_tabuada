var numero_usuario = Number(document.getElementById('entrada_numero'))
var botao = document.getElementById('botao');
var largura_original = 'ease-in-out'
var largura_alterada = 'botao 1s ease-in-out both'
largura_atual = largura_original
function mostrar_tabuada() {
    setTimeout(() => {
        largura_atual = largura_original
        botao.style.animation = largura_original
    }, 500);
    argura_atual = largura_alterada
    botao.style.animation = largura_alterada

    var num_user = document.getElementById('entrada_numero')
    var tabuada_container = document.getElementById('select')
    var contador = 1
    tabuada_container.innerHTML = ''
    if(Number(num_user.value) > 0){
        tabuada_container.style.height = '180px'
        while (contador <= 10) {
            var item = document.createElement('option')
            var num_user_exib = num_user.value
            resultado_ex = contador * num_user_exib
            item.text = `${num_user_exib} x ${contador} = ${resultado_ex}`
            tabuada_container.appendChild(item)
            contador += 1
        }
    }else{
        tabuada_container.style.height = '30px'
        var item = document.createElement('option')
        item.text = 'Erro'
        tabuada_container.appendChild(item)
    }
} 
