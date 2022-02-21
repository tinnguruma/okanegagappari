const app = new Vue({
  el: "#app",
  data: {
    count: 0 * 0 * 0 * 05,
    color: "red",
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1;
      if (this.color === "red") {
        this.color = "black";
      } else {
        this.color = "red";
      }
    }, 1000);
  }
})
