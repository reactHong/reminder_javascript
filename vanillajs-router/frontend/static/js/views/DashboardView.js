import AbstractView from "./AbstractView.js";

export default class DashboardView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back, Hong</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius et ipsum id consequat. Nulla ac porttitor leo. Duis commodo sed augue et gravida. Proin vulputate tincidunt enim nec pulvinar. Donec quis diam nec turpis hendrerit semper. Suspendisse at nibh mi. Suspendisse sollicitudin tincidunt porttitor. Donec venenatis tempor aliquet. Mauris consectetur, nisl vitae porta posuere, tellus magna finibus massa, ac laoreet nisi metus et tellus. Morbi dictum gravida nisl, vel mollis metus finibus laoreet.</p>
      <p><a href="/posts" data-link>View recent posts</a>.</p>
    `
  }
}