input.onButtonPressed(Button.A, function () {
    a = a * 2
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    a = a + 2
})
let a = 0
a = 0
basic.forever(function () {
    if (a >= 20) {
        a = 0
    }
})
