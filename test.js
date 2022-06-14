let packages = [
    {
        "name": "test",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
    },
    {
        "name": "test2",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
    }
]


let data = {
    packages: packages.map((pkg) => {
        return `<li><div>
            <h1>${pkg.name}</h1>
            <h2>${pkg.version}</h2>
            <h3>${pkg.description}</h3>
            </div></li>`
    })
}



let style = {
    ".app": {
        "background-size": 'cover',                 
        "background": 'blue',
        "background-repeat": "no-repeat",
        "background-position": "center center",
    }
}

module.exports = {
    style,
    data   
}