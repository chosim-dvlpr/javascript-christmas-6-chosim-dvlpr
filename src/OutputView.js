import { Console } from '@woowacourse/mission-utils'

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
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },
}

export default OutputView;
