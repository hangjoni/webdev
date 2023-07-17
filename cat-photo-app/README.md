## Status
Share project
- [x]  demo page
- [x]  github repo
- [ ]  blog post

#100daysofcode :

- [x]  tweet
- [x]  respond to 2 tweets

Freecodecamp forum

- [x]  post my progress
- [x]  help out another post
## Learning notes

- basic html file is wrapped inside a `html` tag, and the main content inside the `body` tag inside that html
- It’s convenient to have the html showing when you are developing it. Simply open web browser ⇒ choose ‘Open File’ ⇒ choose the .html file you are working on
- Learning keyboard shortcuts for your web browser is time saving for web development. I’m using Safari
    - `cmd R` to refresh web page
    - `cmd Shift [` and `cmd Shift ]` to toggle between tabs
- to set placeholder value in text input form, use the attribute `placeholder`

`<input type="text" id='cat-url' name="somename" placeholder="cat photo url">`

- While there isn’t a functional value for these html tags, they are commonly used to logically organize elements of a webpage

```html
<html>
	<body>
		<main>
			<section>
			</section>
        </main>
		<footer>
		</footer>
	</body>
</html>
```

- use figure tag with figcaption to include caption under photo
    
    ```html
    <figure>
    	<img src="http://placekitten.com/200/300" alt="cute cat">
    	<figcaption>a photo of a cute cat</figcaption>
    </figure>
    ```
    
- use fieldset tag to organize a set of options in a form
- use `checked`behind the input field to preselect it

```html
<fieldset>
    <legend> Is your cat an indoor or outdoor cat</legend>
    <input type="radio" id="option1" name="group1" value="option1" checked>
    <label for="option1">Indoor</label><br>
    <input type="radio" id="option2" name="group1" value="option2">
    <label for="option2">Outdoor</label><br>
</fieldset>
```

## Questions

Should all text be put inside its own element or some lowest level being in a free line is ok?

Yes, it is generally considered good practice to wrap text within appropriate HTML tags. Doing so provides semantic meaning to the text, improves accessibility, and aids in the styling and positioning of elements using CSS.