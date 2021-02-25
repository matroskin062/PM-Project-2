import SignIn from './SignInUI';
import SignUp from './SignUpUI';

export default class AuthUI{
    loginButton = document.querySelector('#login-btn');

    signUpButton = document.querySelector('#signup-btn');

    openLogin = document.querySelector('#open-login');

    loginReDir = document.querySelector('#login-redirect');

    signupReDir = document.querySelector('#signup-redirect');

    openSignup = document.querySelector('#open-signup');

    loginModal = document.querySelector('#login-modal');

    signUpModal = document.querySelector('#signup-modal');

    modalClose = document.querySelectorAll('.modal-close-btn');

    init() {
        const { loginButton, signUpButton, openLogin, openSignup, loginModal,
            signUpModal, modalClose, loginReDir, signupReDir } = this;

        [openLogin, loginReDir].forEach(btn => btn.addEventListener('click', () => {
            loginModal.classList.add('active');
            signUpModal.classList.contains('active') && signUpModal.classList.remove('active');
        }));

        [openSignup, signupReDir].forEach(btn => btn.addEventListener('click', () => {
            loginModal.classList.contains('active') && loginModal.classList.remove('active');
            signUpModal.classList.add('active');
        }));

        modalClose.forEach(btn => {
            btn.addEventListener('click', () => {
                loginModal.classList.contains('active') && loginModal.classList.remove('active');
                signUpModal.classList.contains('active') && signUpModal.classList.remove('active');
            });
        })

        loginButton.addEventListener('click', () =>  new SignIn().signIn());
        signUpButton.addEventListener('click', () =>  new SignUp().signUp());
    }


}
