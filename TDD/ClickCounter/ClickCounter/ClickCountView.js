var App = App || {}

App.ClickCountView = (clickCounter, updateEl) => {
  if (!clickCounter) throw Error("Error: ClickCounter is null!")
  if (!updateEl) throw Error("Error: updateEl is null!")

  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue()
    },
    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
}