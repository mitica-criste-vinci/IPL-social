export class EmailValidator {
  isValid(email: string): boolean {

    for (let c of email) {
      if (c === " ") return false;
    }

    let atIndex = -1;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") atIndex = i;
    }

    if (atIndex <= 0) return false;
    if (atIndex === email.length - 1) return false;


    let hasDot = false;
    for (let i = atIndex + 1; i < email.length; i++) {
      if (email[i] === ".") hasDot = true;
    }

    if (!hasDot) return false;
    if (email[email.length - 1] === ".") return false;



    return true;
  }
}
