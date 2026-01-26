const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(n) {
      this.counter += n;
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not enough";
      } else if (this.counter === 37) {
        return "37";
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    counter(val) {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
