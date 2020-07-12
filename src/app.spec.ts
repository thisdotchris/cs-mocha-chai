import { add } from "./app";
import { expect } from "chai";
import "mocha";

describe("testing add function", () => {
  it("should return 3", () => {
    expect(add(1, 2)).to.equal(3);
  });
  it("should return type number", () => {
    expect(add(1, 2)).to.be.an("number");
  });
});
