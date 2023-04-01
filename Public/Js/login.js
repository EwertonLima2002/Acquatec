function key_email(){
    var input = document.getElementById('emailImput')
    var email = emailImput.value
    var label = document.getElementById('email')
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    if(email == ""){
        label.innerHTML = `Campo vazio`
        label.style.color = "red"
        input.style.outline = "red 3px solid"
    }
    else if (!reg.test(email)){
        label.innerHTML = `E-mail inválido`
        label.style.color = "red"
        input.style.outline = "red 3px solid"
        return false
    }
    else{
        label.innerHTML = `E-mail válido`
        label.style.color = "green"
        input.style.outline = "green 3px solid"
        return true
    }
}
function key_senha(){
    var input = document.getElementById('senhaImput')
    var label = document.getElementById('senha')
    var senha = senhaImput.value

    if(senha == ""){
        label.innerHTML = `Campo vazio`
        label.style.color = "red"
        input.style.outline = "red 3px solid"
    }
    else if(senha.length <3){
        label.innerHTML = `Senha inválida`
        label.style.color = "purple"
        input.style.outline = "purple 3px solid"
    } 
    else{
        label.innerHTML = `Senha ok`
        label.style.color = "green"
        input.style.outline = "green 3px solid"
    }
}