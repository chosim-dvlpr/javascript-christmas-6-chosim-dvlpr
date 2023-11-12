import { Console } from '@woowacourse/mission-utils'
import Dates from './Dates.js';
import Menus from './Menus.js';

const InputView = {
  async readDate() {
    let input;
    try {
      input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
      new Dates(input);
      return input
    } catch (error) {
      Console.print(error.message)
      await this.readDate();
    }
  },
  async readMenu() {
    try {
      const menu = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)");
      new Menus(menu);
      const menuList = menu.split(',').map(String);
      return menuList
    } catch (error) {
      Console.print(error.message)
      return await this.readMenu();
    }
  }
}

export default InputView;
