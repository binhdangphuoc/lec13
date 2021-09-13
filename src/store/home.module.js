import { FETCH_ARTICLES } from "./actions.type";
import ArticlesService from "../common/articles.service";
import { SET_ERRORS, SET_ARTICLES, SET_ARTICLES_COUNT } from "./mutations.type";

const state = {
  articles: [],
  articlesCount: 0,
  tags: [],
  errors: null,
};

const getters = {};

const actions = {
  async [FETCH_ARTICLES]({ commit }, { type, ...payload }) {
    try {
      const { data } = await ArticlesService.query(type, payload);
      const { articles, articlesCount } = data;
      commit(SET_ARTICLES, articles);
      commit(SET_ARTICLES_COUNT, articlesCount);
    } catch (err) {
      commit(SET_ERRORS, err.response.data.errors);
    }
  },
};

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_ARTICLES_COUNT](state, articlesCount) {
    state.articlesCount = articlesCount;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
