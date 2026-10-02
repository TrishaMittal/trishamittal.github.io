// Lightweight scroll-reveal: fades in elements tagged .reveal as they enter the viewport.
// Vanilla JS, no jQuery dependency, fails silently in older browsers without IntersectionObserver.
(function () {
    function markRevealTargets() {
        var selectors = [
            'header .intro-text',
            '.pub-theme-content .row',
            '.pub-year-content .row',
            '.engagement-section-content .row',
            '.professional-card',
            '.education-card',
            '.timeline-item',
            '.experience-item',
            '.book-cover',
            'table.tg'
        ];
        var seen = new Set();
        selectors.forEach(function (sel) {
            document.querySelectorAll(sel).forEach(function (el) {
                if (!seen.has(el)) {
                    el.classList.add('reveal');
                    seen.add(el);
                }
            });
        });
    }

    function initObserver() {
        var targets = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            targets.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(function (el) { observer.observe(el); });
    }

    document.addEventListener('DOMContentLoaded', function () {
        markRevealTargets();
        initObserver();
    });
})();
