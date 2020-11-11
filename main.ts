input.onButtonPressed(Button.A, function () {
    x += 1
    if (x >= 4) {
        x = 4
    }
    basic.showNumber(x)
})
input.onButtonPressed(Button.B, function () {
    x += -1
    if (x <= 0) {
        x = 0
    }
    basic.showNumber(x)
})
let x = 0
x = 0
basic.showNumber(x)
