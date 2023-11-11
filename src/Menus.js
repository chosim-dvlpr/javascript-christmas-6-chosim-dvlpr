class Menus {
  #menus;

  constructor(menus) {
    this.#validate(menus);
    this.#menus = menus;
  }

  #validate(menus) {
    // 문자열 형식이 맞는지 검사
    const menu = menus.split(',').map(String)
    console.log(typeof menu)
    for (let i = 0; i < menu.length; i++) {
      const element = menus[i];
      const dash = element.indexOf('-')
      if (dash === -1) {
        throw new Error("[ERROR]")
      }
    }
  }

  getMenus() {
    return this.#menus;
  }

}

export default Menus;
