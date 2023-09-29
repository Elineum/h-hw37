import { pow } from "./hw-11";

it("should throw an error when value not correct", () => {
  const number = "5";
  const degree = 3;

  expect(() => pow(number, degree)).toThrow();
});

it("should throw an error when degree not correct", () => {
  const number = 5;
  const degree = "3";

  expect(() => pow(number, degree)).toThrow();
});

it("should calculate correct for positive degree", () => {
  const number = 10;
  const degree = 3;

  const test = pow(number, degree);

  expect(test).toEqual(1000);
});

it("should calculate correct for 0 degree", () => {
  const number = 10;
  const degree = 0;

  const test = pow(number, degree);

  expect(test).toEqual(1);
});

it("should calculate correct for negative degree", () => {
  const number = 2;
  const degree = -2;

  const test = pow(number, degree);

  expect(test).toEqual(0.25);
});

it("should calculate correct for negative value", () => {
  const number = -2;
  const degree = 5;

  const test = pow(number, degree);

  expect(test).toEqual(-32);
});

it("should throw an error when degree is not integer", () => {
  const number = 2;
  const degree = 5.5;

  expect(() => pow(number, degree)).toThrow();
});
