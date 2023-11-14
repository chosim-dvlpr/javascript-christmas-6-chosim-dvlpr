import { Console } from "@woowacourse/mission-utils";

const TotalDCView = {
  printTotalDC(totalDC) {
    Console.print("<총혜택 금액>");
    const stringTotalDC = totalDC.toLocaleString();
    Console.print(totalDC ? `-${stringTotalDC}원\n` : `${totalDC}원\n`);
  },
}

export default TotalDCView;