import { Console } from '@woowacourse/mission-utils'
import STANDARD from '../constants/StandartConstant';

const GivingMenu = {
  printGivingMenu(totals) {
    Console.print("<증정 메뉴>");
    if (totals > STANDARD.GIVE_CHAMPAGNE) {
      Console.print("샴페인 1개\n");
      return
    }
    Console.print("없음\n");
  },
}

export default GivingMenu