document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.getElementById('snow-container');
    const toggleButton = document.getElementById('toggle-snow');
    let snowEnabled = true;
    
    // Toggle snow visibility when button is clicked
    toggleButton.addEventListener('click', function() {
        snowEnabled = !snowEnabled;
        snowContainer.style.display = snowEnabled ? 'block' : 'none';
        toggleButton.textContent = snowEnabled ? 'Hide Snow' : 'Show Snow';
    });
    
    // Rest of the snow animation code
    const snowflakeCount = 50; // Adjust number of snowflakes
    
    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Randomly assign snowflake type
        const type = Math.floor(Math.random() * 3) + 1;
        snowflake.classList.add('type-' + type);
        
        // Random starting position
        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = -10;
        
        snowflake.style.left = startPositionX + 'px';
        snowflake.style.top = startPositionY + 'px';
        
        // Random animation duration
        const animationDuration = 5 + Math.random() * 10;
        snowflake.style.animationDuration = animationDuration + 's';
        
        // Random animation delay
        const animationDelay = Math.random() * 5;
        snowflake.style.animationDelay = animationDelay + 's';
        
        snowContainer.appendChild(snowflake);
        
        // Remove snowflake after animation completes and create a new one
        setTimeout(() => {
            snowflake.remove();
            createSnowflake();
        }, (animationDuration + animationDelay) * 1000);
    }
});