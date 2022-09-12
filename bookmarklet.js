function f() {
    // This is the code that actually gets executed by the bookmarklet.
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
// This is the code that sets up the bookmarklet.
document.getElementById("bookmarklet").href = "javascript:(" + f.toString() + ")();"
// https://juhukinners.wordpress.com/2009/01/08/how-to-write-a-bookmarklet/
// TODO: check length limits?
