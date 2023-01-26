class Obstacles {
    constructor(ctx, obstaclesX, obstaclesY, obstaclesW, obstaclesH, obstaclesSpeed) {
        this.ctx = ctx
        this.obstaclesX = obstaclesX
        this.obstaclesY = obstaclesY
        this.obstaclesSize = {
            w: obstaclesW,
            h: obstaclesH

        }


        this.obstaclesSpeed = obstaclesSpeed
    }


    move() {
        this.obstaclesY += this.obstaclesSpeed
    }

    drawObstacle() {
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclesX, this.obstaclesY, this.obstaclesSize.w, this.obstaclesSize.h)

    }

}


