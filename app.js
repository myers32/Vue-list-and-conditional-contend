const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      tasks: [],
      taskListIsVisible: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputData);
      this.inputData = ""
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    }
  }
});

app.mount("#assignment");