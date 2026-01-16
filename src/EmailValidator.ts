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


    return true;
  }
}
