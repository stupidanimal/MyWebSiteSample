utils = {
    ranColor: function () {
        return "rgb(" + this.ranNum(255) + "," + this.ranNum(255) + "," + this.ranNum(255) + ")";
    },
    ranInt: function (base) {
        base = base || 100;
        return Math.floor(Math.random() * base);
    }
}