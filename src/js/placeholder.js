(function() {
  define(['jquery'], function() {
    var $els, random, supportPlaceholder;
    supportPlaceholder = function() {
      var i;
      i = document.createElement('input');
      return 'placeholder' in i;
    };
    $.support.placeholder = supportPlaceholder();
    random = function() {
      return parseInt(Math.random() * 100000000);
    };
    $.fn.extend({
      placeholder: function() {
        var $label, $this, $wrap, id, text;
        $this = $(this);
        text = $this.attr("placeholder");
        $wrap = $('<div class="sui-placeholder-wrap"></div>');
        $this.replaceWith($wrap);
        $this.appendTo($wrap);
        $label = $("<label class='sui-placeholder'>" + text + "</label>");
        $wrap.append($label);
        id = $this.attr("id");
        if (!id) {
          id = "sui-placeholder-id-" + (random());
          $this.attr("id", id);
        }
        $label.attr("for", id);
        $label.css({
          top: ($wrap.height() - $label.height()) / 2
        });
        $this.focus(function() {
          return $label.hide();
        });
        return $this.blur(function() {
          return $label.show();
        });
      }
    });
    if (!$.support.placeholder) {
      $els = $("[placeholder]");
      return $els.each(function() {
        return $(this).placeholder();
      });
    }
  });

}).call(this);
