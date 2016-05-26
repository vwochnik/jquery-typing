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

  function randomFromRange(r) {
    return
  }

  function timeout(fn, delay) {
    if (Array.isArray(delay)) {
      delay = Math.floor(Math.random() * (delay[1] - delay[0] + 1)) + delay[0];
    }

    if (delay < 0) {
      return fn();
    }

    var now = Date.now(), diff;
    requestAnimationFrame(function() {
      diff = Date.now() - now;
      if (delay <= diff) { return fn(); }
      setTimeout(fn, delay - diff);
    });
  }

  function typewrite($dst, $src, options) {
    var nde, str, idx = 0;

    str = $src.text().replace(/\s*\n\s*/g, "");
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
          timeout(function() {
            if (options.detachCursor) {
              options.cursorElement.detach();
            }
            timeout(options.cb, options.break);
          }, options.pause);
        }
      }, options.speed);
    };

    timeout(delayedType, options.delay);
  }

  function elementOptions($elem) {
    var options = {}, data;

    data = $elem.data();
    ['speed', 'delay', 'pause', 'break', 'detachCursor']
      .forEach(function(property) {
        if (data[property] !== undefined) {
          options[property] = data[property];
        }
      });

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
    if (this.length === 0) {
      return this;
    }

    if (!options.cursorElement) {
      options.cursorElement = $.fn.typing.defaults.cursorElement.clone();
    }

    options = $.extend({}, $.fn.typing.defaults, options);

    options.sourceElement = $(options.sourceElement);
    options.cursorElement = $(options.cursorElement);

    traverse(this.first(), options.sourceElement.contents(), options);
    return this;
  };

  $.fn.typing.defaults = {
    cursorElement: $("<span/>").addClass("blinking-cursor").text("|"),
    detachCursor: true,
    speed: 50,
    delay: -1,
    pause: -1,
    break: -1,
    cb: function() {}
  };
})(window, jQuery);
