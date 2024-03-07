input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, MAX))
})
let MAX = 0
MAX = 6
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        MAX = 6
    } else if (input.buttonIsPressed(Button.B)) {
        MAX = 10
    }
})
