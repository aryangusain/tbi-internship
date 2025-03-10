# HTML Cheatsheet

## Basic Definitions:

**HTML** - Hyper Text Markup Language. HTML is a markup language that describes the structure of a webpage.

**Tags** - keywords that define how your web browser must format and display your web page.

2 types - opening/start and closing/end tag.

**Element** - combination of a start tag, some content, and an end tag.

**Block-level Elements** - an element that takes up the full width available. eg - `<div>`, `<p>`

**Inline Elements** - an element that takes up as much width as necessary. eg - `<span>`.

**Semantic Elements** - an element that clearly describes its meaning. eg - `<section>`, `<table>`, `<article>` etc.

**Attributes** - provide additional information about elements. always specified in the start tag. eg- name, id, class etc.

<hr>

## Structure of a HTML page:

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
    </body>
</html>
```
- `<!DOCTYPE html>` - defines that the given document is an HTML5 document.
- `<html>` - root element of an HTML page. encloses all the other tags.
- `<head>` - contains meta information about the HTML page like title, author etc.
- `<title>` - specifies a title that is shown in the page's tab.
- `<body>` - container for all the visible content of the HTML page.
  
<hr>

## Basic Tags in HTML:
- `<h1>` to `<h6>` - define headings. h1 is largest and h6 is smallest.
- `<p>` - defines a paragraph.
- `<form>` - defines an HTML form.
- `<input>` - used to take input from user.
- `<button>` - defines a clickable button.
- `<img>` - defines an image.
- `<a>` - defines a hyperlink.
- `<ul>` and `<ol>` - define a list (ul - unordered, ol - ordered)
- `<table>` - defines a table (other tags used in table are <tr>, <th>, <td>)
- `<style>` - used to define styles for a HTML page.
- `<div>` and `<span>` - define a section.
- `<main>` - defines the main content of the page.
- `<section>` - defines a section in the page.
- `<article>` - defines an article.
- `<header>` - defines a header for a page.
- `<footer>` - defines a footer for a page.
- `<link>` - used to link an external resource to the HTML document.
- `<meta>` - defines metadata about an HTML document. eg - description, author, keywords for SEO.
- `<script>` - used to write javascript code in the HTML page. also used to link external javascript file to the HTML document.

<hr>

## Comments in HTML:
- They are not displayed in the browser but help to explain/document the source code for other developers or yourself.

eg - `<!-- This is a comment in HTML -->`
