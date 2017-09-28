function Page () {
}

Page.prototype.open = function (path) {
    driver.url('https://www.amazon.cn' + path)
}

module.exports = new Page();