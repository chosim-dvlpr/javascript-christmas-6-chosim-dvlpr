import { Console } from '@woowacourse/mission-utils'
import WEEK from '../constants/WeekConstant.js';
import STANDARD from '../constants/StandartConstant.js';
import MENU from '../constants/MenuConstant.js';

const BenefitsView = {
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
  },

  printEvents(events) {
    events.forEach(event => {
      Console.print(`${event.name}: -${event.amount.toLocaleString()}원`);
    });
  
    Console.print("");
  },
}

export default BenefitsView;