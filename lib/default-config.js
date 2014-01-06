module.exports = {
    debugInfo: true,
    background: false,
    reloadFileTypes: ["php", "html", "js", "erb"],
    injectFileTypes: ["css", "png", "jpg", "svg", "gif"],
    host: null,
    ghostMode: {
        clickedLinks: false,
        clicks: true,
        links: true,
        forms: true,
        scroll: true
    },
    server: false,
    proxy: false,
    open: true,
    notify: true
};