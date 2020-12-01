jsbin.gimeyic.js


const webSite = {
	page: "JS Homework: The DOM",
	description: "Homework Assignment #7",
	brand: 'T.U.N.J.A.Y',
	copyright: "Copyright (c) 2019 by Tunjay Huseynzadeh"
};

const brand = document.querySelector(".brand");
brand.innerText = webSite.brand;
const slogan = brand.parentNode.appendChild(document.createElement('span'));
slogan.innerText = 'I do love JS ...';

function addTagElement(node, tag, content=''){
	node.appendChild(document.createElement(tag)).innerText=content;
}

function css(node, cssStyle){
	for (key in cssStyle){
		node.style[key] = cssStyle[key];
	}
}

const sloganStyle = {color:'yellow', fontSize: '60px', fontFamily: 'Palatino, serif', fontStyle: 'italic'};
css(slogan, sloganStyle);


const sectionJs = document.getElementById('js');
const footer = document.querySelector('.footer');
addTagElement(sectionJs, 'h1', webSite.page);
addTagElement(sectionJs, 'h2', webSite.description);
addTagElement(footer, 'p', webSite.copyright);
css(footer, {fontWeight: 'bold', textAlign: 'right'})

function hex(){
	const rgb = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	let hex='';
	for(let i = 0; i < 6; i++){
		hex += rgb[Math.floor(Math.random() * rgb.length)];
	}
	return "#"+hex;
}

const rectangleWrapper = sectionJs.appendChild(document.createElement('div'));
rectangleWrapper.id = 'rectangleWrapper';
let ids = [];

for(let i = 0; i<10; i++){
	const div = rectangleWrapper.appendChild(document.createElement('div'));
	const color = hex();
	let id = `dd${i+1}`;
	ids.push(id);
	div.id=id;
	div.className = 'divClass';
	let width = Math.floor(Math.random() * 10) + 113;
	let height = Math.floor(Math.random() * 90) + 200;
	div.innerHTML = 'w: '+width+'<br>h: '+height+'<br>hex '+color;

	css(div, {width: `${width}px`, height: `${height}px`, backgroundColor: color, display: 'inline-block', marginRight: '4px', marginTop: '50px', fontSize: '15px', padding: '2px', fontWeight: 'bold', color: 'yellow'});
}

css(rectangleWrapper, {padding: '50px 50px 0 50px'});
console.log('Here are the rectangle IDs: '+ ids.join(','));

const title = document.querySelector("head title");
title.innerText = document.querySelector("h1").innerText;






/*
EZEBUIRO
UCHECHUKWU
VINCENT 
*/

