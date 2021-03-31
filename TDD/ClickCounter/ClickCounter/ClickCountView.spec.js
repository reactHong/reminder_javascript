describe('App.ClickCountView 모듈의', () => {
  let updateEl, clickCounter, view
  beforeEach(() => {
    clickCounter = App.ClickCounter()
    updateEl = document.createElement('span')
    view = App.ClickCountView(clickCounter, updateEl)
  })

  it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
    const clickCounter = null
    const updateEl = document.createElement('span')

    const actual = () => App.ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError()
  })

  // it('updateEl를 주입하지 않으면 에러를 던진다', () => {

  // })

  describe('updateView()는', () => {
    it('ClickCounter의 getValue() 값을 출력한다', () => {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateEl.innerHTML).toBe(counterValue.toString())
    })
  })
})