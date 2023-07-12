## Day 5
- `<header></header>` tag is used to store navigational elements of the page
- `box-sizing: border-box` will calculate the size of the element box to be the size of the border. Else the specified size of the element applies to the content-box. Hence the element box might be bigger than specified when the element comes with border and padding.
- `width: 100%; max-width: 350px;` will ask the element to occupy 100% width of its parent or 350px whichever is smaller.
- The default margin for elements depend on the browser. Hence it is a common practice to normalize the margin with `* {margin: 0}` or with framework like Normalize.css
- `text-transform: uppercase` is useful for changing the case of text without retyping
- Flexbox is a one-dimensional CSS layout that control the way items are spaced out and aligned within a container
```
.gallery {
    display: flex;
    flex-direction: row
}
```
`flex-wrap: wrap` will let items wrap to the next row or column as needed. Otherwise default to `nowrap`
`flex-direction`: row, row-reverse, column, column-reverse
`justify-content` determines how the items inside a flex container are positioned long the main axis, affecting their position and the space around them
`align-items` determines how items are positioned along the cross axis.
`gap: 16px` will create gutters between rows and comumns inside flexbox
creating a fake last element will ensure the last image will not appear in the middle of the container (following the `justify-content: center`). For example
```
.gallery::after {
    content: "";
    width: 350px;
}
```
`align-content` vs `align-items`: align the rows in the container vs align the items in that container
- For the items that belong to the flexbox:
`object-fit: cover` will let the image fill the container while maintaining its aspect ratio, resulting in croppoing to fit
`align-self: end` similar to align-items but only for that item
`order: -1` change the relative order of that particular itme