"script.js": `// 1. Fungsi Menu Telefon (Mobile)
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
    statusText.innerHTML = \`Now Spinning: <strong>\${title}</strong> 🎵\`;
    vinylLabel.style.backgroundColor = labelColor;
    
    // Masukkan link Spotify yang betul ke dalam iframe
    spotifyIframe.src = \`https://open.spotify.com/embed/playlist/\${playlistId}?utm_source=generator&theme=0\`;
    
    // Paparkan kotak Spotify ke skrin
    spotifyWrapper.classList.add('active');

    // Mulakan animasi vinyl selepas sedikit delay supaya lancar
    setTimeout(() => {
        vinyl.classList.add('spin');
    }, 50);

    // Scroll sikit ke atas supaya pengguna nampak player
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
`
        };

        // Fungsi mengemaskini paparan kod
        function showCode(filename, btnElement) {
            // Ubah butang aktif
            document.querySelectorAll('.file-btn').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            
            // Masukkan teks ke dalam blok pre > code
            const rawCode = projectFiles[filename];
            document.getElementById('code-display').textContent = rawCode;
            
            // Kemaskini tajuk toolbar
            let fullPath = filename;
            if(filename === 'style.css') fullPath = 'css/style.css';
            if(filename === 'script.js') fullPath = 'js/script.js';
            document.getElementById('display-filename').textContent = fullPath;
        }

        // Fungsi menyalin kod (Copy to clipboard)
        function copyCode() {
            const codeToCopy = document.getElementById('code-display').textContent;
            navigator.clipboard.writeText(codeToCopy).then(() => {
                alert('Tahniah! Kod berjaya disalin. Buka fail di komputer anda dan tekan Paste.');
            }).catch(err => {
                alert('Ralat semasa menyalin. Sila highlight kod dan copy secara manual.');
            });
        }

        // Jalankan apabila page sedia ada
        document.addEventListener('DOMContentLoaded', () => {
            showCode('index.html', document.querySelector('.file-btn'));
        });
    </script>
</body>
</html>
