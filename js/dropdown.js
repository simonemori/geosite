var dropdown = {
    init: function() {
        $('.btn-group .dropdown-menu li a').live('click', function(e) {
            var $this = $(this)
            var text = $this.text()

            var $btngroup = $this.parent().parent().parent()
            $btngroup.find('.dropdown-toggle span:first-child').text(text)

            var $typeahead = $btngroup.parent().find('.typeahead')
            var $typeclone = $typeahead.clone()
            $typeclone.val('')
            $typeahead.replaceWith($typeclone)
            //$typeahead.data('typeahead', null)
            query.assignTypeahead(text, $typeclone)
        })
    }
}   
