/* JS loader */
let routes = [
  {
    path: "/regional/",
    script: [`${SERVER.assets}/js/pages/regional.js`],
  },
  {
    path: "/overview/",
    script: [
      `${SERVER.assets}/js/pages/overview.js`,
      `${SERVER.assets}/js/pages/overview_slide1.js`,
      `${SERVER.assets}/js/pages/overview_slide2.js`,
      `${SERVER.assets}/js/pages/overview_sample.js`,
    ],
  },
];
const url = location.pathname;
const hasPath = routes.filter((_route) => {
  return Array.isArray(_route.path) ? _route.path.find((_path) => url.includes(_path)) : url.includes(_route.path);
});
if (hasPath[0]) window.loadScript({ src: hasPath[0].script });
