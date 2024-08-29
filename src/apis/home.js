import httpInstance from "@/utils/http"

//获取轮播图
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

//获取新鲜好物
export function getNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

//获取人气推荐
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

//获取所有商品模块
export function getProductAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}