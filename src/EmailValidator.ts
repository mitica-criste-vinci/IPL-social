export class EmailValidator {
  isValid(email: string): boolean {
    let hasAt = false;
    for (let c of email) {
      if (c === "@") hasAt = true;
    }
    return hasAt;
  }
}
