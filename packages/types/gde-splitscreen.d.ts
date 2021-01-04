interface DTitleOptions {
  /**
   * @description 所有标题配置
   * @param {number=} [left=20] - left
   * @param {number=} [top=20] - top
   * @param {number=} [fontSize=16] - fontSize
   * @param {number=} [color='rgba(0,0,0,0.7)'] - color
   */
  left?: number;
  top?: number;
  fontSize?: number;
  color?: string;
}

interface DMapOtions {
  /**
   * @description 所有地图配置
   * @param {number[]} mapCenter 地图中心点
   * @param {number} mapZoom 缩放级别
   */
  mapCenter: Array<number>;
  mapZoom: number;
}

interface DContent extends DMapOtions {
  mapStyle: any;
}
interface DTitle extends DTitleOptions {
  text: string;
}
interface DScreen {
  optionTitle: DTitle;
  optionContent: DContent;
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
   * @param {object} mapOtions 所有地图配置
   * @param {object} titleOptions 所有标题配置
   * @param {object} screenOptions 每屏详细配置
   */

   grid?: Array<number>;
   mapOtions: DMapOtions;
   titleOptions?: DTitleOptions;
   screenOptions: Array<DScreen>;
}
