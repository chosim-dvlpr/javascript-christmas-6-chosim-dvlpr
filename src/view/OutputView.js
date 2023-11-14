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
  // printBeforeDCTotal(inputMenuList) {
  //   Console.print("<할인 전 총주문 금액>");

  //   let totals = 0;
  //   let mainTotals = 0;
  //   let mainCounts = 0;
  //   let dessertTotals = 0;
  //   let dessertCounts = 0;

  //   ({totals, mainTotals, mainCounts, dessertTotals, dessertCounts} = this.calcTotals(inputMenuList, totals, mainTotals, mainCounts, dessertTotals, dessertCounts));
  //   const stringTotals = totals.toLocaleString();
  //   Console.print(`${stringTotals}원\n`);
  //   return {totals, dessertCounts, mainCounts}
  // },
  printGivingMenu(totals) {
    Console.print("<증정 메뉴>");
    if (totals > STANDARD.GIVE_CHAMPAGNE) {
      Console.print("샴페인 1개\n");
      return
    }
    Console.print("없음\n");
  },
  printBenefitsDetails(totals, dessertCounts, mainCounts, dates) {
    Console.print("<혜택 내역>");
  
    let totalDC = 0;
    let events = [];

    if (totals > 10000) {
      ({ totalDC, events } = this.checkEvents(dates, totals, totalDC, dessertCounts, mainCounts));
    }
    if (events.length === 0) {
      Console.print("없음");
      return totalDC;
    }
  
    this.printEvents(events);  
    return totalDC;
  },
  checkEvents(dates, totals, totalDC, dessertCounts, mainCounts) {
    let events = [
      this.christmasEvent(dates, totalDC),
      this.dayEvent(dates, totalDC, dessertCounts, mainCounts),
        this.specialEvent(dates),
        this.giveEvent(totals, totalDC)
    ].filter(Boolean);

    totalDC = events.reduce((acc, event) => acc + event.amount, totalDC);
    return { totalDC, events };
  },
  printEvents(events) {
    events.forEach(event => {
      Console.print(`${event.name}: -${event.amount.toLocaleString()}원`);
    });
  
    Console.print("");
  },
  printTotalDC(totalDC) {
    Console.print("<총혜택 금액>");
    const stringTotalDC = totalDC.toLocaleString();
    Console.print(totalDC ? `-${stringTotalDC}원\n` : `${totalDC}원\n`);
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
  // calcTotals(inputMenuList, totals, mainTotals, mainCounts, dessertTotals, dessertCounts) {
  //   for (let i = 0; i < inputMenuList.length; i++) {
  //     const inputMenuListElement = inputMenuList[i];

  //     totals = totals + MENU[inputMenuListElement.menuName].PRICE * inputMenuListElement.menuNum
  //     switch (MENU[inputMenuListElement.menuName].TYPE) {
  //       case 'main':
  //         mainTotals = mainTotals + MENU[inputMenuListElement.menuName].PRICE  
  //         mainCounts = mainCounts + Number(inputMenuListElement.menuNum);
  //         break;
  //       case 'dessert':
  //         dessertTotals = dessertTotals + MENU[inputMenuListElement.menuName].PRICE  
  //         dessertCounts = dessertCounts + Number(inputMenuListElement.menuNum);
  //         break;
  //     }
  //   }
  //   return {totals, mainTotals, mainCounts, dessertTotals, dessertCounts}
  // },
  christmasEvent(dates, totalDC) {
    let christmasDC = 0;
    let dDayDC = 0;
  
    if (dates < 26) {
      dDayDC = 1000 + (dates - 1) * 100;
      const stringDDayDC = dDayDC.toLocaleString();
      Console.print(`크리스마스 디데이 할인: -${stringDDayDC}원`);
      christmasDC++;
      totalDC += dDayDC;
    }
  
    return { name: '크리스마스 디데이 할인', amount: dDayDC, christmasDC };
  },
  dayEvent(dates, totalDC, dessertCounts, mainCounts) {
    let dayDC = 0;
    let weekdayDC = 0;
    let weekendDC = 0;
    const date = (Number(dates) + 1) % 7;
  
    if (WEEK.WEEKDAY.includes(date) && dessertCounts > 0) {
      ({ dayDC, weekdayDC, totalDC } = this.weekdayDiscount(dessertCounts, totalDC));
    } else if (mainCounts > 0) {
      ({ dayDC, weekendDC, totalDC } = this.weekendDiscount(mainCounts, totalDC));
    }
  
    return { name: '일반 할인', amount: weekdayDC + weekendDC, dayDC, weekdayDC, weekendDC, date };
  },
  weekdayDiscount(dessertCounts, totalDC) {
    const weekdayDC = 2023 * dessertCounts;
    const stringWeekdayDC = weekdayDC.toLocaleString();
    Console.print(`평일 할인: -${stringWeekdayDC}원`);
    return { dayDC: 1, weekdayDC, totalDC: totalDC + weekdayDC };
  },
  weekendDiscount(mainCounts, totalDC) {
    const weekendDC = 2023 * mainCounts;
    const stringWeekendDC = weekendDC.toLocaleString();
    Console.print(`주말 할인: -${stringWeekendDC}원`);
    return { dayDC: 1, weekendDC, totalDC: totalDC + weekendDC };
  },
  specialEvent(dates, totalDC) {
    let specialDC = 0;
    let starDC = 0;
  
    if ((Number(dates) + 1) % 7 === WEEK.IS_STAR[0] || Number(dates) === 25) {
      starDC = WEEK.IS_STAR[1];
      const stringStarDC = starDC.toLocaleString();
      Console.print(`특별 할인: -${stringStarDC}원`);
      specialDC++;
      totalDC += starDC;
    }
  
    return { name: '특별 할인', amount: starDC, specialDC };
  },
  giveEvent(totals, totalDC) {
    let giveDC = 0;
    let champagnePrice = 0;
  
    if (totals > STANDARD.GIVE_CHAMPAGNE) {
      champagnePrice = MENU.샴페인.PRICE;
      const stringChampagnePrice = champagnePrice.toLocaleString();
      Console.print(`증정 이벤트: -${stringChampagnePrice}원`);
      giveDC++;
      totalDC += champagnePrice;
    }
  
    return { name: '증정 이벤트', amount: champagnePrice, giveDC };
  }
}

export default OutputView;
