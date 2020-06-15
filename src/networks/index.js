import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.timeout = 5000
export let baseUrl = "http://localhost:80/"

axios.interceptors.request.use(
    config => config
)
axios.interceptors.response.use(
    res => res
)

/**
 * 封装get
 * @param url
 * @param params
 * @return {promise}
 */
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios(baseUrl + url, {
            params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            Message.warning("get请求失败")
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param payload
 * @return {promise}
 */
function post(url, payload = {}) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + url, payload).then(res => {
            resolve(res.data)
        }).catch(err => {
            Message.warning("post请求失败")
            reject(err)
        })
    })
}

/**
 * 封装图片上传
 * @param formData
 * @return {Promise}
 */
export function imgUpload(formData) {
    return post("upload", formData)
}

/**
 * 封装获取文章
 * @return {Promise}
 */
export function getArticles() {
    return get('article/get')
}