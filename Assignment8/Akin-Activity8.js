// Add event to DOM to check whether the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Define necessary variables
    let difficulty = 500;
    let clickCounter = 0;
    let level = 1;
    let status = 'mouseOut';

    // Get HTML element
    const button = document.querySelector('img');
    
    // Show the level
    alert(`Level ${level}`)
    
    // Add mouseover event to button
    button.addEventListener('mouseover', () => {
        
        // Change status
        status = 'mouseOver';
        
        // Move button when user move cursor onto button in every (difficulty)ms
        setTimeout(() => { 
            // Move button
            if(status === 'mouseOver') {
                moveButton();
                // Change status
                status = 'mouseOut';
            }
            
        }, difficulty);
        
        
    });
    
    // Add click event to button
    button.addEventListener('click', () => {
        
        // Button is clicked. Increase the click counter by 1.
        clickCounter++;
    
        // When user can click onto button 3 times in a level
        if(clickCounter === 3) {
            
            // Increase the level
            level++;
            // Alert new level to user
            alert(`New Level : ${level}`);
            // Reset click counter
            clickCounter = 0;
            // Increase the difficulty by decreasing it
            difficulty -= 100;
        }
    });
    
    
    // Move button
    moveButton = () => {
        
        // Calculate the random values for marginLeft and marginTop properties.
        const randomValue1 = Math.random() * 1500;
        const randomValue2 = Math.random() * 800;
    
        // Modify the marginLeft and marginTop properties.
        button.style.marginLeft = `${randomValue1}px`; 
        button.style.marginTop = `${randomValue2}px`;
        
    }

});
