import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printWelcome();
    // 사용자 값 입력받기
    const inputReservedDate = await InputView.readDate();
    const inputMenu = await InputView.readMenu();
    
    OutputView.printBenefitsMessage(inputReservedDate);
    
    // 주문 메뉴 출력
    const inputMenuList = inputMenu.split(',').map(String)
    const inputMenuListSplited = [];
    for (let i = 0; i < inputMenuList.length; i++) {
      const inputMenuListElement = inputMenuList[i];
      const dash = inputMenuListElement.indexOf('-')
      // if (dash === -1) {
      //   throw new Error("[ERROR]")
      // }
      const data = {
        menuName: inputMenuListElement.substr(0, dash),
        menuNum: inputMenuListElement.substr(dash+1, )
      }
      inputMenuListSplited.push(data)
    }
    OutputView.printMenu(inputMenuListSplited);

    // 할인 전 총주문 금액
    OutputView.printBeforeDCTotal(inputMenuListSplited)
  }
}

export default App;
