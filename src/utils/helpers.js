// from: https://github.com/vuetifyjs/vuetify/blob/9dcc8902262119e7c55151c81f09af689edefb3e/packages/vuetify/src/util/helpers.ts#L264
export function convertToUnit (str, unit = 'px') {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(str)) {
    return String(str)
  } else {
    return `${Number(str)}${unit}`
  }
}
