declare let gde: any;
import { Split } from '../src/index';
const style = {
  name: '司南智图',
  zoom: 4,
  center: [116.42, 40.33],
  transition: {
    duration: 300,
    delay: 0
  },
  layers: [],
  metadata: {},
  version: 8,
  glyphs: 'http://vt.geo-compass.com/geocmap/api/v1/font/10001000004/{fontstack}/{range}.pbf',
  sprite: 'http://vt.geo-compass.com/geocmap/api/v1/symbol/10001000003/10001000015/sprite',
  sources: {}
};
const map1 = new gde.GdeMapbox({ container: 'container1', style, onResize: true, showGdeBaseLayerControl: true }).map;
const map2 = new gde.GdeMapbox({ container: 'container2', style, onResize: true, showGdeBaseLayerControl: true }).map;
new Split('container', {
  maps: [map1, map2]
});
