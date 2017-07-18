function dateStringFixer (str) {
  if (!str) return '...not sure actually.'

  let month = ''
  let day = ''
  let year = ''

  year = str.slice(0, 4)
  month = str.slice(5, 7)
  day = str.slice(8, 10)

  if (month[0] === '0') month = month[1]
  if (day[0] === '0') day = day[1]

  return month + '/' + day + '/' + year
}

export { dateStringFixer }
