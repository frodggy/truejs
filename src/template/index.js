const { readFileSync, writeFileSync } = require('fs');

const styleToString = (style) => {
    return Object.keys(style).reduce((acc, key) => (
        acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
    ), '');
};

function ttl(template, data, style) {
    let preTemplate = `<!DOCTYPE html><html lang="en">${template}</html>`;
    let t = preTemplate.replace(/@\{(.*?)\}/g, function (match, key) {
        return data[key];
    });
    let t2 = t.replace('true-view', 'div'); // <true-view> -> <div>
    let t3 = t2.replace('/true-view', '/div');
    let t4 = t3.replace('true-script', 'script');   // <true-script> -> <script>
    let t5 = t4.replace('/true-script', '/script');
    let t6 = t5.replace('true-css', 'style');   // <true-style> -> <style>
    let t7 = t6.replace('/true-css', '/style');
    let t8 = t7.replace('@style', `{${styleToString(style)}}`);
    let newTemplate = t8;
    return newTemplate
}

writeFileSync('./index.html', ttl(readFileSync('./test.html', 'utf8'), require('../../test.js').data, require('../../test.js').style))