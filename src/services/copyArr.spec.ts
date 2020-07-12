import { copyArr } from "./copyArr";
import { expect } from "chai";
import "mocha";

describe("testing copy array of number", () => {
  const arr = [1, 2, 3];

  it("should return a copy of array", () => {
    expect(copyArr(arr)).eql(arr);
  });
  it("should not be equal to original array", () => {
    expect(copyArr(arr)).not.equal(arr);
  });
});
