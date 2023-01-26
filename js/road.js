const gameCar = {
    name: 'Road Game',
    description: 'car game',
    version: '1.0.0',
    license: undefined,
    author: 'Bernardo',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    framesIndex: 0,
    canvasSize: { w: undefined, h: undefined },
    carPosition: { x: 197, y: 640 },
    carSize: { w: 30, h: 55 },
    obstacles: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.createObstacles()

        this.start()
    },

    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
    },

    setDimensions() {

        this.canvasSize = {
            w: 500,
            h: 700
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    createObstacles() {
        this.obstacles.push(
            new Obstacles(this.ctx, 34, 0, 150, 20, 10),
            new Obstacles(this.ctx, 306, 0, 150, 15, 12),
        )
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()

        }, 10)
    },

    setEventListeners() {
        document.onkeydown = evt => {
            if (this.carPosition.x > 34 && this.carPosition.x < 386) {
                if (evt.key === 'ArrowLeft') this.carPosition.x -= 10
                if (evt.key === 'ArrowRight') this.carPosition.x += 10
            }
        }
    },

    drawRoad() {
        this.ctx.fillStyle = '#00913f'
        this.ctx.fillRect(10, 10, 400, 700)


        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(20, 10, 380, 700)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(27, 10, 366, 700)

        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(34, 10, 352, 700)
    },

    drawLine() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 4
        this.ctx.setLineDash([30, 10])      // <-- patrón de repetición
        this.ctx.moveTo(212, 0)
        this.ctx.lineTo(212, 705)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },



    drawAll() {
        this.drawRoad()
        this.drawLine()
        this.drawCar()
        this.createObstacles()
        this.framesIndex++

        if (this.framesIndex % 100 === 0) {
            this.createObstacles()
            console.log('hola')
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    }

}
