/**
 * 元素检查
 * @param {string} elem 容器id
 */
const untilsOptionElemCheck = (elem: string): HTMLElement => {
  if (typeof elem === 'string') {
    const eleContainer = document.getElementById(elem)
    if (eleContainer) {
      return eleContainer
    } else {
      throw new Error('ReferenceError: container必须是一个为id的字符串。')
    }
  } else {
    throw new Error('ReferenceError: container未定义。')
  }
}

export { untilsOptionElemCheck }
