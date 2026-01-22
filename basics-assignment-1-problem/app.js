const app = Vue.createApp({
  data() {
    return {
      name: "Blane",
      age: 29,
      num: Math.random(),
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQGOAXUT8GWKWA/profile-framedphoto-shrink_400_400/B56ZrqbmGJHYAc-/0/1764869694104?e=1769616000&v=beta&t=qKxHN4iDTVd7OqIvqGntbUMmnIZukDS0E_oUePuHTTI",
      textInput: "Blane",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
