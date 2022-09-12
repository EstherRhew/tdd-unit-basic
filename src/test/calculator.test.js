const Calculator = require('../calculator')


//관련된 test를 묶어서 실행할수잇는 describe
//각각의 Test가 독립적으로 실행되야 하기 때문에  Calculator object생성은 각 test안에서 해야한다
describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator()
  })

  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  })

  it('clear', () => {
    cal.set(9);
    cal.clear()
    expect(cal.value).toBe(0);
  })

  it('adds', () => {
    cal.set(9);
    cal.add(1)
    expect(cal.value).toBe(10);
  })

  it('substracts', () => {
    cal.subtract(1)
    expect(cal.value).toBe(-1);
  })

  it('multiplies', () => {
    cal.set(2)
    cal.multiply(2)
    expect(cal.value).toBe(4);
  })

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN)
    })

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity)
    })

    it('8 / 4 === 2', () => {
      cal.set(8)
      cal.divide(4)
      expect(cal.value).toBe(2);
    })
  });


});


// const calculator = new Calculator();
//
// test('set', () => {
//   calculator.set(5)
//   expect(calculator.value).toBe(5)
// })
//
// test('clear', () => {
//   calculator.clear();
//   expect(calculator.value).toBe(0)
// })
//
// test('calculate', () => {
//   calculator.add(3)
//   calculator.subtract(1)
//   calculator.multiply(2)
//   calculator.divide(4)
//   expect(calculator.value).toBe(1)
// })
//
// test('add limit', () => {
//   // calculator.add(200);
//   expect(() => calculator.add(200)).toThrow(Error)
// })

// test('subtract', () => {
//   calculator.subtract(10)
//   expect(calculator.value).toBe(-10)
// })
//
// test('multiply', () => {
//   calculator.multi
// })