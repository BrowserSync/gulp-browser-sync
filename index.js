var browserSync  = require("browser-sync");
var _ = require("lodash");
var defaultOptions = require("./lib/default-config");

/**
 * @param {String|Array} filePatterns
 * @param {Object} userOptions
 */
module.exports = function(filePatterns, userOptions) {

    var options = defaultOptions;

    if (userOptions) {
        options = _.merge(defaultOptions, userOptions);
    }

    if (filePatterns) {
        if (typeof filePatterns === "string") {
            filePatterns = [filePatterns];
        }
    } else {
        filePatterns = [];
    }

    browserSync.setup.kickoff(filePatterns, options);
};
