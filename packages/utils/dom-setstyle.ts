import { DStyleJson } from '../types/dom-setstyle'

/**
 * 批量设置dom样式
 * @param {number} element 元素
 * @param {obje} styleJson 样式
 */

const utilsSetDomStyle = (element: HTMLElement, styleJson: Partial<DStyleJson>): void => {
  for (const attr in styleJson) {
    element.style[attr] = styleJson[attr]
  }
}

export { utilsSetDomStyle }
