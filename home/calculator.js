class Calculator{
    constructor(operent1TextElement,operent2TextElement){
        this.operent2TextElement = operent2TextElement
        this.operent1TextElement = operent1TextElement
        this.clear()
    }
    clear(){
        this.operent2 = ','
        this.operent1 = ''
        this.operation = undefined

    }
    delete(){
        this.operent1 = this.operent1.toString().slice(0,-1)
        this.operent2 = this.operent2.toString().slice(0,-1)

    }
    apperndnumber(number) {
        if (number === '.' && this.operent1.includes('.')) return
        this.operent1 = this.operent1.toString() + number.toString()
      }
    Operation(operation){
        if(this.operent1 === '')return
        if(this.operent2 !== ''){
            this.compute()
        }
        this.operation = operation
        this.operent2 = this.operent1
        this.operent1 = ''

    }
    compute(){
        let computation 
        const prev = parseFloat(this.operent2)
        const current = parseFloat(this.operent1)
        if(isNaN(prev) || isNaN(current))return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '✖':
                computation = prev * current
                break

            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.operent1 = computation
        this.operation = undefined
        this.operent2 = ''

    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }
    
    updatedisplai(){
        this.operent1TextElement.innerText = this.operent1 
        if(this.operation != null)  {
            this.operent2TextElement.innerText = 
                `${this.operent2} ${this.operation}`
        }else {
            this.operent2TextElement.innerText = ''
          }
    }
}


const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const eaqulsbuttons = document.querySelector('[data-eaquls]')
const delbuttons = document.querySelector('[data-del]')
const acbuttons = document.querySelector('[data-ac]')
const operent1TextElement = document.querySelector('[data-operent1]')
const operent2TextElement = document.querySelector('[data-operent2]')

const calculator = new Calculator(operent2TextElement,operent1TextElement);

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.apperndnumber(button.innerText)
        calculator.updatedisplai()
    })
})
operationbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.Operation(button.innerText)
        calculator.updatedisplai()
    })
})

eaqulsbuttons.addEventListener('click', button =>{
    calculator.compute()
    calculator.updatedisplai()
})
acbuttons.addEventListener('click', button =>{
    calculator.clear()
    calculator.updatedisplai()
})
delbuttons.addEventListener('click', button =>{
    calculator.delete()
    calculator.updatedisplai()
})