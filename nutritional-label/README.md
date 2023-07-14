## Learning notes
- `font-family: "Open Sans", sans-serif` will use the Open Sans font by default and fall back to sans-serif
- when inspecting an element, hover over its html line will show the actual dimension of the element
- Adjust the degree of bold text with `font-weight`
- Adjust spacing between text with `letter-spacing`
- `rem` stands for root em. It defines text size in relation to the font size of the html element.
- use `:not` pseudo selector to exclude the elements with that condition. For example the below means: the div that does not contain the example id
```
div:not(#example) {
  color: red;
}
```