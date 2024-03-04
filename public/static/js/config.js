var YS_DRONE_MONITOR_CONFIGS = {
  arcgis_js_api: {
    mode: 'offline', // "online" or "offline"
    online: 'https://js.arcgis.com/4.20',
    offline: 'http://' + location.host + '/arcgis_js_api/library/4.12',
  },
  map_server: {
    mode: 'offline', // "online" or "offline"
    online: 'https://a.tile.openstreetmap.org',
    offline: 'http://' + location.host + '/tile-server',
  },
};

var ENV_CONFIGS = {
  productName: '仓库管理专业新型半实物模拟器材',
  logoURL: '/static/images/logo.svg'
}
