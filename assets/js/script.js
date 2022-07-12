const btnRemoveAcc = document.getElementById('btn-remove-acc')
const profileLoginTop = document.getElementsByClassName('profile-login-top')[0]
const profileImg = document.getElementsByClassName('profile-image')[0]
const btnContinue = document.getElementsByClassName('btn-continue')[0]

const profileLoginBottom = document.getElementsByClassName('profile-login-bottom')[0]
const profileLoginBottomInfo = document.getElementsByClassName('profile-login-bottom-info')[0]


btnRemoveAcc.addEventListener('click', () => {

    displayNone(profileImg, btnContinue, btnRemoveAcc, profileLoginBottomInfo);

    const divFormLogin = document.createElement('div')
    divFormLogin.classList.add('login-form')
    profileLoginTop.append(divFormLogin)

    const inputLogin = document.createElement('input')
    inputLogin.type = 'text'
    inputLogin.placeholder = 'Telefone, nome de usuário ou e-mail'
    
    const inputPass = document.createElement('input')
    inputPass.type = 'password'
    inputPass.placeholder = 'Senha'

    const button = document.createElement('button')
    button.type = 'submit'
    button.innerHTML = 'Entrar'
    
    const form = document.createElement('form')
    divFormLogin.appendChild(form)
    form.appendChild(inputLogin)
    form.appendChild(inputPass)
    form.appendChild(button)

    const p  = document.createElement('p')
    p.classList.add('signup-button')
    p.innerHTML = 'Não tem uma conta?'

    const span = document.createElement('span')
    span.innerHTML = ' Cadastre-se'
    profileLoginBottom.appendChild(p)
    p.appendChild(span)
})

const displayNone = (...elements) => {
    for(let i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }

    return elements;
}