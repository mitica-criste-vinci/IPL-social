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


it("should return false when given email with space", () => {
  const actual = validator.isValid("test @mail.com");

  expect(actual).toBe(false);
});


it("should return false when given no text before @", () => {
  const actual = validator.isValid("@mail.com");

  expect(actual).toBe(false);
});


it("should return false when given no text after @", () => {
  const actual = validator.isValid("test@");
  
  expect(actual).toBe(false);
});








});
