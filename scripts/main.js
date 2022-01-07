let myImage = document.querySelector('img');

myImage.onclick = function() {

	let mySrc = myImage.getAttribute ('src');

	if(mySrc === 'images/firefox-icon.png') {

		myImage.setAttribute('src','images/fox.gif');

	}	else {

		myImage.setAttribute('src','images/firefox-icon.png');

	}
}

let myHeading = document.querySelector('h1');

function setUserName() {

	let myName = prompt('Please enter your name, fellow human!');

	if (!myName) {

		noUserName();

	} else {

		localStorage.setItem ('name', myName);

		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}

}

function noUserName() {

	let myName = prompt('You might have forgotten something :)');

	if (!myName) {

		noUserName();

	} else {

		localStorage.setItem ('name', myName);

		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}

}


function showFox() {

	document.getElementById('firefox-icon.png').style.display = "inherit";

}


function hideFox() {

	document.getElementById('firefox-icon.png').style.display = "none";
}


if(!localStorage.getItem('name')) {

  setUserName();

} else {

  let storedName = localStorage.getItem('name');

  myHeading.textContent = 'Mozilla is cool, ' + storedName;

}

myButton.onclick = function() {

  setUserName();

}