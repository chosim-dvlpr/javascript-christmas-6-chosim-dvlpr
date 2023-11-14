import ERROR_MESSAGE from "./constants/ErrorConstant.js";

class Dates {
  #dates;

  constructor(dates) {
    this.#validate(dates);
    this.#dates = dates;
  }

  #validate(dates) {
    const intDates = parseInt(dates, 10);

    if (isNaN(dates) || !Number.isInteger(intDates)) {
      throw new Error(ERROR_MESSAGE.INPUT_DATE);
    }

    if (intDates < 1 || intDates > 31) {
      throw new Error(ERROR_MESSAGE.INPUT_DATE);
    }
  }
}

export default Dates;
