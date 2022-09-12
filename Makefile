minified.js : bookmarklet.js Makefile
	yui-compressor bookmarklet.js -o minified.js

clean:
	rm minified.js
