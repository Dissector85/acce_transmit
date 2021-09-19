radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Strength))
})
