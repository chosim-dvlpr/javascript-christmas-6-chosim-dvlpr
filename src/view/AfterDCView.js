import { Console } from "@woowacourse/mission-utils";
import STANDARD from "../constants/StandartConstant";
import MENU from "../constants/MenuConstant";

const AfterDCView = {
  printAfterDC(totals, totalDC) {
    Console.print("<할인 후 예상 결제 금액>");
    let afterDC = totals - totalDC;
    if (totals > STANDARD.GIVE_CHAMPAGNE) {
      afterDC = afterDC + MENU.샴페인.PRICE;
    }
    const stringAfterDC = afterDC.toLocaleString();
    Console.print(`${stringAfterDC}원\n`);
  },
}

export default AfterDCView;