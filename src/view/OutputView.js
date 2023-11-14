import { Console } from '@woowacourse/mission-utils'
import MENU from '../constants/MenuConstant.js';
import WEEK from '../constants/WeekConstant.js';
import STANDARD from '../constants/StandartConstant.js';

const OutputView = {
  printMenu(inputMenuList) {
    Console.print("<주문 메뉴>");
    
    const inputMenuListSplited = this.splitMenu(inputMenuList);

    Console.print("");
    return inputMenuListSplited
  },
  printWelcome() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  printBenefitsMessage(date) {
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printAfterDC(totals, totalDC) {
    Console.print("<할인 후 예상 결제 금액>");
    let afterDC = totals - totalDC;
    if (totals > STANDARD.GIVE_CHAMPAGNE) {
      afterDC = afterDC + MENU.샴페인.PRICE;
    }
    const stringAfterDC = afterDC.toLocaleString();
    Console.print(`${stringAfterDC}원\n`);
  },
  printBadge(totalDC) {
    Console.print("<12월 이벤트 배지>");
    if (totalDC > STANDARD.BADGE_SANTA.PRICE) {
      Console.print(STANDARD.BADGE_SANTA.NAME);
      return
    } else if (totalDC > STANDARD.BADGE_TREE.PRICE) {
      Console.print(STANDARD.BADGE_TREE.PRICE);
      return
    } else if (totalDC > STANDARD.BADGE_STAR.PRICE) {
      Console.print(STANDARD.BADGE_STAR.NAME);
      return
    }
    Console.print("없음");
    Console.print("");
  },
  splitMenu(inputMenuList) {
    const inputMenuListSplited = [];
    for (let i = 0; i < inputMenuList.length; i++) {
      const inputMenuListElement = inputMenuList[i];
      const dash = inputMenuListElement.indexOf('-');
      const menuName = inputMenuListElement.substr(0, dash);
      const menuNum = inputMenuListElement.substr(dash+1, inputMenuListElement.length);
      const data = {
        menuName: menuName,
        menuNum: menuNum
      }
      inputMenuListSplited.push(data)
      Console.print(`${menuName} ${menuNum}개`);
    };
    return inputMenuListSplited
  },
}

export default OutputView;
