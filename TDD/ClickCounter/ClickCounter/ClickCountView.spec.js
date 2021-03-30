describe('App.ClickCountView 모듈의', () => {
  let updateEl, clickCounter, view
  beforeEach(() => {
    clickCounter = App.ClickCounter()
    updateEl = document.createElement('span')
    view = App.ClickCountView(clickCounter, updateEl)

    console.log(view);
  })
  describe('updateView()는', () => {
    it('ClickCounter의 getValue() 값을 출력한다', () => {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateEl.innerHTML).toBe(counterValue.toString())
    })
  })
})