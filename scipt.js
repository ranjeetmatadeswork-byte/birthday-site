function goNext() {
    // Little heart burst before navigating
    const burst = document.createElement('div');
    burst.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        display: flex; align-items: center; justify-content: center;
        pointer-events: none; font-size: 3rem;
        animation: burstFade 0.8s ease forwards;
    `;
    burst.textContent = '💗';
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes burstFade {
                0%   { opacity: 0; transform: scale(0.5); }
                50%  { opacity: 1; transform: scale(2.5); }
                100% { opacity: 0; transform: scale(4); }
            }
        </style>
    `);
    document.body.appendChild(burst);
    setTimeout(() => window.location.href = "about.html", 750);
}