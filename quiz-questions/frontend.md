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

### 2. What does `* { box-sizing: border-box; }` do?

`⭐ review`

Topics: `CSS`, Level : `MEDIUM` Importance: `HIGH`.

It is a CSS rule that applies to every `HTML` element on a webpage overriding the default `content-box` mode and ensuring that its box model `width` and `height` are calculated by summing up :

- `Content:` : text, images, media, ..etc.
- `Padding:` : the vertical and horizontal space between content and border.
- `border:` the vertical and horizontal box model's boundaries.
- `Margin:` the space outside the border, separating the element from others.

#### Understanding the box model

1.  with `box-sizing: content-box;` is the default mode and in this mode `width` and `height` only accounts for the `content` area and any `border`, `padding` added to the element increases its total size beyond the specified size.
2.  with `box-sizing: border-box;`
    the `height` and `width` include the `content`, `padding` and `border`.
    the `content` area shrinks to accomodate for `padding` and `border` within the specified dimensions.

#### Advantages of border box

1. consistency across elements

2. simplified layout calculations: you don't need to substact padding and border to calculate the content size reducing ui bugs in responsive designs.

3. intuitive model that aligns with designers and developers mental model about the element that accounts for padding, content and border for the element.

4. Better integrations with css frameworks like `Tailwind CSS` and `Bootstrap` that use `border-box` to fasten the development of predictable resposive layouts

5. Improved form styling: Form elements like `input` and `select` often have browser-specific padding and borders. `border-box` ensures consistent sizing across browsers, making it easier to align form fields in a layout.

## 2. JAVASCRIPT and Web APIS

### 1. What are the differences between JavaScript variables created using `let`, `var` or `const`?

Topics: `JS`, Level : `MEDIUM` Importance: `HIGH`
| Behavior | Var | let | const |
| ------------------------- | -------------- | ----------------- | ------------------- |
| Scope | function scope | block scope | block scope |
| Re-declaration | Yes | forbidden | forbidden |
| initialization | optional | option | must be initialized |
| Reassignment | Yes | Yes | forbidden |
| Access before declaration | undefined | `reference error` | `reference error` |

block scope: means it belongs to the nearest set of curly braces (`function`, `if/else`, `loops`)

### hoisting behavior

- `var`, `let` and `const` are all hoisted but `var` is auto-initialized with `undefined`, meanwhile `let` and `const` are not initialized.
- accessing them before initialization will result in `reference error` because they are in the `TDZ` from the start of their defining block untill the initialization is processed.

`Best Practices`:

- In modern JavaScript, it's generally recommended to use const by default for variables that don't need to be reassigned. This promotes immutability and prevents accidental changes.
- If you use universal constant it is preferred to use `SCREAMING_SNAKE_CASE` style
  ex:

```js
const EARTH_GRAVITY = 9.81;
```

- Use let when you need to reassign a variable within its scope.
- Avoid using var due to its potential for scoping issues and hoisting behavior.
- If you need to target older browsers, write your code using let/const, and use a transpiler like Babel to compile your code to older syntax.
