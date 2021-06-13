$(document).ready(function() {
    // Get subscriber count from youtube api using ajax
    const youtubeKey = 'AIzaSyAMOrBPcDyIA1YSaF64Wp02DJ3J6fLxz7g';
    const fbYoutube = 'UCgqlho3-8a6FmDqQm7Q6gJw';
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${fbYoutube}&key=${youtubeKey}`;

    function getSubscribers(url) {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const statistics = data.items[0].statistics;
            const subscriberCount = statistics.subscriberCount;
            modifyDOM(subscriberCount);
        })
    }
    // End youtube api

    // Modify the DOM to show subscriber number
    function modifyDOM(subCount) {
        const subDiv = document.querySelector('.subscriber-count');
        console.log(subCount);
        console.log(subCount.length);
        let counter = 0;
        for(let i = subCount.length - 1 ; i >= 0 ; i--) {
            counter++;
            subDiv.insertAdjacentHTML('afterbegin', `<span class="sub-number">${subCount[i]}</span>`);
            if(counter === 3) {
                subDiv.insertAdjacentHTML('afterbegin', `<span class="sub-number-seperator"></span>`);   
                counter = 0;
            }
        }
    }

    getSubscribers(url);

    
});