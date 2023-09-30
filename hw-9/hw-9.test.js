import { removeElement } from "./hw-9";

describe("homework 9 remake group", () => {
  it("should remove match in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const needRemove = 5;
    const expectedArray = array.filter((item) => item !== needRemove);

    removeElement(array, needRemove);

    expect(array).toEqual(expectedArray);
  });

  it("should return unchanged array if remove value not contained", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const needRemove = 9;
    const originalArray = [...array];

    removeElement(array, needRemove);

    expect(array).toEqual(originalArray);
  });

  it("should remove all matches in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 5];
    const needRemove = 5;
    const expectedArray = array.filter((item) => item !== needRemove);

    removeElement(array, needRemove);

    expect(array).toEqual(expectedArray);
  });
});
