import Promotion from "../src/Promotion.js";

describe("프로모션 클래스 테스트", () => {
  test("날짜 입력값이 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Promotion('1k');
    }).toThrow("[ERROR]");
  });
});
