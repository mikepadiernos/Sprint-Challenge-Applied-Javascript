// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

console.log('Promises: Tabs',
	axios
		.get('https://lambda-times-backend.herokuapp.com/topics')
);

function tabs(obj) {

	// ELEMENTS
	const tTab                      = document.createElement('div');

	// CLASSES
	tTab.classList.add('tab');

	// CONTENT
	tTab.textContent                = obj;

	return tTab;
}

let tabEntryPoint                 = document.querySelector('.topics');

axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then(response => {
		const topics = response.data.topics;
		console.log('response: topics', topics);
		// tabEntryPoint.appendChild(tabs(topics));
		topics.forEach(i => {
			let ltTopics = tabs(i);
			tabEntryPoint.appendChild(ltTopics);
		})
	})
	.catch(error => {
		if (error.includes('Network Error')) {
			console.log('Network Error');
		}
		console.log('No Data Returned');
	});