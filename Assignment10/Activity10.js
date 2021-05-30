pLangs = [
    'ASP',
    'C',
    'C++',
    'C#',
    'Java',
    'JavaScript',
    'Perl',
    'Python',
    'Ruby'
];

$(document).ready(() => {
    $('#birthday').datepicker();
    $('#pls').autocomplete({
        source: pLangs
    });
});