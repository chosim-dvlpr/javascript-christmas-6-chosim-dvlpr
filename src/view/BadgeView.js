import { Console } from "@woowacourse/mission-utils";
import STANDARD from "../constants/StandartConstant";

const BadgeView = {
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
}

export default BadgeView;