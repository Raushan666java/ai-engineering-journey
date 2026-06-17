document.addEventListener('DOMContentLoaded', function() {
    // Override GLightbox zoom to add control buttons
    var style = document.createElement('style');
    style.textContent = `
        .gzoom-controls {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            z-index: 999999;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .gzoom-controls.active {
            opacity: 1;
            pointer-events: auto;
        }
        .gzoom-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: none;
            background: rgba(0,0,0,0.6);
            color: #fff;
            font-size: 22px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
            transition: background 0.2s;
            line-height: 1;
        }
        .gzoom-btn:hover {
            background: rgba(0,0,0,0.85);
        }
        .gzoom-btn svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }
    `;
    document.head.appendChild(style);

    // Zoom controls container
    var controls = document.createElement('div');
    controls.className = 'gzoom-controls';
    controls.innerHTML = `
        <button class="gzoom-btn" id="gzoom-out" title="Zoom Out">
            <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
        </button>
        <button class="gzoom-btn" id="gzoom-in" title="Zoom In">
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </button>
        <button class="gzoom-btn" id="gzoom-reset" title="Reset Zoom">
            <svg viewBox="0 0 24 24"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5c-1.13 0-2.16-.37-3-1l1-1-4 2 2 4 1-1c1.16 1.16 2.75 2 4.5 2 3.87 0 7-3.13 7-7s-3.13-7-7-7z"/></svg>
        </button>
    `;
    document.body.appendChild(controls);

    function attachZoom() {
        // Find the GLightbox slide content
        var slide = document.querySelector('.goverlay.active') || document.querySelector('.gslide');
        if (!slide) {
            controls.classList.remove('active');
            return;
        }
        var img = document.querySelector('.gslide-image img');
        if (!img) {
            controls.classList.remove('active');
            return;
        }
        controls.classList.add('active');

        var scale = 1;
        var currentTransform = '';

        function applyZoom() {
            img.style.transform = 'scale(' + scale + ')';
            img.style.transition = 'transform 0.2s ease';
        }

        // Remove old listeners by replacing buttons
        var zoomIn = document.getElementById('gzoom-in');
        var zoomOut = document.getElementById('gzoom-out');
        var zoomReset = document.getElementById('gzoom-reset');

        var newZoomIn = zoomIn.cloneNode(true);
        var newZoomOut = zoomOut.cloneNode(true);
        var newZoomReset = zoomReset.cloneNode(true);
        zoomIn.parentNode.replaceChild(newZoomIn, zoomIn);
        zoomOut.parentNode.replaceChild(newZoomOut, zoomOut);
        zoomReset.parentNode.replaceChild(newZoomReset, zoomReset);

        newZoomIn.addEventListener('click', function(e) {
            e.stopPropagation();
            scale = Math.min(scale + 0.25, 5);
            applyZoom();
        });
        newZoomOut.addEventListener('click', function(e) {
            e.stopPropagation();
            scale = Math.max(scale - 0.25, 0.25);
            applyZoom();
        });
        newZoomReset.addEventListener('click', function(e) {
            e.stopPropagation();
            scale = 1;
            applyZoom();
        });

        // Mouse wheel zoom
        var wheelHandler = function(e) {
            if (e.deltaY < 0) {
                scale = Math.min(scale + 0.1, 5);
            } else {
                scale = Math.max(scale - 0.1, 0.25);
            }
            applyZoom();
        };
        img.addEventListener('wheel', wheelHandler, { passive: true });

        // Store cleanup
        img._gzoomCleanup = function() {
            img.removeEventListener('wheel', wheelHandler);
        };
    }

    // Observe GLightbox opening
    var observer = new MutationObserver(function(mutations) {
        for (var m of mutations) {
            for (var n of m.addedNodes) {
                if (n.nodeType === 1 && (n.classList && n.classList.contains('goverlay'))) {
                    setTimeout(attachZoom, 100);
                }
                if (n.nodeType === 1 && n.querySelector && n.querySelector('.gslide-image')) {
                    setTimeout(attachZoom, 100);
                }
            }
            for (var n of m.removedNodes) {
                if (n.nodeType === 1 && (n.classList && n.classList.contains('gslide-image'))) {
                    controls.classList.remove('active');
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
