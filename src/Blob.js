

class Blob extends Ennemy {

    constructor( game ){
        super( game )
        this.speed = 3
    }

    step(){
        super.step()
        const angle = degrees(
            atan2(
                this.game.player.y - this.y,
                this.game.player.x - this.x
            ) + PI
        )
        const speedX = this.speed * cos(radians(angle))
        const speedY = this.speed * sin(radians(angle))
        this.move(
            speedX * -2,
            speedY * -2
        )
    }

    draw(){
        fill(255,255,0)
        super.draw()
        fill(0)
        textAlign(CENTER,CENTER)
        textSize(30)
        text(this.gain, this.x, this.y)
    }

}