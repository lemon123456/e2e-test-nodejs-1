"use strict";
class Page {
    constructor(){
    }

    open(path){
        driver.url('https://www.amazon.cn' + path)
    }

}

module.exports = new Page();