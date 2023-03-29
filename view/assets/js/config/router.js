/* JS loader */
let routes = [
  {
    path: "/regional/",
    script: [`${SERVER.assets}/js/pages/regional.js`],
  },
  {
    path: "/overview/",
    script: [`${SERVER.assets}/js/pages/overview.js`, `${SERVER.assets}/js/pages/overview_slide1.js`, `${SERVER.assets}/js/pages/overview_slide2.js`],
  },
];
const url = location.pathname;
const hasPath = routes.filter((_route) => {
  try {
    if (SERVER.assets === undefined) throw new Error(`assets 경로가 잘못되어 URL Path("${_route.path}")를 정상적으로 로드 할 수 없습니다.`);
  } catch (_err) {
    console.log(`%c router.js %c ${_err}`, "color:yellow;background:#ffb6c16b", "color:red;");
    return;
  }

  return Array.isArray(_route.path) ? _route.path.find((_path) => url.includes(_path)) : url.includes(_route.path);
});
if (hasPath[0]) window.loadScript({ src: hasPath[0].script });
