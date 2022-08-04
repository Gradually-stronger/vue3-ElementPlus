import request from './index';


export const createPosts = (data: any) => {
console.log(data);
    return request({
        url: 'api/posts',
        method: "POST",
        data
    })
}
