/*!
 * jQuery Typing
 * A jQuery plugin that can typewrite HTML.
 * Copyright (c) 2016 Vincent Wochnik.
 */
(function(window, $) {
  var requestAnimationFrame = window.requestAnimationFrame       ||
                              window.webkitRequestAnimationFrame ||
                              window.mozRequestAnimationFrame    ||
                              window.setTimeout;

  function timeout(fn, msec) {
    requestAnimationFrame(function() {
      setTimeout(fn, msec);
    });
  }

  function typewrite($dst, $src, options) {
    var nde, str, idx = 0, intval;

    str = $src.text().replace(/(^\s+\n|\n\s+$)/g, "").replace(/\s+/g, " ");
    if (!str.length) {
      return options.cb();
    }

    nde = document.createTextNode("");
    $dst.append(nde);
    options.cursorElement.appendTo($dst);

    var delayedType = function() {
      timeout(function() {
        nde.nodeValue += str.charAt(idx++);
        if (idx < str.length) {
          delayedType();
        } else {
          clearInterval(intval);
          timeout(function() {
            options.cursorElement.detach();
            options.cb();
          }, options.break);
        }
      }, options.speed);
    };

    timeout(delayedType, options.delay);
  }

  function elementOptions($elem) {
    var options = {}, val;

    if (val = $elem.data("speed")) {
      options.speed = val;
    }

    if (val = $elem.data("delay")) {
      options.delay = val;
    }

    if (val = $elem.data("break")) {
      options.break = val;
    }

    return options;
  }

  function traverse($dest, ary, options) {
    if (!ary.length) {
      return options.cb();
    }

    if (ary[0].nodeType > 3) {
      return traverse($dest, ary.slice(1), options);
    }

    var oldOptins = options;
    options = $.extend({}, options, {
      cb: function() { traverse($dest, ary.slice(1), oldOptins); }
    }, elementOptions($(ary[0])));

    if (ary[0].nodeType === 3) {
      return typewrite($dest, $(ary[0]), options);
    }

    var $cp = $(ary[0].cloneNode(false)).appendTo($dest);
    return traverse($cp, $(ary[0]).contents(), options);
  }

  $.fn.typing = function(options) {
    if (!options.cursorElement) {
      options.cursorElement = $.fn.typing.defaults.cursorElement.clone();
    }

    options = $.extend({}, $.fn.typing.defaults, options);

    var src = options.sourceElement;
    if (!src) {
      return this;
    }

    if (src.tagName) {
      src = $(src);
    }

    if ((this.length === 0) || !(src instanceof $)) {
      return this;
    }

    if (!(options.cursorElement instanceof $)) {
      options.cursorElement = $(options.cursorElement);
    }

    traverse(this.first(), src.contents(), options);
    return this;
  };

  $.fn.typing.defaults = {
    cursorElement: $("<span/>").addClass("blinking-cursor").text("|"),
    delay: 0,
    speed: 50,
    break: 120,
    cb: function() {}
  };
})(window, jQuery);
