var App = App || {}

App.ClickCountView = (clickCounter, updateEl) => {
  if (!clickCounter) throw Error("Error: ClickCounter is null!")

  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue()
    }
  }
}