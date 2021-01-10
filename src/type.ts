import { Map } from 'mapbox-gl';
/** 分屏的配置项 */
export type SplitOptions = {
  /** 分屏的map数组 */
  maps: Map[];

  /** 分屏的行数 */
  row?: number;
};
