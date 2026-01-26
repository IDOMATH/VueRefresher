const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      userStyle: "",
      userBackground: "",
    };
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userStyle === "user1",
        user2: this.userStyle === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
    userStyleClass() {
      return this.userStyle;
    },
  },
});

app.mount("#assignment");
