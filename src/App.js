import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printWelcome();
    // 사용자 값 입력받기
    const inputReservedDate = await InputView.readDate();
    const inputMenu = await InputView.readMenu();
    
    OutputView.printBenefitsMessage(inputReservedDate);
    

  }
}

export default App;
