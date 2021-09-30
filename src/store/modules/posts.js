export default {
  /**
   * Vuex использует единое дерево состояния — когда один объект содержит всё
   * глобальное состояние приложения и служит «единственным источником истины».
   * **/
  state: {
    posts: [],
  },
  /**
   * Вместо того, чтобы напрямую менять состояние, действия инициируют мутации;
   * Действия могут использоваться для асинхронных операций.
   * Действия запускаются методом store.dispatch
   **/
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      ctx.commit("updatePosts", posts);
    },
  },
  /** Единственным способом изменения состояния хранилища во Vuex являются мутации
   * Вызывать функцию-обработчик напрямую — нельзя
   * Чтобы инициировать обработку мутации, необходимо вызвать store.commit
   * обработчики мутаций обязаны быть синхронными
   * При вызове store.commit в мутацию можно также передать дополнительный параметр,
   * называемый нагрузкой (payload): store.commit('increment', 10);
   * Vuex мутации — это синхронные транзакции
   **/
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  /**
   Геттеры получают состояние хранилища первым аргументом
   Вторым аргументом передаются другие геттеры
   можно легко использовать его внутри любого компонента
   **/
  getters: {
    validPosts(state) {
      return state.posts.filter((p) => {
        return p.title && p.body;
      });
    },
    countPosts(state, getters) {
      return getters.validPosts.length;
    },
  },
};
