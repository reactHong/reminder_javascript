import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>Ut sollicitudin aliquet ex ac dignissim. Pellentesque elementum et quam vitae malesuada. Donec blandit diam ac semper pharetra. Nunc vel nunc molestie, tincidunt ex sed, maximus enim. Sed vitae metus aliquam, consequat tellus in, vehicula diam. Suspendisse potenti. Morbi viverra cursus vestibulum. Sed nec congue velit. Ut fermentum aliquet fermentum. Curabitur ut diam iaculis, dictum est vitae, scelerisque felis. Vestibulum massa dui, maximus quis congue nec, viverra sit amet urna. Maecenas nec accumsan orci. Vestibulum cursus est odio, et ullamcorper est porta quis. Etiam quis iaculis nunc, sit amet tempor risus. Nam eros urna, malesuada dictum convallis at, vehicula sed sem. Phasellus et mattis lacus.</p>
    `
  }
}