// Simple section navigation
document.addEventListener('DOMContentLoaded', () => {
	const sections = Array.from(document.querySelectorAll('section'));
	const defaultId = 'home';

	const idFromHash = () => (location.hash && location.hash.startsWith('#') ? location.hash.slice(1) : defaultId);

	function show(id) {
		const active = id || defaultId;
		sections.forEach(s => s.hidden = s.id !== active);
	}

	// initial
	show(idFromHash());

	// nav links that use hashes
	document.querySelectorAll('nav a[href^="#"]').forEach(a => {
		a.addEventListener('click', (e) => {
			e.preventDefault();
			const id = (a.getAttribute('href') || '#'+defaultId).slice(1) || defaultId;
			// update URL and show section
			location.hash = '#' + id;
			show(id);
		});
	});

	// respond to back/forward and direct hash changes
	window.addEventListener('hashchange', () => show(idFromHash()));
});

