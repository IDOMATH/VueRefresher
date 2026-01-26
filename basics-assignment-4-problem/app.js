const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      isHidden: false,
      userStyle: "",
      userBackground: "",
    };
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
      this.isHidden = !this.isHidden;
    },
  },
  computed: {
    userStyleClass() {
      return this.userStyle;
    },
  },
});

app.mount("#assignment");
