// Comportamentos do blog: menu, filtro de categorias, copiar link, brilho dos cards e métricas.
(function () {
    var header = document.getElementById('top-nav');
    var menuBtn = document.getElementById('menu-btn');

    // Menu mobile
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            var open = header.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', open);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { header.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }
        });
    }

    // Filtro de categorias da listagem (também aceita /blog/?categoria=nome)
    var chips = document.querySelectorAll('.cat-chip');
    var cards = document.querySelectorAll('#post-grid .post-card');
    var emptyMsg = document.getElementById('empty-filter');
    function applyFilter(cat) {
        var shown = 0;
        chips.forEach(function (c) {
            var on = c.dataset.filter === cat;
            c.classList.toggle('is-active', on);
            c.setAttribute('aria-pressed', on);
        });
        cards.forEach(function (card) {
            var match = cat === 'todos' || card.dataset.category === cat;
            card.hidden = !match;
            // O destaque só faz sentido na lista completa
            card.classList.toggle('featured', match && cat === 'todos' && card === cards[0]);
            if (match) shown++;
        });
        if (emptyMsg) emptyMsg.hidden = shown > 0;
    }
    if (chips.length) {
        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                var cat = chip.dataset.filter;
                applyFilter(cat);
                var url = cat === 'todos' ? location.pathname : location.pathname + '?categoria=' + cat;
                history.replaceState(null, '', url);
            });
        });
        var initial = new URLSearchParams(location.search).get('categoria');
        if (initial && document.querySelector('.cat-chip[data-filter="' + initial + '"]')) applyFilter(initial);
    }

    // Copiar link do artigo
    var copyBtn = document.querySelector('.share-copy');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            var url = copyBtn.closest('.share').dataset.shareUrl;
            var done = function () {
                copyBtn.classList.add('copied');
                setTimeout(function () { copyBtn.classList.remove('copied'); }, 1800);
            };
            if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { window.prompt('Copie o link:', url); });
            else window.prompt('Copie o link:', url);
        });
    }

    // Brilho que segue o mouse nos cards (mesmo efeito da página inicial)
    document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('pointermove', function (e) {
            var r = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
    });

    // Métricas de clique (funcionam quando o Google Analytics / Meta Pixel estiver instalado)
    function trackEvent(name, params) {
        try {
            if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
            if (typeof window.fbq === 'function') window.fbq('trackCustom', name, params || {});
        } catch (err) {}
    }
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href]');
        if (!a) return;
        var href = a.getAttribute('href');
        var local = a.classList.contains('wa-float') ? 'botao_flutuante' : (a.closest('.post-cta') ? 'cta_artigo' : (a.closest('.share') ? 'compartilhar' : 'blog'));
        if (href.indexOf('wa.me/' + '5511') !== -1) trackEvent('whatsapp_click', { local: local });
        else if (href.indexOf('instagram.com') !== -1) trackEvent('instagram_click', { local: local });
    });
})();
