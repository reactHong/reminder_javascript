import AbstractView from "./AbstractView.js";

export default class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>Cras rhoncus finibus est ut dapibus. Nunc maximus consequat velit, vitae dictum enim ullamcorper quis. Nunc dapibus dapibus gravida. Nulla facilisi. Donec augue metus, egestas eget odio eu, eleifend dictum dolor. Curabitur sed purus sed enim pretium tempor. Donec hendrerit nisi in justo facilisis, aliquet lacinia massa cursus. Aenean dictum quis sapien non semper. Proin blandit libero aliquet convallis imperdiet. In accumsan nibh neque, nec auctor enim pulvinar eget. Sed luctus in lorem sit amet tempor. Duis interdum vel turpis a porttitor. Nunc in lectus ac turpis dapibus porta. Sed mattis venenatis libero congue tincidunt. Quisque nisl erat, eleifend ac dui at, dapibus interdum eros.</p>
    `
  }
}