Consider this journal article:

https://doi.org/10.1103/PhysRevB.97.085402

When I open it, if I scroll down it doesn't show the actual article HTML, it just says "Article Text" and "Click to Expand". If I click the red "HTML" button to show the full-text, it expands the "Introduction" and the "Acknowledgements", but not the "Methods", "Results", or "Conclusions". When I click on "Methods", I then have to also open the subsections "Diamond Samples" and "NV Measurements". When I click on NV measurements there are 8 sub-sub-sections that I have to individually expand. I want a way to recursively expand all the subsections. The HTML actually isn't loaded, so I can't e.g. search it until it's all expanded.

Looking at the structure, this is possible since all the divs have class "expandable", although the click method needs to be called on their child element, which is e.g. an H5 or H6 element.

I could also just use the PDF version, but sometimes it's easier to search for things or copy and paste from HTML than it is from PDF.

Github description: Expand every node of article text in HTML version of journal articles.
