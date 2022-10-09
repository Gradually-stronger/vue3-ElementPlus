import request from './index';
import { stringify } from 'qs'

export const createPosts = (data: any) => {
    console.log(data);
    return request({
        url: 'api/posts',
        method: "POST",
        data
    })
}

export const getPosts = (params = {}) => {
    return request({
        url: `api/posts?${stringify(params)}`,
        method: "GET",

    })
}

export const deletePosts = (id: string) => {
    return request({
        url: `api/posts/${id}`,
        method: "DELETE",

    })
}

export const getAll = (params = {}) => {
    return request({
        url: `api/posts_all?${stringify(params)}`,
        method: "GET",

    })
}