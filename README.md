<h1 align="center">Welcome to G2Plot-Lollipop 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/mapbox-gl-split" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/mapbox-gl-split.svg">
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/MrSmallLiu/g2plot-lollipop" />
  </a>
</p>

# mapbox-gl-js 分屏
# 使用
引入
```js
const map1 = new mapboxgl.Map({ container: 'container1', style });
const map2 = new mapboxgl.Map({ container: 'container2', style });
new SplitMap('container', {
  maps: [map1, map2]
});
```