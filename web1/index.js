function main() {

	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	class Shape {
		
		draw(ctx) {
			console.log('draw shape');
		}

	}

	class Triangle extends Shape {
		draw(ctx) {
			console.log('Draw Triangle');
			ctx.save();
			ctx.strokeStyle = '#ff0000';
			ctx.fillStyle = '#00ff00';
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(100, 100);
			ctx.lineTo(150, 100);
			ctx.lineTo(100, 150);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			ctx.restore();
		}
	}

	class Rectangle extends Shape {
		draw(ctx) {
			console.log('Draw Rectangle');
			ctx.beginPath();
			ctx.rect(20, 20, 100, 100);
			ctx.closePath();
			ctx.stroke();
		}
	}

	Object.assign(canvas.style, {
		position: 'fixed',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: window.innerWidth,
		height: window.innerHeight,
		'z-index': 999
	});
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.append(canvas);

	const tri = new Triangle();
	tri.draw(ctx);

	const rect = new Rectangle();
	rect.draw(ctx);
};

window.onload = main;
