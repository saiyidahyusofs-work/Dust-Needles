// 1. Mobile Menu Toggle Logic
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

// 2. Spotify Integration & Vinyl Animation Logic
function playSpotify(playlistId, title, labelColor) {
    
    // Get DOM elements
    const vinyl = document.getElementById('vinyl-record');
    const vinylLabel = document.getElementById('vinyl-label');
    const statusText = document.getElementById('status-text');
    const spotifyWrapper = document.getElementById('spotify-wrapper');
    const spotifyIframe = document.getElementById('spotify-player');

    // Make sure elements exist on the page before animating
    if (!vinyl || !spotifyIframe) {
        console.error("Player elements not found!");
        return;
    }

    // Stop current spin animation to reset it
    vinyl.classList.remove('spin');
    
    // Update Title and Label Color
    statusText.innerHTML = `Now Spinning: <strong>${title}</strong> 🎵`;
    vinylLabel.style.backgroundColor = labelColor;
    
    // Construct the real Spotify Embed URL
    const spotifyEmbedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
    
    // Load the new Spotify playlist into the iframe
    spotifyIframe.src = spotifyEmbedUrl;

    // Show the Spotify player container (slides down)
    spotifyWrapper.classList.add('active');

    // Restart the spin animation with a slight delay for smooth transition
    setTimeout(() => {
        vinyl.classList.add('spin');
    }, 50);

    // Scroll up slightly so the user sees the player
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
        
        const formContainer = document.querySelector('.contact-form');
        formContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <h3 style="color: var(--accent-gold); font-size: 24px; margin-bottom: 10px;">Thank You!</h3>
                <p>Your playlist request has been received. Keep spinning!</p>
                <br>
                <a href="index.html" class="submit-btn" style="width: auto;">Return Home</a>
            </div>
        `;
    });
}
