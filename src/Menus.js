import ERROR_MESSAGE from "./constants/ErrorConstant.js";
import MENU from "./constants/MenuConstant.js";

class Menus {
  #menus;

  constructor(menus) {
    this.#validate(menus);
    this.#menus = menus;
  }

  #validate(menus) {
    // 문자열 형식이 맞는지 검사
    // null 확인
    if (menus === null) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }

    const menu = menus.split(',').map(String)
    for (let i = 0; i < menu.length; i++) {
      const element = menu[i];
      // dash 확인
      const dash = element.indexOf('-')
      if (dash === -1) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      };
      // 마지막이 숫자인지 확인
      const lastNum = element.substr(-1);
      if (isNaN(lastNum)) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      };
      // 메뉴 목록에 있는 메뉴인지 확인
      const menuName = element.substr(0, dash);
      if (MENU[menuName] === undefined) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      };
    }

    return menu
  }
}

export default Menus;
