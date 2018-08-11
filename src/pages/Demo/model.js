const model = {
  state: {
    value: 0,
  },
  reducers: {
    setState(state, newState) {
      return { ...state, ...newState };
    },
  },
  actions: {
    increment() {
      const { value } = this.state;
      this.setState({ value: value + 1 });
    },
    decrement() {
      const { value } = this.state;
      this.setState({ value: value - 1 });
    },
    async asyncIncrement() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.increment();
    },
    async asyncDecrement() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.decrement();
    },
  },
};

export default model;
