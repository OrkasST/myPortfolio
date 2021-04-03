/*
function closeMenu() {
	let open = document.getElementById('menuFirst');
	open.querySelector('.left').style.transform = 'translateX(0) translateZ(0)';
	open.querySelector('.right').style.transform = 'translateX(0) translateZ(0)';
}
*/



let surveyForm = document.querySelector('.guestForm');
console.log(surveyForm);  
const customersList = document.getElementById('customersList');
console.log(customersList);  
const customers = document.getElementById('customers');
console.log(customers);  

let guests = [],	
	index = 0;

function openForm() {
	surveyForm.style.display = 'block';
}

function closeForm() {
	surveyForm.style.display = 'none';
}


let guestName = '',
		guestEmail = '',
		guestAge = '';

function formResult(event) {
	event.preventDefault();
	console.log(index);

	guestName = surveyForm.querySelector('#name').value;
	guestSurname = surveyForm.querySelector('#surname').value;
	guestAge = surveyForm.querySelector('#age').value;
	guestRoom = surveyForm.querySelector('#room-number').value;
	guestEmail = surveyForm.querySelector('#email').value;

	console.log(`Name: ${guestName}\nSurname: ${guestSurname}\nEmail: ${guestEmail}\nAge: ${guestAge}\nRoom: ${guestRoom}`);
	guests[index] = {name: guestName, surname: guestSurname, email: guestEmail, age: guestAge, room: guestRoom, ind: ''};
	++index;
	console.log(guests);
	console.log(index);

	writeList();
}

function writeList() {
	customers.innerHTML = '<ol>' + guests.map(function (guest) {
	return '<li>' + guest.name + ' ' + guest.surname + '<br>' +
	 'Age: ' + guest.age + '<br>' + 
	 'E-mail: ' + guest.email + '<br>' + 
	 'Room: ' + guest.room + ' ' + guest.ind + '<hr>' + 
	 '</li>' + '<br>';
}).join('') + '</ol>';
}

const startButton = document.getElementById('startButton');
startButton.onclick = function (e) {
	e.preventDefault();
}

const newCustomerButton = document.getElementById('newCustomerButton');
const customerListButton = document.getElementById('customerListButton');

newCustomerButton.addEventListener('click', () => {
	openForm();
});
customerListButton.addEventListener('click', () => {
	customersList.classList.remove('_hidden');
});

//smoothScroll.scrollTo(this.getAttribute("href"), 1e3)

//var app = document.querySelector('#app');
//app.innerHTML = '<ul>' + wizards.map(function (wizard) {
//	return '<li>' + wizard + '</li>';
//}).join('') + '</ul>';


let customerIndex = document.getElementById('customerIndex');

function deleteCustomer() {
	let ind = customerIndex.value - 1;
	if (ind < 0 || ind >= guests.length) {
		alert('Wrong number');
	} else {
		guests.splice(ind, 1);
	}
	writeList();
}	

function changeCustomerInfo() {
	let ind = customerIndex.value - 1;
	if (ind < 0 || ind >= guests.length) {
		alert('Wrong number');
	} else {
		let chgName = guests[ind].name,
			chgSurname = guests[ind].surname,
			chgAge = guests[ind].age,
			chgMail = guests[ind].email,
			chgRoom = guests[ind].room;

		guests[ind].name = '<input type="text" id="chgName" placeholder="' + chgName +'">';
		guests[ind].surname = '<input type="text" id="chgSurname" placeholder="' + chgSurname +'">';
		guests[ind].age = '<input type="text" id="chgAge" placeholder="' + chgAge +'">';
		guests[ind].email = '<input type="text" id="chgMail" placeholder="' + chgMail +'">';
		guests[ind].room = '<input type="text" id="chgRoom" placeholder="' + chgRoom +'">';
		guests[ind].ind = '<button onclick="submitChanges(' + ind + ')">Submit changes</button>';

		//document.getElementById('chgName').value = chgName;
		//document.getElementById('chgSurname').value = chgSurname;
		//document.getElementById('chgAge').value = chgAge;
		//document.getElementById('chgMail').value = chgMail;
		//document.getElementById('chgRoom').value = chgRoom;
	}
	writeList();
}	

function submitChanges(index) {
	guests[index].name = document.getElementById('chgName').value;
	guests[index].surname = document.getElementById('chgSurname').value;
	guests[index].age = document.getElementById('chgAge').value;
	guests[index].email = document.getElementById('chgMail').value;
	guests[index].room = document.getElementById('chgRoom').value;
	guests[index].ind = '';
	writeList();
}