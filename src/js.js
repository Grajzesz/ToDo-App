$(document).ready(function() {
    function adding(e) {
        $('ul').append(
            '<li>' +
                'Task Number' +
                ' ' +
                counter++ +
                ': ' +
                $('input[name=ListItem]').val() +
                '</li>'
        );
        $('input[name=ListItem]').val('');
    }
    function error(e) {
        $('ul').append(`<li>INPUT TASK</li>`);
    }
    let counter = 1;

    $('.add').click(function(e) {
        e.preventDefault();
        if ($('input[name=ListItem]').val() === '') {
            error();
        } else {
            adding();

        }
    });
    $('input').keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            if ($('input[name=ListItem]').val() === '') {
                error();
            } else {
                adding();
            }
        }
    });

    $('.remove').click(function(e) {
        e.preventDefault();
        counter--;
        $('li')
            .last()
            .remove();
    });
    $('.clear').click(function(e) {
        e.preventDefault();
        counter = 1;
        $('li').remove();
    });
});
