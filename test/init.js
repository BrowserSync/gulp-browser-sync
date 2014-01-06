var assert = require("chai").assert;
var sinon = require("sinon");
var gulpBrowserSync = require("../index");
var defaultConfig = require("../lib/default-config");
var browserSync = require("browser-sync");

describe("Browser-sync init", function () {
    var initStub;
    before(function () {
        initStub = sinon.stub(browserSync.setup, "kickoff");
    });
    afterEach(function () {
        initStub.reset();
    });
    after(function () {
        initStub.restore();
    });
    it("should run with no options provided", function () {
        gulpBrowserSync();
        sinon.assert.calledWithExactly(initStub, [], defaultConfig);
    });
    it("should override default options with user-provided options", function () {
        var optionsArg;
        var options = {
            server: {
                baseDir: "./"
            }
        };

        // run the plugin
        gulpBrowserSync(null, options);

        // get the options arg
        optionsArg = initStub.getCall(0).args[1];

        assert.equal(optionsArg.server.baseDir, "./");
    });
    it("should run with no options provided", function () {

        var optionsArg;
        var options = {
            proxy: {
                host: "172.2.2.2",
                port: 8000
            }
        };

        // Run the plugin
        gulpBrowserSync(null, options);

        // Get the options arg
        optionsArg = initStub.getCall(0).args[1];

        assert.equal(optionsArg.proxy.host, "172.2.2.2");
        assert.equal(optionsArg.proxy.port, "8000");
    });

    it("should accept a string as a file pattern", function () {
        var filesArg;
        gulpBrowserSync("**/*.css");
        filesArg = initStub.getCall(0).args[0];
        assert.equal(filesArg[0], "**/*.css");
    });

    it("should accept an array of patterns", function () {
        var filesArg;
        gulpBrowserSync(["*.css", "*.html"]);
        filesArg = initStub.getCall(0).args[0];
        assert.equal(filesArg[0], ["*.css"]);
        assert.equal(filesArg[1], ["*.html"]);
    });
});
