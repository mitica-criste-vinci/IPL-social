import { EmailValidator } from "./EmailValidator";

describe("EmailValidator", () => {
  it("should return false when given empty string", () => {
    let validator = new EmailValidator();
    const actual = validator.isValid("");
    expect(actual).toBe(false);
  });
});
