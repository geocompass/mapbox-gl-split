import { Map } from 'mapbox-gl'
import {
  DOptions
} from '../types/gde-splitscreen'
import { optionsBase } from './options-base'
import { utilsMergeOptions } from '../utils/merge-options'
import { utilsSetDomStyle } from '../utils/set-domstyle'
const { GdeMapbox } = require('../static/gde-sdk/gde.min.js')

/**
 * @description 分屏
 */
export class GdeSplitScreen {
  private _container: string
  private _options: Required<DOptions>
  private _mapboxCollection: Array<Map>

  constructor(container: string, options: DOptions) {
    this._container = container
    this._options = utilsMergeOptions(optionsBase, options)

    this._render()
  }

  private _render() {
    // 渲染分屏
    this.splitScreen()

    // 渲染地图
    this.renderScreenEle()

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
      eleScreen.id = `m-screen m-screen${i}`
      eleScreen.setAttribute('style', `width: ${screenWith}; height: ${screenHeight}; position: relative;`)
      eleScreen.innerHTML = `
        <p class=m-screen__p m-screen__p${i}>${screenOptions[i].optionTitle.text}</p>
      `
      eleContainer.appendChild(eleScreen)
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
      const screenEle = document.getElementById(`m-screen${index}`) as HTMLElement
      const titleEle = document.getElementsByClassName('m-screen__p')[0] as HTMLElement
      const screenStyle = {
        'position': 'relative'
      }
      const titleStyle = item.optionTitle
      utilsSetDomStyle(screenEle, screenStyle)
      utilsSetDomStyle(titleEle, titleStyle)

      // 地图渲染
      const renderMap = new GdeMapbox({
        container: screenEle,
        style: item.optionContent.mapStyle,
        center: item.optionContent.mapCenter,
        zoom: item.optionContent.mapZoom
      })
      renderMap.getCanvas().style.cursor = 'none'
      this._mapboxCollection.push(renderMap)
    })
  }

  // 渲染模拟鼠标对比
  private renderCompareAnimate() {
    const mapboxCollection = this._mapboxCollection
  }
}
