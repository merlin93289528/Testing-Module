class TRational {
    constructor(fraction) {
        if (fraction) {
            this.numerator = fraction[0]
            this.denominator = fraction[1]
            this.fractionDouble = this.numerator / this.denominator
        }
    }

    increment(num) {
        return this.fractionDouble + num
    }

    decrement(num) {
        return this.fractionDouble - num
    }

    multiply(num) {
        return this.fractionDouble * num
    }

    divide(num) {
        return this.fractionDouble / num
    }

    ToString(num = null) {
        if (num) {
            let splitFraction = num.split('/')
            this.numerator = parseInt(splitFraction[0])
            this.denominator = parseInt(splitFraction[1])
            this.fractionDouble = this.numerator / this.denominator
        } else {
            return `${this.numerator}/${this.denominator}`
        }
    }
}

module.exports = TRational