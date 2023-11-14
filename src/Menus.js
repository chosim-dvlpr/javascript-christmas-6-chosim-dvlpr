import ERROR_MESSAGE from "./constants/ErrorConstant.js";
import MENU from "./constants/MenuConstant.js";

class Menus {
  #menus;

  constructor(menus) {
    this.#validate(menus);
    this.#menus = menus;
  }

  #validate(menus) {
    if (menus === null) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }

    const menuItems = menus.split(',').map(item => item.trim());
    let totalMenuNum = 0;
    let isOnlyDrinks = true;

    for (const item of menuItems) {
      const dash = item.indexOf('-');

      if (dash === -1) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      }

      const menuName = item.substring(0, dash);
      const menuCount = parseInt(item.substr(dash+1));

      if (isNaN(menuCount) || menuCount < 1) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      }

      if (!MENU[menuName]) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      }

      if (MENU[menuName].TYPE !== 'drink') {
        isOnlyDrinks = false;
      }

      totalMenuNum += menuCount;

      if (totalMenuNum > 20) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      }

      if (isOnlyDrinks) {
        throw new Error(ERROR_MESSAGE.INPUT_MENU);
      }
    }
  }
}

export default Menus;
