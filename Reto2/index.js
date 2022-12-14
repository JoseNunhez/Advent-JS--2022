function countHours(year, holidays) {
    return holidays.map(holiday => {
      let date = new Date(`${year}/${holiday}`)
      return [1, 2, 3, 4, 5].includes(date.getDay())
    }).reduce((count, extraHour) => count + extraHour) * 2
  }


const year = 2022
const holidays = ['01/06', '04/01', '12/25']

console.log(countHours(year, holidays))