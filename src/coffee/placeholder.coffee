define ['jquery'], ->
    supportPlaceholder = ()->
        i = document.createElement('input')
        return 'placeholder' of i
    $.support.placeholder = supportPlaceholder()

    random = ->
        return parseInt(Math.random() * 100000000)

    $.fn.extend
        placeholder : ()->
            $this = $ this
            text = $this.attr("placeholder")
            $wrap = $('<div class="sui-placeholder-wrap"></div>')
            $this.replaceWith $wrap
            $this.appendTo $wrap
            $label = $("<label class='sui-placeholder'>#{text}</label>")
            $wrap.append $label

            id = $this.attr "id"
            if not id
                id = "sui-placeholder-id-#{random()}"
                $this.attr("id", id)
            $label.attr("for", id)

            $label.css
                top: ($wrap.height() - $label.height()) / 2

            $this.focus -> $label.hide()
            $this.blur -> $label.show()

    if not $.support.placeholder
        $els = $("[placeholder]")
        $els.each -> $(this).placeholder()
