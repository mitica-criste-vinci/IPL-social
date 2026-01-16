import { EmailValidator } from "./EmailValidator";

describe("EmailValidator", () => {
    let validator = new EmailValidator();

  it("should return false when given empty string", () => {
    const actual = validator.isValid("");

    expect(actual).toBe(false);
  });


  it("should return true when given string with one @", () => {
  const actual = validator.isValid("test@mail.com");
  
  expect(actual).toBe(true);
});



});
