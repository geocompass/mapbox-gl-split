import {
  DOptions
} from '../types/gde-splitscreen'
import { optionsBase } from './options-base'
import { utilsMergeOptions } from '../utils/merge-options'

/**
 * @description 分屏
 */
export class GdeSplitScreen {
  private _container: string
  private _options: Required<DOptions>

  constructor(container: string, options: DOptions) {
    this._container = container
    this._options = utilsMergeOptions(optionsBase, options)
  }

  private _render() {
    // 渲染分屏
    this.splitScreen()

    // 渲染地图
    this.renderMap()

    // 渲染模拟鼠标对比
    this.renderCompareAnimate()
  }

  // 渲染分屏
  private splitScreen() {
    const container = this._container
    const grid = this._options.grid
    const screenLength = grid[0] * grid[1]
    const screenOptions = this._options.screenOptions
    let screenWith, screenHeight
    let eleContainer, containerWith, containerHeight

    // 获取container的宽高
    if (typeof container === 'string') {
      eleContainer = document.getElementById(container)
      if (!eleContainer) throw new Error('ReferenceError: container必须是一个为id的字符串。')
    } else {
      throw new Error('ReferenceError: container未定义。')
    }
    containerWith = eleContainer.offsetWidth
    containerHeight = eleContainer.offsetHeight

    // 分屏
    screenWith = containerWith / grid[1]
    screenHeight = containerHeight / grid[0]

    // 创建分屏元素
    for (let i = 0; i < screenLength; i++) {
      const eleScreen = document.createElement('div')
      eleScreen.className = `m-screen__${i}`
      eleScreen.setAttribute('style', `width: ${screenWith}; height: ${screenHeight}; position: relative;`)
      // TODO p setStyle
      eleScreen.innerHTML = `
        <p class=m-screen__${i}_p>${screenOptions[i].optionTitle.text}</p>
      `
      eleContainer.appendChild(eleScreen)
    }
  }

  // 渲染地图
  private renderMap() {}

  // 渲染模拟鼠标对比
  private renderCompareAnimate() {}
}
