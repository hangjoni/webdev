## Learning
- `<html lang="en>` this `lang` attribute declares the the language of the page and helps improve accessibility, SEO, and styling 
- `<head>` contains title of the page, meta information like utf-8 encoding, links to CSS, JS
- CSS can be written direct inside html
```
<style>
    h1, h2, p{text-align: center}
</style>
```
though the recommended way is separate it out as a .css file and reference inside the html like this
```
<head>
    <link rel="stylesheet" href="styles.css" />
</head>
```
- type selector in css `div {text-align: center;}`
- class selector in css `.class-name {width: 80%;}`
- combining class and type selector `.item p {display: inline-block;}` select element that is of type p that is nested inside an "item" class
- viewport meta attribute is useful for creating responsive design
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```