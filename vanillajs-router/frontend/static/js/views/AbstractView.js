export default class AbstractView {
  constructor(params) {
    this.params = params;

    console.log(`[${this.constructor.name}] params: ${params}`);
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return ""
  }

}