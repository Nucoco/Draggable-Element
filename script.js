const dragElement = document.getElementById("dragme")
const grabPosition = document.getElementById("dragme-header")
let mouseX, mouseY, dx, dy = 0

const drag = () => {
	grabPosition.onmousedown = (e) => {
		e = e || window.event
		e.preventDefault()

		// mouse cursor position
		mouseX = e.clientX
		mouseY = e.clientY

		// drop
		document.onmouseup = () => {
			document.onmouseup = null
			document.onmousemove = null
		}

		// dragging
		document.onmousemove = (e) => {
			e = e || window.event
			e.preventDefault()

			// calculate
			dx = mouseX - e.clientX;
			dy = mouseY - e.clientY;
			mouseX = e.clientX;
			mouseY = e.clientY;

			// set new position
			dragElement.style.top = (dragElement.offsetTop - dy) + "px";
			dragElement.style.left = (dragElement.offsetLeft - dx) + "px";
		}
	}
}

drag()
