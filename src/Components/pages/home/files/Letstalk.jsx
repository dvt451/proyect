import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import WordShuffler from './WordShuffler';
import { useTranslation } from 'react-i18next';

export default function Letstalk({
	mainText,
	mainTextBottom,
	mainTextTop,
	buttonText,
	bottomText
}) {
	const { t } = useTranslation();
	const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
	const [buttonActive, setButtonActive] = useState(false);

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [randomPositions, setRandomPositions] = useState([]);

	const [shuffling, setShuffling] = useState(false);

	const handleMouseMove = (e) => {
		if (window.innerWidth > 991) {
			setMousePosition({ x: e.clientX, y: e.clientY });
		}
	};
	const getRandomPositionLeft = () => Math.floor(Math.random() * window.innerWidth); // Adjust the maximum value as needed
	const getRandomPositionTop = () => Math.floor(Math.random() * window.innerHeight); // Adjust the maximum value as needed
	const handleHover = (e) => {
		if (window.innerWidth > 991) {
			const rect = e.target.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setRipplePosition({ x, y });
			setButtonActive(true);
			const canvas = canvasRef.current;
			ctx = canvas.getContext("2d");
			resizeReset();
			animationLoop();
			//    //   ----------------------------
			//    // Generate random initial positions for the parallax items when the button is hovered
			//    const positions = Array.from({ length: 50 }, () => ({
			//      left: getRandomPositionLeft(),
			//      top: getRandomPositionTop(),
			//    }));
			//    setRandomPositions(positions);
			setShuffling(!shuffling);
		}
	};
	const handleButtonLeave = () => {
		setButtonActive(false);
	};
	//  useEffect(() => {
	//    if(window.innerWidth < 991){
	//       const getRandomPositionLeft = () => Math.floor(Math.random() * window.innerWidth); // Adjust the maximum value as needed
	//       const getRandomPositionTop = () => Math.floor(Math.random() * window.innerHeight); // Adjust the maximum value as needed

	//    //   ----------------------------
	//    // Generate random initial positions for the parallax items when the button is hovered
	//    const positions = Array.from({ length: 50 }, () => ({
	//      left: getRandomPositionLeft(),
	//      top: getRandomPositionTop(),
	//    }));
	//    setRandomPositions(positions);
	//    }

	//  }, [])

	//  -------------------------------------

	const canvasRef = useRef(null);
	let ctx, w, h, circles;
	const canvasWidth = window.innerWidth; // Set a fixed width for the canvas
	const canvasHeight = window.innerHeight; // Set a fixed height for the canvas
	let colors = [
		[81, 91, 212],
		[129, 52, 175],
		[221, 42, 123],
		[254, 218, 119],
		[245, 133, 41]
	];

	useEffect(() => {
		if (window.innerWidth < 991) {

			const canvas = canvasRef.current;
			ctx = canvas.getContext("2d");
			resizeReset();
			animationLoop();
		}
	}, []);

	function resizeReset() {
		w = canvasWidth; // Set the canvas width to a fixed value
		h = canvasHeight; // Set the canvas height to a fixed value
		circles = [];
		createObject();
	}

	function createObject() {
		for (let i = 0; i < w * h * 0.00005; i++) {
			circles.push(new Circle(i));
		}
	}

	function animationLoop() {
		ctx.clearRect(0, 0, w, h);
		ctx.globalCompositeOperation = "lighter";
		drawScene();
		requestAnimationFrame(animationLoop);
	}

	function drawScene() {
		circles.forEach((circle) => {
			circle.update();
			circle.draw();
		})
	}
	function easeInOutLinear(x) {
		return x; // Linear transition, returns the same value as input
	}

	function easeInOutQuad(x) {
		return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
	}

	class Circle {
		constructor(i) {
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.radius = 10;
			this.color = colors[i % colors.length];
			this.alpha = Math.random() * 0.5 + 0.2;
			this.tick = 0;
			this.ttl = 0;
		}
		draw() {
			const size = 10; // Set the width and height of the plus sign
			ctx.beginPath();
			ctx.moveTo(this.x - size / 2, this.y); // Start from the left point of the plus sign
			ctx.lineTo(this.x + size / 2, this.y); // Draw to the right point
			ctx.moveTo(this.x, this.y - size / 2); // Move to the top point
			ctx.lineTo(this.x, this.y + size / 2); // Draw to the bottom point
			ctx.strokeStyle = `rgba(0, 0, 0,1)`; // Set color to black and opacity
			ctx.lineWidth = 1.5; // Set line width for the plus sign
			ctx.stroke();
			ctx.closePath();
		}
		update() {
			if (this.tick >= this.ttl) {
				this.setTarget();
			}
			let progress = this.tick / this.ttl;

			this.x = this.startX + (this.targetX - this.x) * easeInOutLinear(progress);
			this.y = this.startY + (this.targetY - this.y) * easeInOutLinear(progress);

			this.tick++;
		}
		setTarget() {
			this.startX = this.x;
			this.startY = this.y;
			this.targetX = this.x + (Math.random() * 200 - 100);
			this.targetY = this.y + (Math.random() * 200 - 100);
			this.tick = 0;
			this.ttl = Math.random() * 180 + 180; // Change the range and adjust the values as needed
		}
	}
	//   ----------------------------------------------


	return (
		<section className='home__letstalk letstalk'>
			<div className={buttonActive ? 'letstalk-layer layer-active' : 'letstalk-layer'}>
				<div className="board"></div>
				<div className="back-color"></div>
				<div className="parallax-container"
					style={{
						transform: window.innerWidth > 991 ? buttonActive ? `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)` : '' : 'translate(0)',
						// left: window.innerWidth > 991 ? buttonActive ? `${position.left}px` : '' : `${position.left}px`,
						// top: window.innerWidth > 991 ? buttonActive ? `${position.top}px` : '' : `${position.top}px`,
					}}
				>
					<canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
					{randomPositions.map((position, index) => (
						<span key={index}
							className={`parallax-item item${index + 1}`}
							style={{
								transform: window.innerWidth > 991 ? buttonActive ? `translate(${mousePosition.x / index}px, ${mousePosition.y / index}px)` : '' : 'translate(0)',
								left: window.innerWidth > 991 ? buttonActive ? `${position.left}px` : '' : `${position.left}px`,
								top: window.innerWidth > 991 ? buttonActive ? `${position.top}px` : '' : `${position.top}px`,
							}}>
							+
						</span>

					))}
				</div>
			</div>
			<div className="letstalk__container">

				<div className='letstalk__content'
					style={{
						borderInline: buttonActive ? 'none' : '0.0625rem solid #333'
					}}
				>
					<p className={!buttonActive ? "letstalk__subtitle" : "letstalk__subtitle layer-active"}>{t('homepage.lets-talk.subtitle')}</p>
					{
						mainText ?
							<div className={!buttonActive ? "letstalk__title" : "letstalk__title layer-active"}>
								{mainText}
							</div>
							: <div className={!buttonActive ? "letstalk__title" : "letstalk__title layer-active"}>
								{mainTextTop}<br />{mainTextBottom}
							</div>
					}

					<Link
						onMouseMove={handleMouseMove}
						onMouseEnter={handleHover}
						onMouseLeave={handleButtonLeave}
						className={buttonActive ? 'letstalk__link layer-active' : 'letstalk__link'}
						to='https://wa.me/message/3TZIS5GQLU6VH1' target="_blank">

						<span className='letstalk__link_text'>
							<WordShuffler
								buttonActive={buttonActive}
								text={shuffling ? buttonText : buttonText + " "}
								textColor="#000"
								timeOffset={1}
								mixCapital={true}
								mixSpecialCharacters={true}
							/>
						</span>
						<span className={buttonActive ? 'letstalk__link_layer layer-active' : 'letstalk__link_layer'}
							style={{
								left: ripplePosition.x + 'px',
								top: ripplePosition.y + 'px',
							}}
						></span>

					</Link>
					<p className={!buttonActive ? "letstalk__text" : "letstalk__text layer-active"}>{bottomText}</p>
				</div>
			</div>
		</section>
	)
}