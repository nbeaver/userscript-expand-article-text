minified.js : bookmarklet.js Makefile
	yui-compressor bookmarklet.js -o minified.js

.PHONY : clean
clean:
	rm -f -- minified.js

.PHONY : lint
lint :
	gjslint --nojsdoc bookmarklet.js expandAllText.user.js
