var Star = function (x, y, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.vx = -1;
    this.raduis = 1;
    this.color = color || color;
    this.draw = function (context) {
        context.restore();
        context.beginPath();
        context.arc(this.x, this.y, this.raduis, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.fill();
        context.save();
    }
}
var BgStarts = function (num) {
    this.stars = [];
    this.starsNum = num || 20;
    this.generate = function () {
        this.stars = [];
        for (let i = 0; i < this.starsNum; i++) {
            let s = new Star(utils.ranInt(canvas.clientWidth), utils.ranInt(canvas.clientHeight), utils.ranColor());
            s.raduis = utils.ranInt(2) + 1;
            s.vx = -utils.ranInt(2) - 1;
            this.stars.push(s);
        }
    };
    this.draw = function (context) {
        for (var s of this.stars) {
            s.x += s.vx;
            if (s.x < 0) {
                s.x = canvas.clientWidth + utils.ranInt(20); //加个扰动因子，要么太枯燥了
                s.y = utils.ranInt(canvas.clientHeight);//同理，这样还能增加层次感
            }
            s.draw(context);
        }
    };
}