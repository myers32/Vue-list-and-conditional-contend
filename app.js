const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputData);
      this.inputData = ""
    }
  }
});

app.mount("#assignment");