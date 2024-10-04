console.log('script' + (window.self !== window.top ? ' iframe' : ''), window.location.search, window.location.hash);
console.log('getter' + (window.self !== window.top ? ' iframe' : ''), getLocation().search, getLocation().hash);
