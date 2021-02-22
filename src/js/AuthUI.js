export default class Auth {
  static user;

  static pass;

  static error = document.querySelector('#auth-error');

  static main = document.querySelector('#main');

  static regExpPass = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*?+])(?!.*[()_-`\\/"'|[]}{:;>.<,])(?!.*\s)(?!.*\s).{8,20}$/
  );

  static regExpEmail = new RegExp(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
  );
}
