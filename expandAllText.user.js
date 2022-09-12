// ==UserScript==
// @name        Expand journal article text.
// @description Expand journal article text on APS journals.
// @grant       none
// @include     http*://journals.aps.org/*
// @license     MIT
// @namespace   https://github.com/nbeaver/
// @supportURL  https://github.com/nbeaver/userscript-expand-article-text
// @version     0.1
// ==/UserScript==

function expandAllText() {
  expandable_elems = document.getElementsByClassName("expandable")
  for (var i = 0; i < expandable_elems.length; i++) {
    elem = expandable_elems[i]
    if (elem.lastChild.classList.contains("expandable-body")) {
      // Already expanded, do nothing.
    } else {
       first_child = elem.children[0];
       first_child.click();	 
    }
  }
}
expandAllText();
