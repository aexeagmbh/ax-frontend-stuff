Instructions
===

###Step 0
Open up the [Gist](https://gist.github.com/julianxhokaxhiu/cae689be8cfdb7277362).

###Step 1
Just copy-paste the HTML whenever you want on your website.

###Step 2
Include the `banner.css` file in your `css` folder.

###Step 3
Include first [localforage](http://mozilla.github.io/localForage/) and then `banner.js` file in the `js` folder.

###Step 4
Load the page and try if everything works.

###Notes

- [localforage](http://mozilla.github.io/localForage/) is not really needed but since the closed state is saved on the "localStorage" of the browser, we use this little plugin to use not only localStorage but also IndexedDB or WebSQL, based on browser for highest compatibility.<br>Also, using this library you can write your own "driver" to create for example a fallback using Ajax and User Session.
- This demo is also a reference, so use it to test if everything works as expected.