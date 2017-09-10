let form = document.createElement(`form`);

let inputName = document.createElement(`input`);


let lableName=document.createElement(`lable`);
lableName.textContent=`Name:`;

lableName.appendChild(inputName);

form.appendChild(lableName);

let inputSurname = document.createElement(`input`);



	let lableSurname=document.createElement(`lable`);
lableSurname.textContent=`Surname:`;

lableSurname.appendChild(inputSurname);

form.appendChild(lableSurname);

document.body.appendChild(form);
form.setAttribute(`onsubmit`, `return false`);





class user{
constructor(name,surname){
	this.name=name;
	this.surname=surname;

}




}


let button = document.createElement(`button`);

button.textContent = `send form and register`;
document.body.appendChild(button);
button.style.position=`absolute`;
button.style.left=50+`px`;
let users=[];

function buttonClick() {
	users.push(new user(inputName.value,inputSurname.value));

};
button.addEventListener(`click`, buttonClick)


/*for (let i=0;i!=users.length;i++){console.log(users[i])}*/