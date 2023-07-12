## Learning notes
- If the inner element push past its parent element, it will cause that parent element to shift down. So, we can add padding for the parent element. This will give the inner element something solid to push off of. Alternatively, we can set the parent to have `overflow: hidden` to force the inner element to push from the border of its parent so overflow will not affect the parent. This method has the benefit of maintaining the dimensions of the parent element to be the same.
- `margin: auto` will center the element
- the order of margin when specifying 3 values is top horizontal bottom
`margin: 0 auto 20px;`
- `filter: blur(2px)` creates a nice blur effect
- `transform: rotate(-0.6deg)` will rotate the element