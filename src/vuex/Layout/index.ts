interface State {
  titleShow: boolean;
}

export default {
  namespaced: true,
  state: () =>
    <State>{
      titleShow: false,
    },
  mutations: {},
  actions: {},
};
