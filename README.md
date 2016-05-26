# jQuery Typing

> A jQuery plugin that can typewrite HTML.

Typing is a jQuery plugin that can write whole parts of the DOM. It's really
easy to use and has a set of options that allows neat typing animations to be
built.

## Demo

![Typing demo](https://raw.githubusercontent.com/vwochnik/jquery-typing/master/demo.gif)
<br>Check out [this fiddle](https://jsfiddle.net/vwochnik/qh66c12y/8/) containing
the demo above.

![Terminal demo](https://raw.githubusercontent.com/vwochnik/jquery-typing/master/terminal.gif)
<br>[This fiddle](https://jsfiddle.net/vwochnik/7k9cj0qg/7/) contains the code for
the terminal demo.

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

Alternatively, you can use the RawGit CDN to embed the plugin without the need
of downloading it:

```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/vwochnik/jquery-typing/v0.1.6/dist/jquery.typing.min.css">
<script src="https://cdn.rawgit.com/vwochnik/jquery-typing/v0.1.6/dist/jquery.typing.min.js"></script>
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

### detachCursor

This option determines whether the cursor element should be detached from the
DOM after the typewriting for a certain element has completed. Note that a DOM
element can not be attached twice so naturally, the cursor element is being
detached before it is reattached for each successive typing animation.

This option can be customized for each element by setting the
`data-detach-cursor` attribute to either `true` or `false`.

### cb

This is a callback function that is called after the animation has been
completed.

### speed

This is the time in milliseconds between each stroke.
`0` does not cause any time delay but is still using `requestAnimationFrame`,
`-1` is not.

Alternatively, this option can set to an array containing a range, i.e. minimum
and maximum values, from which a random value is being generated.

This option can be customized for each element by setting the `data-speed`
attribute to the desired value.

### delay

This is the delay in milliseconds before an element is being typed.
`0` does not cause any time delay but is still using `requestAnimationFrame`,
`-1` is not.

Alternatively, this option can set to an array containing a range, i.e. minimum
and maximum values, from which a random value is being generated.

This option can be customized for each element by setting the `data-delay`
attribute to the desired value.

### pause

This is the pause in milliseconds after an element has been typed but before
the cursor is detached, if not disabled.
`0` does not cause any time delay but is still using `requestAnimationFrame`,
`-1` is not.

Alternatively, this option can set to an array containing a range, i.e. minimum
and maximum values, from which a random value is being generated.

This option can be customized for each element by setting the `data-pause`
attribute to the desired value.

### break

This is the break in milliseconds after an element has been typed and the cursor
has been detached, if not disabled.
`0` does not cause any time delay but is still using `requestAnimationFrame`,
`-1` is not.

Alternatively, this option can set to an array containing a range, i.e. minimum
and maximum values, from which a random value is being generated.

This option can be customized for each element by setting the `data-break`
attribute to the desired value.

# Contribute

Fork this repository, make your changes and then issue a pull request. If you
find bugs or have new ideas that you do not want to implement yourself, file an
issue.

# Copyright

Copyright (c) 2016 Vincent Wochnik.

License: MIT
