//footer.
function addfooter()
{
var fdd = document.createElement("div");
fdd.className = "beforefooter";
fdd.id="footersection";

// "useful links" section
var usefulLinksHeading = document.createElement("h1");
usefulLinksHeading.textContent = "Useful links";

// Appending all elements to "fdd"
fdd.appendChild(usefulLinksHeading);

// Appending "fdd" to the body or any other target element
document.body.appendChild(fdd);

var fd=document.createElement("div");
// Create individual paragraphs with links
var contributorsLink = document.createElement("p");
var contactLink = document.createElement("p");

// Create anchor elements and set their attributes
var contributorsAnchor = document.createElement("a");
contributorsAnchor.href = "/blackjack/contributors";
contributorsAnchor.textContent = "Contributors";
contributorsLink.appendChild(contributorsAnchor);

var contactAnchor = document.createElement("a");
contactAnchor.href = "/blackjack/contact";
contactAnchor.textContent = "Contact";
contactLink.appendChild(contactAnchor);

// Append paragraphs to the existing "fd" container
fd.appendChild(contributorsLink);
fd.appendChild(contactLink);
document.body.appendChild(fd);
// Create a footer element
var footerElement = document.createElement("footer");

// Create a paragraph element
var copyrightParagraph = document.createElement("p");

// Create a copyright text node
var copyrightText = document.createTextNode("Copyright \u00A9 " + birthyear + "-" + new Date().getFullYear() + ', ');

// Create an anchor element
var anchorElement = document.createElement("a");
anchorElement.href = "/";
anchorElement.textContent = "Harry Min Khant.";

// Append the copyright text and anchor element to the paragraph
copyrightParagraph.appendChild(copyrightText);
copyrightParagraph.appendChild(anchorElement);

// Create another text node for "All rights reserved."
var rightsReservedText = document.createTextNode(" All rights reserved.");

// Append the rights reserved text to the paragraph
copyrightParagraph.appendChild(rightsReservedText);

// Append the paragraph to the footer
footerElement.appendChild(copyrightParagraph);

// Append the footer to the body or any other target element
document.body.appendChild(footerElement);
}//End