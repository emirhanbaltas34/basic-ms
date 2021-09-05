const ErrorManager = require("./ErrorManager");
const Util = require("./Util");

/**
 *
 * @param {string | number} time
 * @param {{ long: boolean }} _options
 * @returns {string | number}
 */
module.exports = function NodeMS(time, _options = { long: false }) {
    if (time === null || time === undefined) throw new ErrorManager("You must specify a time!");

    switch (typeof time) {
        case "string":
            return Util.TimeToMilliseconds(time);
            break;
        case "number":
            return Util.MillisecondsToTime(time, _options.long);
            break;
        default:
            throw new ErrorManager("Unknown time type! (string, number)");
    }
};
