basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
})
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
})
