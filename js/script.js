// 1. Fungsi Menu Telefon (Mobile)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) nav.classList.toggle('show');
}

// 2. Fungsi Animasi Piring Hitam (Vinyl) & Pemain Spotify
function playSpotify(playlistId, title, labelColor) {
    const vinyl = document.getElementById('vinyl-record');
    const vinylLabel = document.getElementById('vinyl-label');
    const statusText = document.getElementById('status-text');
    const spotifyWrapper = document.getElementById('spotify-wrapper');
    const spotifyIframe = document.getElementById('spotify-player');

    // Pastikan kod ini hanya jalan jika elemen vinyl wujud di page semasa
    if (!vinyl || !spotifyIframe) {
        return;
    }

    // Berhentikan pusingan seketika untuk reset
    vinyl.classList.remove('spin');
    
    // Tukar tajuk dan warna label vinyl di tengah
    statusText.innerHTML = `Now Spinning: <strong>${title}</strong> 🎵`;
    vinylLabel.style.backgroundColor = labelColor;
    
    // Masukkan link Spotify yang betul ke dalam iframe
    spotifyIframe.src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
    
    // Paparkan kotak Spotify ke skrin
    spotifyWrapper.classList.add('active');

    // Mulakan animasi vinyl selepas sedikit delay supaya lancar
    setTimeout(() => {
        vinyl.classList.add('spin');
    }, 50);

    // Scroll sikit ke atas supaya pengguna nampak player
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
