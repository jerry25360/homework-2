input.onButtonPressed(Button.A, function () {
    _1 = randint(1, 6)
    if (_1 == 1) {
        basic.showIcon(IconNames.Heart)
        game.addScore(-20)
    }
    if (_1 == 2) {
        basic.showIcon(IconNames.Heart)
        game.addScore(-10)
    }
    if (_1 == 3) {
        basic.showIcon(IconNames.Heart)
        game.addScore(-5)
    }
    if (_1 == 4) {
        basic.showIcon(IconNames.Heart)
        game.addScore(10)
    }
    if (_1 == 5) {
        basic.showIcon(IconNames.Heart)
        game.addScore(15)
    }
    if (_1 == 6) {
        basic.showIcon(IconNames.Heart)
        game.addScore(20)
    }
    if (game.score() > 60) {
        game.gameOver()
    }
})
let _1 = 0
basic.showString("who will pay")
basic.forever(function () {
    basic.showNumber(game.score())
})
