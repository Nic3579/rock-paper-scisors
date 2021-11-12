input.onButtonPressed(Button.A, function () {
    score_a += 1
    basic.showString("A")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    score_b += 1
    basic.showString("B")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    random_13 = randint(1, 3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (random_13 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (random_13 == 2) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let random_13 = 0
let score_a = 0
let score_b = 0
basic.forever(function () {
    if (score_a == 2) {
        basic.showString("Player A Wins:)")
        score_a = 0
        score_b = 0
    } else if (score_b == 2) {
        basic.showString("Player B Wins:)")
        score_a = 0
        score_b = 0
    }
})
