import SignIn from './SignInUI';
import SignUp from './SignUpUI';

export default class UI{
    static loginButton = document.querySelector('#login-btn');

    static signUpButton = document.querySelector('#signup-btn');

    static openLogin = document.querySelector('#open-login');

    static loginReDir = document.querySelector('#login-redirect');

    static signupReDir = document.querySelector('#signup-redirect');

    static openSignup = document.querySelector('#open-signup');

    static loginModal = document.querySelector('#login-modal');

    static signUpModal = document.querySelector('#signup-modal');

    static modalClose = document.querySelectorAll('.modal-close-btn');

    static init() {
        const { loginButton, signUpButton, openLogin, openSignup, loginModal,
            signUpModal, modalClose, loginReDir, signupReDir } = UI;

        [openLogin, loginReDir].forEach(btn => btn.addEventListener('click', () => {
            loginModal.classList.add('active');
            signUpModal.classList.remove('active');
        }));

        [openSignup, signupReDir].forEach(btn => btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signUpModal.style.display = 'block';
        }));

        modalClose.forEach(btn => {
            btn.addEventListener('click', () => {
                loginModal.style.display = 'none';
                signUpModal.style.display = 'none';
            });
        })

        loginButton.addEventListener('click', SignIn.signIn);
        signUpButton.addEventListener('click', SignUp.signUp);
    }

}
