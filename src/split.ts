import { SplitOptions } from './type';
import { cursorBase64 } from './utils/cursor-base64';
import { setDomStyle } from './utils/dom-setstyle';
import { syncMaps } from './utils/lib-mapbox-gl-sync-move';
const defaultOptions = {
  row: 1
};
export class Split {
  public container: HTMLElement;
  public options: SplitOptions;
  constructor(container: string | HTMLElement, options: SplitOptions) {
    if (typeof container === 'string') {
      const tempContainer = document.getElementById(container);
      if (tempContainer === null) {
        throw '未找到容器';
      }
      container = tempContainer;
    }
    this.container = container;
    this.options = { ...defaultOptions, ...options };
    this.init();
  }
  private init(): void {
    // 设置外部容器的样式
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap'
    };
    setDomStyle(this.container, containerStyle);

    this.initMapContainer();

    this.initMousemove();

    syncMaps(...this.options.maps);
  }

  /**
   * 初始化map container
   */
  private initMapContainer(): void {
    // TODO: 暂时不考虑行数，只为1行
    const mapNum = this.options.maps.length;

    // 计算每屏宽高
    const containerWith = this.container.offsetWidth;
    const containerHeight = this.container.offsetHeight;
    const screenWith = containerWith / mapNum;
    const screenHeight = containerHeight;

    for (let i = 0; i < this.options.maps.length; i++) {
      // 1.获取map
      const map = this.options.maps[i];

      // 2.获取map container
      const mapContainer = map.getContainer();
      map.getCanvas().style.cursor = 'default';

      // 3.设置样式
      const style = {
        position: 'relative'
      };
      setDomStyle(mapContainer, style);

      // 4.设置map container的宽 高 position
      mapContainer.setAttribute('style', `position: relative; width: ${screenWith}px; height: ${screenHeight}px;`);

      // 5.创建光标element
      const cursorEle = document.createElement('img');
      cursorEle.className = 'm-screen__cursor';
      cursorEle.id = 'm-screen__cursor_' + i;
      cursorEle.src = cursorBase64;
      cursorEle.setAttribute('style', 'position: absolute; zIndex: 9999;');

      // 6.地图容器中增加鼠标element
      mapContainer.appendChild(cursorEle);
    }
  }

  // 初始化鼠标事件
  private initMousemove() {
    const cursorElements = document.getElementsByClassName('m-screen__cursor');

    this.options.maps.forEach((map, index) => {
      // _光标的移动
      map.on('mousemove', (e) => {
        // 减去一些数值因为鼠标图片从左上角计算
        const cursorLeft = e.point.x - 10 + 'px';
        const cursorTop = e.point.y - 6 + 'px';
        for (let i = 0; i < cursorElements.length; ++i) {
          const cursorEle = cursorElements[i] as HTMLElement;
          cursorEle.style.display = 'block';
          cursorEle.style.left = cursorLeft;
          cursorEle.style.top = cursorTop;
        }

        // 将自己的光标显示设置为none
        const selfCursorEle = document.getElementById('m-screen__cursor_' + index);
        if (!selfCursorEle) return;
        selfCursorEle.style.display = 'none';
      });
    });
  }
}
