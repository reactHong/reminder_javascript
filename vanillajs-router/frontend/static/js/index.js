const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing Home") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Setting") },
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  match.route.view();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      navigateTo(e.target.href);
      e.preventDefault();
    }
  });

  router();
});

