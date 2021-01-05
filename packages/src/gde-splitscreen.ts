import {
  DOptions
} from '../types/gde-splitscreen'
import { optionsBase } from './options-base'
import { utilsMergeOptions } from '../utils/options-merge'
import { utilsSetDomStyle } from '../utils/dom-setstyle'
import { untilsOptionElemCheck } from '../utils/options-check'
// const syncMove = require('mapbox-gl-sync-move')

/**
 * @description 分屏
 */
export class GdeSplitScreen {
  private _container: string
  private _options: Required<DOptions>

  constructor(container: string, options: DOptions) {
    this._container = container
    this._options = utilsMergeOptions(optionsBase, options)

    this._render()
  }

  private _render() {
    this.splitScreen()
    this.renderScreenEle()
    this.renderCompareAnimate()
  }

  // 渲染分屏
  private splitScreen() {
    const container = this._container
    const grid = this._options.grid
    const screenOptions = this._options.screenOptions
    let screenWith, screenHeight
    let eleContainer, containerWith, containerHeight

    // 获取container的宽高
    eleContainer = untilsOptionElemCheck(container)
    containerWith = eleContainer.offsetWidth
    containerHeight = eleContainer.offsetHeight

    // 分屏
    screenWith = containerWith / grid[1]
    screenHeight = containerHeight / grid[0]

    // 创建分屏元素
    for (let i = 0; i < screenOptions.length; i++) {
      const eleScreen = untilsOptionElemCheck(screenOptions[i].optionContainer)
      eleScreen.setAttribute('style', `position: relative; width: ${screenWith}px; height: ${screenHeight}px;`)
      const eleScreenTitle = document.createElement('p')
      eleScreenTitle.className = `m-screen__p m-screen__p${i}`
      eleScreenTitle.innerHTML = screenOptions[i].optionTitle.text
      eleScreen.appendChild(eleScreenTitle)
    }
  }

  // 渲染地图及标题
  private renderScreenEle() {
    const screenOptions = this._options.screenOptions
    const container = this._container

    // 设置外部容器的样式
    const containerEle = document.getElementById(container) as HTMLElement
    const containerStyle = {
      'display': 'flex',
      'flexWrap': 'wrap'
    }
    utilsSetDomStyle(containerEle, containerStyle)

    // 屏渲染
    screenOptions.forEach((item, index) => {
      // 样式渲染
      const screenEle = document.getElementById(item.optionContainer) as HTMLElement
      const titleEle = document.getElementsByClassName('m-screen__p')[index] as HTMLElement
      const screenStyle = {
        'position': 'relative'
      }
      const titleStyle = item.optionTitle
      utilsSetDomStyle(screenEle, screenStyle)
      utilsSetDomStyle(titleEle, titleStyle)

      // 地图渲染
      item.optionMapbox.getCanvas().style.cursor = 'none'
    })
  }

  // 渲染模拟鼠标对比
  private renderCompareAnimate() {
    const screenOptions = this._options.screenOptions
  }
}
