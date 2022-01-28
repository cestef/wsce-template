module.exports = {
    scraper: {
        urls: ["https://cstef.dev"],
        puppeteerOptions: {},
        addons: [],
        lighthouse: false,
        interval: 60_000,
    },
    exporter: {
        port: 3001,
    },
};
