// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

	// ELEMENTS
	const ltHeader              = document.createElement('div');
	const ltDate                = document.createElement('span');
	const ltHeadingOne          = document.createElement('h1');
	const ltTemp                = document.createElement('span');

	// CLASSES
	ltHeader.classList.add('header');
	ltDate.classList.add('date');
	ltTemp.classList.add('temp');

	// APPENDS
	ltHeader.appendChild(ltDate);
	ltHeader.appendChild(ltHeadingOne);
	ltHeader.appendChild(ltTemp);

	// CONTENT
	ltDate.textContent          = `March 28, 2019`;
	ltHeadingOne.textContent    = `Lambda Times`;
	ltTemp.textContent          = `98°`;

	return ltHeader;
}

let siteHeader = document.querySelector('.header-container');
siteHeader.appendChild(Header());