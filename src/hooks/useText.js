export function useCustomText(type) {
	if (type === 'shorten') {
		return (txt, len = 100) => {
			if (txt.length > len) {
				return txt.slice(0, len) + '...';
			} else {
				return txt;
			}
		};
	}
}
