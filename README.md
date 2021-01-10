# mapbox-gl-js 分屏
# 使用
```js
const map1 = new mapboxgl.Map({ container: 'container1', style });
const map2 = new mapboxgl.Map({ container: 'container2', style });
new Split('container', {
  maps: [map1, map2]
});
```