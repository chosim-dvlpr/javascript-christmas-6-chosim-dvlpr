import Dates from "../src/Dates.js";
import ERROR_MESSAGE from "../src/constants/ErrorConstant.js";

describe("Dates 클래스 테스트", () => {
  test("날짜 입력값이 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Dates('1k');
    }).toThrow(ERROR_MESSAGE.INPUT_DATE);
  });
  test("날짜 입력값이 공백이라면 예외가 발생한다", () => {
    expect(() => {
      new Dates('');
    }).toThrow(ERROR_MESSAGE.INPUT_DATE);
  });
  test("날짜 입력값이 1 이상 31 이하가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Dates([1, 31, 0]);
    }).toThrow(ERROR_MESSAGE.INPUT_DATE);
  });
});
