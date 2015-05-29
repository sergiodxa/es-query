# es-query
An utilitarian library for DOM manipulation using ECMAScript 7 Function Bind Syntax.

es-query is only compatible with IE8 or better.

## How to use
To use this library you need to install it with NPM using:
```bash
npm i -S es-query
```
Once you finish you can load it in your code with:
```javascript
import $ from 'es-query';
```
Or you can load only the required methods with:
```javascript
import { find, html, each } from 'es-query';
```
Then you can use it this way:
```javascript
document.querySelector('section')::$.find('p')::$.each(el => {
  el::$.html('Hello, world!');
});
```
Or if you only load some modules:
```javascript
document.querySelector('section')::find('p')::each(el => {
  el::html('Hello, world!');
});
```
The methods are made to work only with one element at time, so if you have an array of elements you has to use the method each() like in the example before.

## List of methods
All the methods works with the same syntax as jQuery.

* addClass
* after
* append
* attr
* before
* children
* clone
* contains
* each
* empty
* filter
* find
* hasClass
* html
* is
* next
* off
* on
* parent
* prepend
* prev
* removeClass
* siblings
* text
* toggleClass
* trigger

## License
The MIT License (MIT)

Copyright (c) 2015 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.