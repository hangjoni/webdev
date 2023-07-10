# Status
Share project
- [x]  demo page
- [x]  github repo
- [ ]  blog post

#100daysofcode :

- [x]  tweet
- [ ]  respond to 2 tweets

Freecodecamp forum

- [ ]  post my progress
- [ ]  help out another post
## Learning Notes
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
- It's a good idea to combine the `width` attribute with a `max-width` attribute so that on wide screen texts do not appear too far apart
- `padding` define an internal distance from the border of the element to elements inside of it
- `<hr>` element to display divider between sections of content
- pseudo selector, use this to specify property of a link that has been visited, hover on, or clicked
```
a:visited {
    color: grey;
}
a:hover {
    color: brown;
}
a:active {
    color: white;
}
```