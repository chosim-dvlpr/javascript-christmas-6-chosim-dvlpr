import Dates from "../src/Dates.js";

describe("Dates 클래스 테스트", () => {
  test("날짜 입력값이 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Dates('1k');
    }).toThrow("[ERROR]");
  });
});
