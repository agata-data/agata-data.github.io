// Cards below the first screen fade in as you scroll to them. Cards already on screen stay as they are.
(function () {
	if (!('IntersectionObserver' in window)) return;
	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	var cards = document.querySelectorAll('#main > .post, #main > .posts > article, #footer');
	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (e.isIntersecting) {
				e.target.classList.add('in');
				io.unobserve(e.target);
			}
		});
	}, { threshold: 0.12 });

	cards.forEach(function (el) {
		if (el.getBoundingClientRect().top > window.innerHeight) {
			el.classList.add('reveal');
			io.observe(el);
		}
	});
})();
