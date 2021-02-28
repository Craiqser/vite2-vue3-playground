const docEl = document.documentElement;

export function listenersAdd(dndStartHandler, dndMoveHandler, dndStopHandler) {
	docEl.addEventListener('mousedown', dndStartHandler, true);
	docEl.addEventListener('touchstart', dndStartHandler, true);

	docEl.addEventListener('mousemove', dndMoveHandler, true);
	docEl.addEventListener('touchmove', dndMoveHandler, true);
	
	docEl.addEventListener('mouseup', dndStopHandler, true);
	docEl.addEventListener('touchend', dndStopHandler, true);
};

export function listenersRemove(dndStartHandler, dndMoveHandler, dndStopHandler) {
	docEl.removeEventListener('mousedown', dndStartHandler, true);
	docEl.removeEventListener('touchstart', dndStartHandler, true);

	docEl.removeEventListener('mousemove', dndMoveHandler, true);
	docEl.removeEventListener('touchmove', dndMoveHandler, true);

	docEl.removeEventListener('mouseup', dndStopHandler, true);
	docEl.removeEventListener('touchend', dndStopHandler, true);
};
