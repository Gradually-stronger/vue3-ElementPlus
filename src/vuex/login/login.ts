export interface State {
    loginStatus: boolean
}

export default {
    namespaced: true,
    state: () => <State>(
        {
            loginStatus: false
        }
    ),
    actions: {

    },
    mutations: {
        remeberMe(state: State, {loginStatus}: {loginStatus:boolean}) {
            state.loginStatus = loginStatus;
        }
    }
}