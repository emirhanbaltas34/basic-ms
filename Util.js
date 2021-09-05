const ErrorManager = require("./ErrorManager");

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mo = w * 4;
const y = d * 365.25;

/**
 *
 * @class
 */
class Util {
    /**
     *
     * @param {string} time
     * @returns {number}
     */
    static TimeToMilliseconds(time) {
        if (!this.isTimeExists(time))
            throw new ErrorManager("Invalid arguments! (s, m, h, d, w, mo, y)");

        if (time.endsWith("s")) {
            return Math.round(time.split("s")[0]) * s;
        } else if (time.endsWith("mo")) {
            return Math.round(time.split("mo")[0]) * mo;
        } else if (time.endsWith("m")) {
            return Math.round(time.split("m")[0]) * m;
        } else if (time.endsWith("h")) {
            return Math.round(time.split("h")[0]) * h;
        } else if (time.endsWith("d")) {
            return Math.round(time.split("d")[0]) * d;
        } else if (time.endsWith("w")) {
            return Math.round(time.split("w")[0]) * w;
        } else if (time.endsWith("y")) {
            return Math.round(time.split("y")[0]) * y;
        }
    }

    /**
     *
     * @param {number} milliseconds
     * @param {boolean} long
     * @returns {string}
     */
    static MillisecondsToTime(milliseconds, long = false) {
        const parsedMilliseconds = this.parseMilliseconds(milliseconds);
        if (long === true) {
            if (parsedMilliseconds >= y) {
                return Math.round((milliseconds /= y)) + "years";
            }
            if (parsedMilliseconds >= mo) {
                return Math.round((milliseconds /= mo)) + "months";
            }
            if (parsedMilliseconds >= w) {
                return Math.round((milliseconds /= w)) + "weeks";
            }
            if (parsedMilliseconds >= d) {
                return Math.round((milliseconds /= d)) + "days";
            }
            if (parsedMilliseconds >= h) {
                return Math.round((milliseconds /= h)) + "hours";
            }
            if (parsedMilliseconds >= m) {
                return Math.round((milliseconds /= m)) + "minutes";
            }
            if (parsedMilliseconds >= s) {
                return Math.round((milliseconds /= s)) + "seconds";
            } else return milliseconds + "milliseconds";
        } else if (long === false) {
            if (parsedMilliseconds >= y) {
                return Math.round((milliseconds /= y)) + "y";
            }
            if (parsedMilliseconds >= mo) {
                return Math.round((milliseconds /= mo)) + "m";
            }
            if (parsedMilliseconds >= w) {
                return Math.round((milliseconds /= w)) + "w";
            }
            if (parsedMilliseconds >= d) {
                return Math.round((milliseconds /= d)) + "d";
            }
            if (parsedMilliseconds >= h) {
                return Math.round((milliseconds /= h)) + "h";
            }
            if (parsedMilliseconds >= m) {
                return Math.round((milliseconds /= m)) + "m";
            }
            if (parsedMilliseconds >= s) {
                return Math.round((milliseconds /= s)) + "s";
            } else return milliseconds + "ms";
        } else return milliseconds + "ms";
    }

    /**
     *
     * @param {string} time
     * @returns {boolean}
     */
    static isTimeExists(time) {
        const args = ["s", "m", "h", "d", "w", "mo", "y"]
        for(let arg of args){
            if(time.endsWith(arg)) return true;
            else return false;
        }
    }

    /**
     * 
     * @param {number} milliseconds 
     * @returns {number}
     */
    static parseMilliseconds(milliseconds) {
        return Math.abs(milliseconds);
    }
}

module.exports = Util;
