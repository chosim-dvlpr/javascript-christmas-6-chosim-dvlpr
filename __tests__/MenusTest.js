import Menus from "../src/Menus.js";

describe("메뉴 클래스 테스트", () => {
  test("메뉴 입력값에 -가 없다면 예외가 발생한다", () => {
    expect(() => {
      new Menus("파스타-1개, 레드와인-2개");
    }).toThrow("[ERROR]");
  });
});
