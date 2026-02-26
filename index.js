document.addEventListener('click', function(e) {
    const style = window.getComputedStyle(e.target);
    console.log('━━━ CLICK DEBUG ━━━');
    console.log('Element:', e.target.tagName);
    console.log('Class:', e.target.className || 'none');
    console.log('ID:', e.target.id || 'none');
    console.log('Z-index:', style.zIndex);
    console.log('Pointer-events:', style.pointerEvents);
    if (e.target.parentElement) {
        const parentStyle = window.getComputedStyle(e.target.parentElement);
        console.log('Parent:', e.target.parentElement.tagName, '| z-index:', parentStyle.zIndex);
    }
    console.log('━━━━━━━━━━━━━━━━━━\n');
}, true);