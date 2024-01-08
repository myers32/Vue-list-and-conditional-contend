const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      tasks: [],
      taskListIsVisible: true
    };
  },
  computed: {
    buttoCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    }
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