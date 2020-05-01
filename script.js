const container = document.getElementById('container');
for(let i =1; i<=64 ;i++){
	let row =document.createElement('div');
	row.className = 'row';
	row.style.display = 'block';
	for(let i = 1; i <= 64; i++){
		let childdiv = document.createElement('div');
		childdiv.className = 'column';
		childdiv.style.width = (100/64)+'%';
		childdiv.style.paddingTop ='20px';
		childdiv.style.display = 'inline-block';
		//childdiv.style.outline = '1px solid red';
		//childdiv.style.outlineOffset = '-1px'
		row.appendChild(childdiv);
	}
	container.appendChild(row);
}
const columns = document.getElementsByClassName('column');

for (const element of columns){
	element.addEventListener("mouseleave",(event) =>{
		event.target.style.background = 'black';
	});
}