var buttons = function() {

	var buttonText = "";

	var buttonClick = function(){
		alert('button clicked');
	};

	var buttonPressed = $('button').on('click', function(event) {
		event.preventDefault();
		buttonText = "ive been pressed";
		$(this).html(buttonText);
	});

	return {
		buttonClick: buttonClick,
		buttonPressed: buttonPressed
	}

}();

var Person = function(name, surname) {
	this.name = name;
	this.surname = surname;
	this.printName = function() {
		alert(this.name + " " + this.surname);
	};
};


$(document).ready(function($) {

	// var obj1 = {
	// 	name:"Raza",
	// 	surname: "Butt"	
	// };

	var Raza = new Person("Raza", "Butt");

	Person.prototype.nationality = "English";

	console.log(Raza.nationality);
	console.log(Raza);


	// var ps = $('p');
	// console.log(ps);

	// ps.each(function(index, val) {
	// 	 alert($(this).text());;
	// });
});
