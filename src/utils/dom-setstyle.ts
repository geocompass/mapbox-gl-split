// import { DStyleJson } from '../types/dom-setstyle';
type JSONStyle = {
  [key: string]: any;
};
/**
 * 批量设置dom样式
 * @param {number} element 元素
 * @param {obje} styleJson 样式
 */

const setDomStyle = (element: HTMLElement, styleJson: JSONStyle): void => {
  for (const attr in styleJson) {
    const eStyle: any = element.style;
    eStyle[attr] = styleJson[attr];
  }
};

export { setDomStyle };
