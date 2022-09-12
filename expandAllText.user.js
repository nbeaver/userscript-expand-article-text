// ==UserScript==
// @name        Expand journal article text.
// @description Expand journal article text on APS journals.
// @grant       none
// @match       http://journals.aps.org/*
// @match       https://journals.aps.org/*
// @author      Nathaniel Morck Foley-Beaver
// @namespace   https://github.com/nbeaver/
// @license     MIT
// @namespace   https://github.com/nbeaver/
// @homepageURL  https://github.com/nbeaver/userscript-expand-article-text
// @version     0.1
// ==/UserScript==

function expandAllText() {
  expandable_elems = document.getElementsByClassName('expandable');
  for (var i = 0; i < expandable_elems.length; i++) {
    elem = expandable_elems[i];
    if (elem.lastChild.classList.contains('expandable-body')) {
      // Already expanded, do nothing.
    } else {
       first_child = elem.children[0];
       first_child.click();
    }
  }
}
expandAllText();
