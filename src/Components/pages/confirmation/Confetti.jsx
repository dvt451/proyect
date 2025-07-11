import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function RandomConfettiEffect() {
	useEffect(() => {
		const random = Math.random() < 0.5 ? 'burst' : 'fireworks';

		const timer = setTimeout(() => {
			if (random === 'burst') {
				// 🎉 Burst style
				const count = 200;
				const defaults = {
					origin: { y: 0.7 },
				};

				function fire(particleRatio, opts) {
					confetti({
						...defaults,
						...opts,
						particleCount: Math.floor(count * particleRatio),
					});
				}

				fire(0.25, { spread: 26, startVelocity: 55 });
				fire(0.2, { spread: 60 });
				fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
				fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
				fire(0.1, { spread: 120, startVelocity: 45 });
			} else {
				// 🎆 Fireworks style
				const duration = 5 * 1000;
				const animationEnd = Date.now() + duration;
				const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

				function randomInRange(min, max) {
					return Math.random() * (max - min) + min;
				}

				const interval = setInterval(() => {
					const timeLeft = animationEnd - Date.now();
					if (timeLeft <= 0) {
						clearInterval(interval);
						return;
					}

					const particleCount = 50 * (timeLeft / duration);
					confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
					confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
				}, 250);
			}
		}, 500); // wait 0.5 seconds

		return () => clearTimeout(timer); // cleanup
	}, []);

	return null;
}
