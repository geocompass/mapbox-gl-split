import { DOptions } from '../types/gde-splitscreen'
import { Map } from 'mapbox-gl'
import { optionsBase } from './options-base'

import { utilsMergeOptions } from '../utils/options-merge'
import { utilsSetDomStyle } from '../utils/dom-setstyle'
import { untilsOptionElemCheck } from '../utils/options-check'
import { utilsBase64Cursor } from '../utils/base64-cursor'
import { syncMaps } from '../utils/lib-mapbox-gl-sync-move'

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

  // 分屏
  private splitScreen() {
    const container = this._container
    const grid = this._options.grid
    const screenOptions = this._options.screenOptions
    let screenWith, screenHeight
    let eleContainer, containerWith, containerHeight

    // _设置每屏宽高
    eleContainer = untilsOptionElemCheck(container)
    containerWith = eleContainer.offsetWidth
    containerHeight = eleContainer.offsetHeight
    screenWith = containerWith / grid[1]
    screenHeight = containerHeight / grid[0]

    // _创建元素
    for (let i = 0; i < screenOptions.length; i++) {
      const eleScreen = untilsOptionElemCheck(screenOptions[i].optionContainer)
      eleScreen.setAttribute('style', `position: relative; width: ${screenWith}px; height: ${screenHeight}px;`)
      // 创建标题
      const eleScreenTitle = document.createElement('p')
      eleScreenTitle.className = `m-screen__p m-screen__p${i}`
      eleScreenTitle.innerHTML = screenOptions[i].optionTitle.text
      eleScreen.appendChild(eleScreenTitle)
      // 创建光标
      const eleScreenCursor = document.createElement('img')
      eleScreenCursor.className = 'm-screen__cursor'
      eleScreenCursor.src = utilsBase64Cursor
      eleScreenCursor.setAttribute('style', 'position: absolute; zIndex: 9999;')
      eleScreen.appendChild(eleScreenCursor)
    }
  }

  // 渲染地图元素
  private renderScreenEle() {
    const screenOptions = this._options.screenOptions
    const container = this._container

    // _设置外部容器的样式
    const containerEle = document.getElementById(container) as HTMLElement
    const containerStyle = {
      'display': 'flex',
      'flexWrap': 'wrap'
    }
    utilsSetDomStyle(containerEle, containerStyle)

    // _设置屏内元素样式渲染
    screenOptions.forEach((item, index) => {
      const screenEle = document.getElementById(item.optionContainer) as HTMLElement
      const titleEle = document.getElementsByClassName('m-screen__p')[index] as HTMLElement
      const screenStyle = {
        'position': 'relative'
      }
      const titleStyle = item.optionTitle
      utilsSetDomStyle(screenEle, screenStyle)
      utilsSetDomStyle(titleEle, titleStyle)
    })
  }

  // 模拟鼠标对比
  private renderCompareAnimate() {
    const screenOptions = this._options.screenOptions
    const EleCurosors = document.getElementsByClassName('m-screen__cursor')
    let maps: Array<Map> = []

    screenOptions.forEach((item, index) => {
      maps.push(item.optionMapbox)
      item.optionMapbox.getCanvas().style.cursor = 'default'

      // _光标的移动
      item.optionMapbox.on('mousemove', (e) => {
        const cursorLeft = e.point.x + 'px'
        const cursorTop = e.point.y + 'px'
        screenOptions.forEach((_, k) => {
          const otherEleCursor = EleCurosors[k] as HTMLElement
          otherEleCursor.style.display = 'block'
          otherEleCursor.style.left = cursorLeft
          otherEleCursor.style.top = cursorTop
        })
        const targetEleCursor = EleCurosors[index] as HTMLElement
        targetEleCursor.style.display = 'none'
      })
    })

    // _地图缩放、移动
    syncMaps(...maps)
  }
}
