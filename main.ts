/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program shows a while loop use perimeter
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Happy)

// the clockwise perimeter movement
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter < 4) {
        basic.pause(500)
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.X, loopCounter)
    }

    loopCounter = 0
    while (loopCounter < 4) {
        basic.pause(500)
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
    }

    loopCounter = 4
    while (loopCounter > 0) {
        basic.pause(500)
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.X, loopCounter)
    }

    loopCounter = 4
    while (loopCounter > 0) {
        basic.pause(500)
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// the clockwise perimeter movement counter clockwise
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter < 4) {
        basic.pause(500)
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
    }

    loopCounter = 0
    while (loopCounter < 4) {
        basic.pause(500)
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.X, loopCounter)
    }

    loopCounter = 4
    while (loopCounter > 0) {
        basic.pause(500)
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
    }

    loopCounter = 4
    while (loopCounter > 0) {
        basic.pause(500)
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.X, loopCounter)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})