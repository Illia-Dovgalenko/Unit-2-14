/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program shows a while loop use perimeter
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let timeoute = 500

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// A - the clockwise perimeter movement
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter <= 4) {
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.X, loopCounter)
        basic.pause(timeoute)
    }

    loopCounter = 0
    while (loopCounter <= 4) {
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(timeoute)
        
    }

    loopCounter = 4
    while (loopCounter >= 0) {
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.X, loopCounter)
        basic.pause(timeoute)
    }

    loopCounter = 4
    while (loopCounter >= 0) {
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(timeoute)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// B - counter clockwise perimeter movement
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter <= 4) {
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(timeoute)
    }

    loopCounter = 0
    while (loopCounter <= 4) {
        loopCounter = loopCounter + 1
        sprite.set(LedSpriteProperty.X, loopCounter)
        basic.pause(timeoute)
    }

    loopCounter = 4
    while (loopCounter >= 0) {
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(timeoute)
    }

    loopCounter = 4
    while (loopCounter >= 0) {
        loopCounter = loopCounter - 1
        sprite.set(LedSpriteProperty.X, loopCounter)
        basic.pause(timeoute)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})