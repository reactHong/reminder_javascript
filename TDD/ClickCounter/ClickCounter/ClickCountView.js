var App = App || {}

App.ClickCountView = (clickCounter, updateEl) => {
  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue()
    }
  }
}