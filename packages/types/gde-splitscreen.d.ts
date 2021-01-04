interface DScreen {
  /**
   * @description 每一屏的配置参数
   * @param {}
   */
}

export interface DOptions {
  /**
   * @description 分屏的配置参数
   * @param {number[]=} [grid=[1, 2]] - 分屏布局，一行两列。
   */

   grid?: Array<number>,
   screenOptions: Array<DScreen>
}
