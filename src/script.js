"use strict";

document.getElementById("reviewForm").onsubmit = addComment;

function addComment(evt) {
	evt.preventDefault();

	let elem = document.getElementById("comTl").cloneNode(true);
	elem.id = undefined;
	elem.hidden = false;
	elem.querySelector("h5").textContent = document.getElementById("reviewTitle").value;
	elem.querySelector("p").textContent = document.getElementById("reviewText").value;

	let nameTxt = document.getElementById("reviewName").value;
	if (nameTxt) {
		elem.querySelector("footer").textContent = nameTxt;
	} else {
		elem.querySelector("footer").textContent = "Anonymous";
	}

	document.getElementById("reviewsRow").append(elem);
}



