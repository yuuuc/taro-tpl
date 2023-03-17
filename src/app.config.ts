export default defineAppConfig({
  pages: [
    'pages/index/pages/main/index',
    'pages/index/pages/shoppingCar/index',
    'pages/index/pages/mine/index',
  ],
  subpackages: [
    {
      root: 'pages/shopping',
      pages: ['pages/details/index'],
      independent: true,
    },
    {
      root: 'pages/account',
      pages: ['pages/addressManagement/index'],
      independent: true,
    },
  ],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,

    list: [
      {
        iconPath: 'static/home.png',
        selectedIconPath: 'static/home-active.png',
        pagePath: 'pages/index/pages/main/index',
        text: '首页',
      },
      {
        iconPath: 'static/car.png',
        selectedIconPath: 'static/car-active.png',
        pagePath: 'pages/index/pages/shoppingCar/index',
        text: '购物车',
      },
      {
        iconPath: 'static/mine.png',
        selectedIconPath: 'static/mine-active.png',
        pagePath: 'pages/index/pages/mine/index',
        text: '个人中心',
      },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
});
