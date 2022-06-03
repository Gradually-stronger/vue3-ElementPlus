import request from "../until/request";

// const BaseUrl = "http://127.0.0.1:8819/api/v1";
const BaseUrl = "/api/v1";

const signUp = () =>
    request({
        url: BaseUrl + "/register/login",
        method: "POST"
    });

export default {
    signUp
};
