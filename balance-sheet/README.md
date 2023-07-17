## Learning Notes
- to hide an element from screen readers use `aria-hidden="true"`
- Selector:
to select element that contain a certain class `span[class~="sr-only"]`. The opposite of it is `span:not(.sr-only)`
to select first element of that type `.flex span:first-of-type`
to select the nth element of that type `tr.total td:nth-of-type(3)`
to select element where an attribute is defined regardless of its value `span[class]`
subtle differenct: 
`tr[class="total"]` selects only tr elements where total is the only class defined
`tr[class~="total"]` selects elements where total is one of the value in class. this works the same as `tr.total`
`tr .total` selects child element of tr that has the class total
- `clip-path: circle(40%);` is pretty cool. More shapes are available, check mozilla web docs!
`clip-path: inset(50%)` will hide the element 
- to create gap between elements contained in a flexbox, use `gap: 1rem`
- em vs rem: em refer to size of the parent element rem refers to size of the root element
- when specifying 4 properties the order is counter-clockwise: top, right, bottom, left. `padding: 0.5rem calc(1.25rem + 2px) 0.5rem 0;`
- `z-index` determines which element will go on top in case they cover each other
- to ensure that a rule always apply regardless of order and spcificity and do not get overritten , add `!important` to the CSS value. This is needed because by right the rule defined later will have precedent over earlier defined rules