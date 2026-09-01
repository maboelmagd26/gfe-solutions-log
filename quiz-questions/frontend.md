# Frontend Questions

HTML, CSS, browser, and web platform questions.

## 1. CSS

_(see the [README](README.md) for the format)_

### 1. what is the difference between `block`, `inline`, and `inline-block` ?

Topics: `CSS`, Level : `EASY`, Importance: `HIGH`
| Property | block | inline-block | inline |
| ------------------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Size | fills up the width of its parent container | depends on the content | depends on the content |
| Positioning | Starts on a new line and tolerates no other elements beside it | flows with other content and allows other elements next to it | flows with other content and allows other elements next to it |
| specify `width` and `height` | Yes | Yes | NO, ignored |
| `margins` and `paddings` | All sides respected | All sides respected | only horizonal sides are respected, vertical sides if set, don't affect the layout. Vertical space takes up depending on `line-height`, even though the `border` and `padding` appear visually around the content. |
| Can be aligned with `vertical-align` | No | Yes | Yes |
| use cases | Layout elements like `<div>`, `<p>`, `<section>`. | used for buttons, images, form fields that needs custom sizes and should stay in line with text | Links `<a>`, text formatting: `<span>`, text styling: bold `<b>`, italics `<i>`. |
