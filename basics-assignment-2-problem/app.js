const app = Vue.createApp({
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
  methods: {
    showAlert() {
      alert("?!");
    },
    registerInput1() {
      this.input1 = event.target.value;
    },
    onEnterPressed() {
      this.input2 = event.target.value;
    },
  },
});

app.mount("#assignment");
