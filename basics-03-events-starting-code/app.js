const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Blane",
      lastName: "Tschida",
      // fullName: "",
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
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      return this.name + " " + "Tschida";
    },
  },
  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(val) {
      if (val > 50) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
