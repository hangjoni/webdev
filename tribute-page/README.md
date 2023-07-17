## Learning
- `max(100px, 18vw)` is a way to cap the width of some SVG element. 18vw stands for 18% of the viewport width
- `aspect-ratio: 35/4` to specify aspect ratio of an image or element
- `width: 100%` will set the element's width to 100% of its parent's width
- Use the attribute `action` and `method` to specify what happens when the form is submitted. Usually we send a post request with the data to some linke.
```
      <form action="https://freecodecamp.org/practice-project/accessibility-quiz" method="post">
      </form>
```
- `role` and `aria-labelledby` attribute help improve accessibility of a web page.
```
<section role="region" aria-labelledby="student-info"><h2 id="student-info">Student Info</h2></section>
```
- href can point to an id on the page. Clicking will kind of work highlighting the element with that id. That means id is supposed to be unique!
`<a href="#student-info">Info</a>"
- To link the label with the respective input element, use `for` and reference the `id` of the input 
```
            <label for="name">Name</label>
            <input id="name" />
```
- Surprisingly, placeholder is not recommended for accessibility as it can confuse the user for actual text
- To add text that is only available to screen reader 
`<span class="sr-only">text</span>`
and then in css file
```
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```
- giving radio buttons the same name attributes will make them acts truly as radio button whereby only one of them can be selected
- to create a dropdown selection
```
    <select required>
        <option value="">Select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
```
- `name` attribute needs to be used for form inputs as only the elements with `name` attributes are passed when submitting a form
- to set the number of rows and columns in a textarea, use "rows" and "cols" attribute `<textarea rows="10" cols="20"></textarea>"
- button for form-submit needs to have `type="submit"`
- to chain the type selector , use `>`
```
nav > li {
    contrast: 7:1
}
```