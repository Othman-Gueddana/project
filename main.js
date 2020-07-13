var books=[{
img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIyzgZ90ZckAWqLVYb3EINTvMvrGTX2_TZwYqjo4BxXPUaGmOq",
name:"Steve Jobs",
pdf:"Steve Jobs.pdf"
},
{
img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp",
name:"The Immortal Life Of Henrietta Lacks",
pdf:"The Immortal Life of Henrietta Lacks.pdf"
},
{
img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQX681jhWJts9g_5js0iwzo_vWZfpd9qfDKFgo1Tyj41jorQtHy",
name:"Malcolm X",
pdf:"Malcolm X.pdf"	
},
{
img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9ZikR2Lf-QTCT5qTRuAzWaEJ8iR4PcOM8J56S-0XvM5P7R-n_",
name:"Unbroken",
pdf:"Unbroken A World War II.pdf"
},
{
img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmd3rKR4Dw8o7nyWFX-hu9Lv5nUtijGXZkyvaDrTti5DFIcyOi",
name:"Becoming",
pdf:"Becoming.pdf"
},
{
img:"https://m.media-amazon.com/images/I/51Kao7Rq4jL.jpg",
name:"Benjamin Franklin",
pdf:"Benjamin Franklin.pdf"
},
{
img:"https://images-na.ssl-images-amazon.com/images/I/716ZaUB-56L.jpg",
name:"Into The Wild",
pdf:"Into the Wild.pdf"
},
{
img:"https://images-na.ssl-images-amazon.com/images/I/61gy-7MQLkL.jpg",
name:"The Diary Of a Young Girl",
pdf:"the diary of a young girl.pdf"
}
];

document.getElementById("progress").innerHTML = `
<h1 class='Title'>Biography</h1>
<div >
	<table>
	<tr> 
${books.map(function(book){
return`
    
	
	<td>
	<img class='imgStyle' src="${book.img}">	
	<h4 class="text2">${book.name}</h4>
	<div class='btn'>
	<a href="${book.pdf}" download>
	<button><strong>download book</strong></button>
	</a>
	</div>
	</td>
	
 	`
}).join('')
}
</tr>
    </table>
	</div>

`

