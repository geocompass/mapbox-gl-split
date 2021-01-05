import { Map } from 'mapbox-gl'

interface DTitleOptions {
  /**
   * @description 所有标题配置
   * @param {number=} [left=20] - left
   * @param {number=} [top=20] - top
   * @param {number=} [fontSize=16] - fontSize
   * @param {number=} [color='rgba(0,0,0,0.7)'] - color
   */
  position?: string;
  zIndex?: number;
  left?: string;
  top?: string;
  fontSize?: string;
  color?: string;
}
interface DTitle extends DTitleOptions {
  text: string;
}

interface DScreen {
  /**
   * @description 每屏
   * @param {string} optionContainer - 每屏容器的id
   * @param {object} optionTitle - 每屏的标题
   * @param {function} optionMapbox - 每屏的地图
   */
  optionContainer: string;
  optionTitle: DTitle;
  optionMapbox: Map;
}

export interface DOptionsBase {
  /**
   * @description 基础默认配置参数
   * @param {number[]=} [grid=[1, 2]] 分屏布局，一行两列。
   * @param {object} titleOptions 所有标题配置
   */

  grid?: Array<number>;
  titleOptions: DTitleOptions;
}

export interface DOptions {
  /**
   * @description 分屏的配置参数
   * @param {number[]=} [grid=[1, 2]] 分屏布局，一行两列。
   * @param {object} titleOptions 所有标题配置
   * @param {object} screenOptions 每屏详细配置
   */

   grid?: Array<number>;
   titleOptions?: DTitleOptions;
   screenOptions: Array<DScreen>;
}
