var App = App || {}

App.ClickCountView = (clickCounter, options) => {
  if (!clickCounter) throw Error("Error: ClickCounter is null!")
  if (!options.updateEl) throw Error("Error: updateEl is null!")

  const view = {
    updateView() {
      options.updateEl.innerHTML = clickCounter.getValue()
    },
    increaseAndUpdateView() {
      clickCounter.count()
      this.updateView()
    }
  }

  options.triggerEl.addEventListener('click', () => {
    view.increaseAndUpdateView()
  })

  return view
}