import AfterDCView from './view/AfterDCView.js';
import BadgeView from './view/BadgeView.js';
import BeforeDCView from './view/BeforeDCView.js';
import BenefitsView from './view/BenefitsView.js';
import GivingMenu from './view/GivingMenuView.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import TotalDCView from './view/TotalDCView.js';

class App {
  async run() {
    OutputView.printWelcome();
    const inputReservedDate = await InputView.readDate();
    const inputMenuList = await InputView.readMenu();
    OutputView.printBenefitsMessage(inputReservedDate);

    const inputMenuListSplited = OutputView.printMenu(inputMenuList);
    const {totals, dessertCounts, mainCounts} = BeforeDCView.printBeforeDCTotal(inputMenuListSplited)
    GivingMenu.printGivingMenu(totals);

    const totalDC = BenefitsView.printBenefitsDetails(totals, dessertCounts, mainCounts, inputReservedDate);
    
    TotalDCView.printTotalDC(totalDC);
    AfterDCView.printAfterDC(totals, totalDC);
    BadgeView.printBadge(totalDC);
  }
}

export default App;
