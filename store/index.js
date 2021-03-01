// create a store
export const stage = () => ({
  committee: {}
});

// getters
export const getters = {
  committee(state) {
    return state.committee
  }
};

// mutations
export const mutations = {
  SET_COMMITTEE(state, committee) {
    state.committee = committee
  }
};

// actions
export const actions = {
  setCommittee({ commit }, committee) {
    commit("SET_COMMITTEE", committee)
  }
};