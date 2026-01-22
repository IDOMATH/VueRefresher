const app = Vue.createApp({
  data() {
    return {
      courseGoal: "<h1>Finish the course and learn Vue<h1>",
      courseGoalA: "Learn Vue",
      courseGoalB: "Master Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    outputHtmlGoal() {
      return this.courseGoal;
    },
  },
});

app.mount("#user-goal");
