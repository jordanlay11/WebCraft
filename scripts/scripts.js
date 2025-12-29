//Navigate to sections smoothly
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (!href || !href.startsWith('#')) return;
		const targetId = href.substring(1);
		const targetEl = document.getElementById(targetId);
		if (!targetEl) return;
		e.preventDefault();
		const header = document.querySelector('header');
		const headerHeight = header ? header.offsetHeight : parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 100;
		const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
		window.scrollTo({ top: targetY, behavior: 'smooth' });
	});
});