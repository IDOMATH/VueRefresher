const app = Vue.createApp({
  data() {
    return { tasks: [], taskInput: "", shouldShow: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleList() {
      this.shouldShow = !this.shouldShow;
    },
  },
  computed: {
    toggleListButtonText() {
      if (this.shouldShow) {
        return "Hide";
      }
      return "Show";
    },
  },
});

app.mount("#assignment");
