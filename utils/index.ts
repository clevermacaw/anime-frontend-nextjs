export const capitalize = (text: string) =>
  text.length ? text[0].toUpperCase() + text.slice(1) : ''

export const separator = (num: number) => {
  var str = num.toString().split('.')
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return str.join('.')
}
