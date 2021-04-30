import { SplitMap } from '../src/index';
const style1 = {
  name: '司南智图',
  zoom: 4,
  center: [116.42, 40.33],
  transition: {
    duration: 300,
    delay: 0
  },
  layers: [
    {
      id: '天地图矢量',
      type: 'raster',
      source: 'tdt_vec'
    },
    {
      id: '天地图矢量注记',
      type: 'raster',
      source: 'tdt_cva'
    }
  ],
  metadata: {},
  version: 8,
  glyphs: 'http://vt.geo-compass.com/geocmap/api/v1/font/10001000004/{fontstack}/{range}.pbf',
  sprite: 'http://vt.geo-compass.com/geocmap/api/v1/symbol/10001000003/10001000015/sprite',
  sources: {
    tdt_vec: {
      type: 'raster',
      tiles: ['http://t5.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=b8b36f528ccc550525c7cada64303bc4'],
      tileSize: 256
    },
    tdt_cva: {
      type: 'raster',
      tiles: ['http://t5.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=b8b36f528ccc550525c7cada64303bc4'],
      tileSize: 256
    }
  }
};
const style2 = {
  name: '司南智图',
  zoom: 4,
  center: [116.42, 40.33],
  transition: {
    duration: 300,
    delay: 0
  },
  layers: [
    {
      id: '天地图影像',
      type: 'raster',
      source: 'tdt_img'
    },
    {
      id: '天地图影像注记',
      type: 'raster',
      source: 'tdt_cia'
    }
  ],
  metadata: {},
  version: 8,
  glyphs: 'http://vt.geo-compass.com/geocmap/api/v1/font/10001000004/{fontstack}/{range}.pbf',
  sprite: 'http://vt.geo-compass.com/geocmap/api/v1/symbol/10001000003/10001000015/sprite',
  sources: {
    tdt_img: {
      type: 'raster',
      tiles: ['http://t5.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=b8b36f528ccc550525c7cada64303bc4'],
      tileSize: 256
    },
    tdt_cia: {
      type: 'raster',
      tiles: ['http://t5.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=b8b36f528ccc550525c7cada64303bc4'],
      tileSize: 256
    }
  }
};

// @ts-ignore
const map1 = new mapboxgl.Map({ container: 'container1', style: style1, trackResize: true });

// @ts-ignore
const map2 = new mapboxgl.Map({ container: 'container2', style: style2, trackResize: true });

new SplitMap('container', {
  maps: [map1, map2]
});
