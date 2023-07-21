## Learning note
- `position: relative` will let the elements arrange themselves relative to eachother, probably in a row. Then use `float:left` to specify the direction of the alignment
- `key.black--key::after` pseudo element selector, i.e. the element that is after the key.black--key element. By default, pseudo elements do not get rendered. Hence we also need to set `content: ""` to force the render of pseudo elemtns
- media query that apply css when the viewport is of certain size
`@media (max-width: 768px)`
- to hide any elements that is pushed outside the container `overflow: hidden`