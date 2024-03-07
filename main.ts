let MAX = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, MAX))
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        MAX = 6
    } else if (input.buttonIsPressed(Button.B)) {
        MAX = 10
    }
})
