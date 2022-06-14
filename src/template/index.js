const styleToString = (style) => {
    const selectors = Object.keys(style)
    return selectors.map((selector) => {
      const definition = style[selector]
      const rules = Object.keys(definition)
      const result = rules.map((rule) => {
        return `${rule}:${definition[rule]}`
      }).join(';')
      return `${selector}{${result}}`
    }).join('\n')
};

function ttl(template, data, style) {
    let preTemplate = `<!DOCTYPE html><html>${template}<html/>`;
    let t = preTemplate.replace(/@\{(.*?)\}/g, function (match, key) {
        return data[key];
    });
    let newTemplate = t.replace('true-view', 'div')
        .replace('/true-view', '/div')
        .replace('true-script', 'script')
        .replace('/true-script', '/script')
        .replace('true-css', 'style')
        .replace('/true-css', '/style')
        .replace('@styles', styleToString(style))
        .replace('true-app', 'body')
        .replace('/true-app', '/body')
    return newTemplate
}

function rawTtl(template, data, style) {
    let t = template.replace(/@\{(.*?)\}/g, function (match, key) {
        return data[key];
    });
    let newTemplate = t.replace('true-view', 'div')
        .replace('/true-view', '/div')
        .replace('true-script', 'script')
        .replace('/true-script', '/script')
        .replace('true-css', 'style')
        .replace('/true-css', '/style')
        .replace('@styles', styleToString(style))
        .replace('true-app', 'body')
        .replace('/true-app', '/body')
        .replace('true-component', 'div')
        .replace('/true-component', '/dev')
    return newTemplate
}


module.exports = {
  ttl,
  rawTtl,
  styleToString
}