input.onButtonPressed(Button.A, function () {
    Draw_1_card()
})
function Draw_1_card () {
    if (randint(1, 13) >= 10) {
        Number2 += 10
    } else {
        Number2 += randint(1, 9)
    }
    if (Number2 > 21) {
        for (let index = 0; index < 10; index++) {
            basic.showString("BUST")
            basic.showNumber(Number2)
        }
    }
}
function Draw_2_cards_at_the_start () {
    for (let index = 0; index < 2; index++) {
        if (randint(1, 13) >= 10) {
            Number2 += 10
        } else {
            Number2 += randint(1, 9)
        }
    }
    basic.showNumber(Number2)
    if (Number2 == 2) {
        basic.showString("BLACKJACK!")
    }
}
let Number2 = 0
basic.showNumber(0)
basic.pause(2500)
Number2 = 0
Draw_2_cards_at_the_start()
basic.forever(function () {
    basic.showNumber(Number2)
    basic.pause(1500)
})
