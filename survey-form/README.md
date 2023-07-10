## Learning Notes
- In VSCode, when editting html, after typing = , VSCode will create the quotes automatically and put the prompt in between the quotes. No need to type the quote, because if you do, you’ll find your prompt outside of the pair of quotes, then having to go backward inside the quote is rather inconvenient. This reddit thread explains this behavior very well.
- `justify-content` is useful for placing multiple items in a harmonious way, space-around will place contents with equal distance apart and half distance to the borders
```
#pond {
	display: flex;
	justify-content: space-around;
}
```