const router = async () => {

  const routes = [
    { route: "/", view: () => console.log("Viewing Home") },
    { route: "posts", view: () => console.log("Viewing Home") },
    { route: "/", view: () => console.log("Viewing Home") },
  ];

};





document.addEventListener("DOMContentLoaded", () => {
  router();
});

