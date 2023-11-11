class Dates {
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
}

export default Dates;
