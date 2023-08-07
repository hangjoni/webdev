# Learning notes
- `height: 100vh` to set content to the whole view port. This will make the body element fill the whole page.
- `overflow: hidden` to hide scroll bars that appear when something extends past the viewport
- CSS variable. This is how to define 
```.bb1 {
    --building-color: #999;
}```
and how to use it
```
.bb1a {
    background-color: var(--building-color)
}
```
When using css variable, we can provide a fallback value `var(--building-color, green)`
- CSS variable has the scope of the element where it is defined and its children. That's why people tend to define CSS variable in the root element
```
:root {
    --building-color1: #aa80ff;
}
```
- color gradient: it is possible to use multiple colors and also specify how long the gradient is
```
linear-gradient(
    orange,
    var(--building-color1) 80%,
    var(--window-color1)
);
```
or this to make the color solid on the top half
```
linear-gradient(
    var(--building-color1) 50%,
    var(--window-color1)
);
```
- Repeating gradient will create a pattern that repeats until the end of the element
```
repeating-linear-gradient(
      var(--building-color2),
      var(--building-color2) 6%,
      var(--window-color2) 6%,
      var(--window-color2) 9%
    );
```
- Building shapes with borders. Leaving the element size to be zero, while defining it's borders will create lines that connect the borders to the 0px dot that is the element. This is the way to create shapes like triangle in CSS
- `7vw` is 7% of the viewport width, meaning it's independent of the parent's dimensions
- gradient only works with css `background` property, but not the `background-color` property
- use `radial-gradient` to create a circular shape with gradient color. adjust its position with `circle closest-corner at 15% 15%`
