import BeforeDCView from './view/BeforeDCView.js';
import GivingMenu from './view/GivingMenuView.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    OutputView.printWelcome();

    // 사용자 값 입력받기
    const inputReservedDate = await InputView.readDate();
    const inputMenuList = await InputView.readMenu();
    OutputView.printBenefitsMessage(inputReservedDate);

    // 주문 메뉴 출력
    const inputMenuListSplited = OutputView.printMenu(inputMenuList);

    // 할인 전 총주문 금액
    const {totals, dessertCounts, mainCounts} = BeforeDCView.printBeforeDCTotal(inputMenuListSplited)

    // 증정 메뉴
    GivingMenu.printGivingMenu(totals);

    // 혜택 내역
    const totalDC = OutputView.printBenefitsDetails(totals, dessertCounts, mainCounts, inputReservedDate);

    // 총 혜택 금액
    OutputView.printTotalDC(totalDC);

    // 할인 후 예상 결제 금액
    OutputView.printAfterDC(totals, totalDC);

    // 12월 이벤트 배지
    OutputView.printBadge(totalDC);
  }
}

export default App;
