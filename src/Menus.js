import ERROR_MESSAGE from "./constants/ErrorConstant.js";
import MENU from "./constants/MenuConstant.js";

class Menus {
  #menus;

  constructor(menus) {
    this.#validate(menus);
    this.#menus = menus;
  }

  #validate(menus) {
    this.#validateNull(menus);

    const menuItems = menus.split(',').map(item => item.trim());

    this.#validateAllMenus(menuItems);
  }

  #validateNull(menus) {
    if (menus === null) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }

  #validateAllMenus(menuItems) {
    let totalMenuNum = 0;
    let notIncludeDrinks = 0;
    let checkMenus = [];

    for (const item of menuItems) {
      const { menuName, menuCount } = this.#menuDetail(item);
      
      this.#validateDash(item);
      this.#validateMenuCount(menuCount);
      this.#validateMenu(menuName);
      checkMenus = this.#validateDuplicateMenu(checkMenus, menuName);
      totalMenuNum += menuCount;
      this.#validateTotalMenuNum(totalMenuNum);
      notIncludeDrinks = this.#updateIsOnlyDrinks(notIncludeDrinks, menuName);
    }
    this.#validateIsOnlyDrinks(notIncludeDrinks);
  }

  #menuDetail(item) {
    const dash = item.indexOf('-');

    return {
      menuName: item.substr(0, dash),
      menuCount: parseInt(item.substr(dash+1))
    }
  }

  #validateDash(item) {
    const dash = item.indexOf('-');
    if (dash === -1) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }

  #validateMenuCount(menuCount) {
    if (isNaN(menuCount) || menuCount < 1) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }

  #validateMenu(menuName) {
    if (!MENU[menuName]) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }

  #validateDuplicateMenu(checkMenus, menuName) {
    if (checkMenus.includes(menuName)) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
    checkMenus.push(menuName);
    return checkMenus
  }

  #validateTotalMenuNum(totalMenuNum) {
    if (totalMenuNum > 20) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }

  #updateIsOnlyDrinks(notIncludeDrinks, menuName) {
    if (MENU[menuName].TYPE !== 'drink') {
      notIncludeDrinks++;
    }
    return notIncludeDrinks
  }

  #validateIsOnlyDrinks(notIncludeDrinks) {
    if (notIncludeDrinks === 0) {
      throw new Error(ERROR_MESSAGE.INPUT_MENU);
    }
  }
}

export default Menus;
