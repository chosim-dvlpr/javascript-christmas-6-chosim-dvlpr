import { Console } from '@woowacourse/mission-utils'
import MENU from '../constants/MenuConstant.js';

const BeforeDCView = {
  printBeforeDCTotal(inputMenuList) {
    Console.print("<할인 전 총주문 금액>");

    let totals = 0;
    let mainTotals = 0;
    let mainCounts = 0;
    let dessertTotals = 0;
    let dessertCounts = 0;

    ({totals, mainTotals, mainCounts, dessertTotals, dessertCounts} = this.calcTotals(inputMenuList, totals, mainTotals, mainCounts, dessertTotals, dessertCounts));
    const stringTotals = totals.toLocaleString();
    Console.print(`${stringTotals}원\n`);
    return {totals, dessertCounts, mainCounts}
  },
  
  calcTotals(inputMenuList, totals, mainTotals, mainCounts, dessertTotals, dessertCounts) {
    for (let i = 0; i < inputMenuList.length; i++) {
      const inputMenuListElement = inputMenuList[i];

      totals = totals + MENU[inputMenuListElement.menuName].PRICE * inputMenuListElement.menuNum
      switch (MENU[inputMenuListElement.menuName].TYPE) {
        case 'main':
          mainTotals = mainTotals + MENU[inputMenuListElement.menuName].PRICE  
          mainCounts = mainCounts + Number(inputMenuListElement.menuNum);
          break;
        case 'dessert':
          dessertTotals = dessertTotals + MENU[inputMenuListElement.menuName].PRICE  
          dessertCounts = dessertCounts + Number(inputMenuListElement.menuNum);
          break;
      }
    }
    return {totals, mainTotals, mainCounts, dessertTotals, dessertCounts}
  },
}

export default BeforeDCView;