$(document).ready(function () {
    $('#nav_list a').click(function () {
        const title = $(this).attr('title');
        const url = `./json_files/${title}.json`;

        $.getJSON(url, data => {
            const month = data.speakers[0].month;
            const title2 = data.speakers[0].title;
            const speaker = data.speakers[0].speaker;
            const image = data.speakers[0].image;
            const text = data.speakers[0].text;

            $('main h1').html(title2);
            $('main img').attr('src',image);
            $('main h2').html(month + '<br>' + speaker);
            $('main p').html(text);
          });
    });
}); // end ready