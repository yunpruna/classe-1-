let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 . . . . . . . . 9 . . . . 
    . . 9 . . . . . . . . 9 9 . . . 
    . . 9 . . . . . . . . . 9 . . . 
    . . 9 . . . . . . . . . 9 . . . 
    . . 9 . . . . . . . . . 9 . . . 
    . . 9 9 . . . . . . . 9 9 . . . 
    . . . 9 9 9 9 9 9 . 9 9 . . . . 
    . . . . . . . . 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.gameOver(false)
