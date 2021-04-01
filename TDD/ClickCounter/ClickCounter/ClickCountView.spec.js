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

  it('updateEl를 주입하지 않으면 에러를 던진다', () => {
    const clickCounter = App.ClickCounter()
    const updateEl = null

    const actual = () => App.ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError()
  })

  describe('updateView()는', () => {
    it('ClickCounter의 getValue() 값을 출력한다', () => {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateEl.innerHTML).toBe(counterValue.toString())
    })
  })

  describe('increaseAndUpdateView()는', () => {
    it('ClickCounter의 increase를 실행한다', () => {
      spyOn(clickCounter, 'increase')
      view.increaseAndUpdateView()
      expect(clickCounter.increase).toHaveBeenCalled()
    })

    it('updateView를 실행한다', () => {
      spyOn(view, 'updateView')
      view.increaseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })
})