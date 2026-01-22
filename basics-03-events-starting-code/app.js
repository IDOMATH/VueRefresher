const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Blane",
      confirmedName: "",
    };
  },
  methods: {
    onClickedAdd(num) {
      this.counter = this.counter + num;
    },
    onClickedRemove(num) {
      this.counter = this.counter - num;
    },
    setName(event, name) {
      this.name = name;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
  },
});

app.mount("#events");
