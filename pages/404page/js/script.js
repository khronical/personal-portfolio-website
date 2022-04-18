let theme = window.localStorage.getItem('likes-sun');
let scheme = window.matchMedia(`(prefers-color-scheme: light)`);

if (theme === 'no') {
	document.body.classList.add('dark');
    console.log('client hates the sun :(');
} else if (theme === 'yes') {
	document.body.classList.remove('dark');
    console.log('client likes the sun :D');
} else {
	if (scheme) {
		document.body.classList.add('dark');
		console.log('client is new, but prefers dark');
	} else {
		document.body.classList.remove('dark');
		console.log('client is new, but prefers light');
	}
}