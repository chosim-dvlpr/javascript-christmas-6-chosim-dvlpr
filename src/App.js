import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printWelcome();

    // 사용자 값 입력받기
    const inputReservedDate = await InputView.readDate();
    const inputMenu = await InputView.readMenu();
    console.log(inputMenu)
    OutputView.printBenefitsMessage(inputReservedDate);
    
    // 주문 메뉴 출력
    // 음료만 주문 시 주문 불가
    // 한 번에 메뉴 20개까지만 주문 가능
    
    // const inputMenuList = inputMenu.split(',').map(String)
    // const inputMenuListSplited = [];
    // for (let i = 0; i < inputMenuList.length; i++) {
    //   const inputMenuListElement = inputMenuList[i];
    //   const dash = inputMenuListElement.indexOf('-')
    //   // if (dash === -1) {
    //   //   throw new Error("[ERROR]")
    //   // }
    //   const data = {
    //     menuName: inputMenuListElement.substr(0, dash),
    //     menuNum: inputMenuListElement.substr(dash+1, )
    //   }
    //   inputMenuListSplited.push(data)
    // }
    OutputView.printMenu(inputMenuListSplited);

    // 할인 전 총주문 금액
    const {totals, dessertTotals, dessertCounts, mainTotals, mainCounts} = OutputView.printBeforeDCTotal(inputMenuListSplited)

    // 증정 메뉴
    OutputView.printGivingMenu(totals);

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
