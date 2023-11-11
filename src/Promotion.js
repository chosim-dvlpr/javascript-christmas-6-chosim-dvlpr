class Promotion {
  #dates;

  constructor(dates) {
    this.#validate(dates);
    this.#dates = dates;
  }

  #validate(dates) {
    if (isNaN(dates)) {
      throw new Error("[ERROR]");
    }
  }

  getDates() {
    return this.#dates;
  }

}

export default Promotion;
