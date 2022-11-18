input.onPinPressed(TouchPin.P0, function () {
	
})
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("M", 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("M", 2)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("M", 3)
    } else if (!(input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
        radio.sendValue("M", 0)
    }
    radio.sendValue("S", pins.analogReadPin(AnalogPin.P1))
})
