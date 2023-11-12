import ERROR_MESSAGE from "./constants/ErrorConstant.js";

class Dates {
  #dates;

  constructor(dates) {
    this.#validate(dates);
    this.#dates = dates;
  }

  #validate(dates) {
    const intDates = parseInt(dates, 10);

    // 숫자, 정수 확인
    if (isNaN(dates) || !Number.isInteger(intDates)) {
      throw new Error(ERROR_MESSAGE.INPUT_DATE);
    }

    // 숫자 범위 확인
    if (intDates < 1 || intDates > 31) {
      throw new Error(ERROR_MESSAGE.INPUT_DATE);
    }
  }
}

export default Dates;
