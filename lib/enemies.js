const enemies = number => {
  let arr = []
  for (let i = 1; i <= number; i++) {
    arr.push({
      id: i,
      latitude: getRandomInRange(-180, 180, 3),
      longitude: getRandomInRange(-180, 180, 3)
    })
  }
  return arr
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    // fixed is the number of decimal places required
}

module.exports = enemies(number)
