export function clickOutside(node: HTMLElement | SVGElement) {
	const handleClick = (e: MouseEvent) => {
		const target = e.target as any;
		if (node && !node.contains(target) && !e.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('click_outside', node as any)
			)
		}
	}
	document.addEventListener('click', handleClick, true);
	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}