import httpInstance from "@/utils/http"

//获取轮播图
export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
        id
    }
  })
}