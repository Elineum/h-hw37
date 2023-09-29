import { removeElement } from "./hw-9";

it("should remove match in the array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const needRemove = 5;

  const test = removeElement(array, needRemove);
  expect(test).not.toContain(needRemove);
});

it("should return unchanged array if remove value not contained", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const needRemove = 9;

  const test = removeElement(array, needRemove);
  expect(test).toHaveLength(array.length);
});

it("should remove all matches in the array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const needRemove = 5;

  const test = removeElement(array, needRemove);
  expect(test).not.toContain(needRemove);
});
