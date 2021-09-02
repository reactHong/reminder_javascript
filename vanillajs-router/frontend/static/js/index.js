import DashboardView from "./views/DashboardView.js";
import PostsView from "./views/PostsView.js";
import PostView from "./views/PostView.js";
import ReplyView from "./views/ReplyView.js";
import SettingsView from "./views/SettingsView.js";
                          
// "/posts/:id" -> /^\/posts\/(.+)$/
const pathToRegex = (path) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  
  console.log("[getParams] match:", match);

  // "/posts/:id/:replyid" -> /\/:(\w+)/g -> [id, replyid]
  const keys = Array.from(match.route.path.matchAll(/\/:(\w+)/g), element => element[1]);
  const values = match.result.slice(1);
  //const [first, ...values] = match.result;

  console.log("[getParams] keys:", keys);
  console.log("[getParams] value:", values);

  // Sample: return { id: 2, replyid: 4 }
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// Do Routing pages according to URL(location.pathname)
const router = async () => {

  console.log(location.pathname.match(pathToRegex("/posts/:id")));

  const routes = [
    { path: "/", view: DashboardView },
    { path: "/posts", view: PostsView },
    { path: "/posts/:id/:replyid", view: ReplyView },
    { path: "/posts/:id", view: PostView },
    { path: "/settings", view: SettingsView },
  ];
  
  // Find a matched view with current path(location.path)
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      // "/posts/2".match(/^\/posts\/(.+)$/)
      result: location.pathname.match(pathToRegex(route.path)),
    }
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    }
  }

  const params = getParams(match);
  const view = new match.route.view(params);
  console.log(`[router] ${view.constructor.name} params:`, params);
  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      navigateTo(e.target.href);
      e.preventDefault();
    }
  });

  console.log(`DOMContentLoaded! - ${location.pathname}`);
  router();
});

