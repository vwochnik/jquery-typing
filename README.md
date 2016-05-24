# jQuery Typing

> A jQuery plugin that can typewrite HTML.

Typing is a jQuery plugin that can write whole parts of the DOM. It's really
easy to use and has a set of options that allows neat typing animations to be
built.

## Demo

Check out [this fiddle](https://jsfiddle.net/vwochnik/qh66c12y/1/) for a generic
demo and [this one](https://jsfiddle.net/vwochnik/7k9cj0qg/4/) for a terminal
animation.

## Installation

You can install the plugin using bower:

```
bower install jquery-typing
```

Then, if not having bower main files embedded automatically, add this to your
HTML files:

```
<link rel="stylesheet" type="text/css" href="bower_components/jquery-typing/dist/jquery.typing.min.css">
<script src="bower_components/jquery-typing/dist/jquery.typing.min.js"></script>
```

## Usage

You need one invisible HTML element containing the content to typewrite and you
need a container element into which the plugin typewrites.

```
<div id="typing"></div>
<div id="content" style="display:none">
  <h1 data-speed="120">Hi! <small data-speed="80" data-delay="1000">This is jQuery Typing!</small></h1>
  <p><strong>A jQuery plugin that can typewrite HTML.</strong></p>
  <p>Typing is a jQuery plugin that can write whole parts of the DOM.
  <br>It's really easy to use and has a set of options that allows neat typing animations to be built with varying speed and delays.</p>
</div>
```

Lastly, you need to call the plugin to run the animation:

```
$(function(){
  $("#typing").typing({
    sourceElement: $("#content")
  });
});
```

## Configuration

The following configuration options are available:

### sourceElement

This option specifies the source element from which content is being read. This
can be a jQuery selection or a native DOM element.

### cursorElement

This option specifies an alternative cursor element which is being used while
typewriting. The element is attached and detached at different points in the
DOM. This can be a jQuery selection or a native DOM element.

If you want to disable the cursor, use an empty jQuery selection as its
value: `$([])`.

### cb

This is a callback function that is called after the animation has been
completed.

### speed

This is the time in milliseconds between each stroke.

This option can be customized for each element by setting the `data-speed`
attribute to the desired value.

### delay

This is the delay in milliseconds before an element is being typed.

This option can be customized for each element by setting the `data-delay`
attribute to the desired value.

### break

This is the break in milliseconds after an element has been typed.

This option can be customized for each element by setting the `data-break`
attribute to the desired value.

# Contribute

Fork this repository, make your changes and then issue a pull request. If you
find bugs or have new ideas that you do not want to implement yourself, file an
issue.

# Copyright

Copyright (c) 2016 Vincent Wochnik.

License: MIT
