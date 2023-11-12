import Menus from "../src/Menus.js";
import ERROR_MESSAGE from "../src/constants/ErrorConstant.js";

describe("메뉴 클래스 테스트", () => {
  test("메뉴 입력값에 -가 없다면 예외가 발생한다", () => {
    expect(() => {
      new Menus("해산물파스타, 레드와인2");
    }).toThrow(ERROR_MESSAGE.INPUT_MENU);
  });
  test("메뉴 입력값 마지막이 숫자가 아니라면 예외가 발생한다", () => {
    expect(() => {
      new Menus("해산물파스타-1, 레드와인-a");
    }).toThrow(ERROR_MESSAGE.INPUT_MENU);
  });
});
