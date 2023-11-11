import { Console } from '@woowacourse/mission-utils'
import MENU from './constants/MenuConstant.js';
import WEEK from './constants/WeekConstant.js';

const OutputView = {
  printMenu(inputMenuList) {
    Console.print("<주문 메뉴>");
    for (let i = 0; i < inputMenuList.length; i++) {
      const inputMenuListElement = inputMenuList[i];
      Console.print(`${inputMenuListElement.menuName} ${inputMenuListElement.menuNum}개`);
    }
  },
  printWelcome() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  printBenefitsMessage(date) {
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },
  printBeforeDCTotal(inputMenuList) {
    Console.print("<할인 전 총주문 금액>");
    let totals = 0;
    // let appetizerTotals = 0;
    let mainTotals = 0;
    let dessertTotals = 0;

    for (let i = 0; i < inputMenuList.length; i++) {
      const inputMenuListElement = inputMenuList[i];
      totals = totals + MENU[inputMenuListElement.menuName].PRICE * inputMenuListElement.menuNum

      switch (MENU[inputMenuListElement.menuName].TYPE) {
        case 'main':
          mainTotals = mainTotals + MENU[inputMenuListElement.menuName].PRICE  
          break;
        case 'dessert':
          dessertTotals = dessertTotals + MENU[inputMenuListElement.menuName].PRICE  
          break;
      }
    }
    Console.print(`${totals}원\n`) // 1000단위로 나누기
    return totals, dessertTotals, mainTotals
  },
  printGivingMenu(totals) {
    Console.print("<증정 메뉴>");
    if (totals > 120000) {
      Console.print("샴페인 1개\n");
      return
    }
    Console.print("없음\n");
  },
  printBenefitsDetails(totals, dates) {
    if (totals > 10000) {
      // 크리스마스 디데이 할인
      if (dates < 26) {
        const dDayDC = 1000 + (dates - 1) * 100
        Console.print(`크리스마스 디데이 할인: -${dDayDC}원`)
      }
      // 평일 할인
      const date = (dates + 1) % 7
      if (date in WEEK.WEEKDAY) {
        // Console.print(`평일 할인: ${}원`)
      }
      // 특별 할인
      
      // 증정 이벤트

      // 혜택 내역이 하나도 없다면 없음 출력

      return
    }
    Console.print("없음\n")
  }
}

export default OutputView;
