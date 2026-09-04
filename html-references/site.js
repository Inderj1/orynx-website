(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const form = document.querySelector('[data-demo-form]');
  if (form) {
    const status = form.querySelector('[data-form-status]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const company = String(data.get('company') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const product = String(data.get('product') || '').trim();
      const message = String(data.get('message') || '').trim();
      const subject = encodeURIComponent(`Orynx demo request — ${product}`);
      const body = encodeURIComponent([
        `Name: ${name}`,
        `Work email: ${email}`,
        `Company / clinic: ${company}`,
        phone ? `Phone: ${phone}` : '',
        `Product: ${product}`,
        '',
        message || 'Please contact me to arrange a demo.'
      ].filter(Boolean).join('\n'));

      if (status) status.textContent = 'Your email app is opening with the request prepared.';
      window.location.href = `mailto:hello@orynx.ai?subject=${subject}&body=${body}`;
    });
  }
})();
