const WEEK = Object.freeze({
  // 일~목 : 평일
  // (일~목 + 1) % 7 : 1 ~ 4
  WEEKDAY: [1, 2, 3, 4],
  IS_STAR: [4, '1,000'],
})

export default WEEK;