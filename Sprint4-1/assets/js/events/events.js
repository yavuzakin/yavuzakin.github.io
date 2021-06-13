$(document).ready(() => {

    const eventsLines = document.querySelector('.events-lines-container');

    $('#birthday').datepicker({
        minDate: new Date(2021, 4, 20),
        maxDate: 0,
        onSelect: function() {
            const url = `../assets/json/events.json`;
            const date = $(this).val();
            
            eventsLines.innerHTML = '';
            // AJAX
            $.getJSON(url, data => {
                if(data.events[date]) {
                    const events = data.events[date];
                    showEvents(events, date);
                }
                else {
                    document.querySelector('.events-lines-container').innerHTML = `<div class="row svg-container"><img src="../assets/images/undraw_empty_xct9.svg" class="empty-list-svg"></div>`;
                }
            });
        }
    });

    $('.events-btn').click( () => {
            
        $('.events-lines-container').append(
        `
            <div class="row events-line mt-5"></div>
        `);

        for(let i = 0 ; i < 4 ; i++) {
            $('.events-container .events-line:last').append(
            `
                <div class="col pl-1">
                        <div class="container px-3">
                            <a
                                class="event-link"
                                href="./events.html"
                            >
                                <div class="row mt-0">
                                    <img class="w-100 event-img px-0" src="../assets/images/event-img.jpg" alt="">
                                </div>
                                <div class="row mt-0">
                                    <p class="event-exp mt-3 ml-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque?</p>
                                </div>
                            </a>
                        </div>
                </div>
            `);
        }

    });
    
});

function showEvents(events, date) {
    document.querySelector('.events-btn').style.visibility = 'hidden';
    document.querySelector('.events-btn-row').style.paddingBottom = '0';
    
    let i = 0;
    events.forEach(element => {
        if(i === 4)
            i = 0;
        if(i === 0) {
            document.querySelector('.events-lines-container').insertAdjacentHTML('beforeend', '<div class="row events-line mt-5"></div>');
        }
        $('.events-line:last').append(
            `
            <div class="col-md-3">
                <div class="container px-3">
                    <a class="event-link" href="./events.html">
                        <div class="row mt-0">
                            <img class="w-100 event-img px-0" src="${element.img}" alt="">
                        </div>
                        <div class="row mt-0">
                            <p class="event-exp mt-3 ml-1">${element.exp}</p>
                        </div>
                        <div class="row mt-0">
                            <p>${date}</p>
                        </div>
                    </a>
                </div>
            </div>
            `
        );
        i++;
    });
}