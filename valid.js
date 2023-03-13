
function validateForm() {
	let x = document.ValidTeszt.nev.value;
	if (x === "") {
    	alert("A mező kitöltése kötelező!");
    	return false;
	}
return true;
}
