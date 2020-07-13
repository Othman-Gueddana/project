var books2=[{
img:"https://m.media-amazon.com/images/I/41Mdw5VWLcL.jpg",
name:"The Genealogy Of Morals",
pdf:"the Genealogy of Morality.pdf"
},
{
img:"https://images-eu.ssl-images-amazon.com/images/I/51Wc9RdWbJL._AC_UL320_SR206,320_.jpg",
name:"The Last Days Of Socrates",
pdf:"Plato_ The Last Days of Socrates.pdf"
},
{
img:"https://m.media-amazon.com/images/I/51K7X-T3qNL.jpg",
name:"NicoMachean Ethics",
pdf:"Aristotle's Nicomachean Ethics.pdf"
},
{
img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373585681l/18189134.jpg",
name:"Discourses,Fragments,Handbook",
pdf:"Discourses, Fragments, Handbook.pdf"
},
{
img:"https://images-na.ssl-images-amazon.com/images/I/A1YajYGMZzL.jpg",
name:"The Consolation Of Philosophy",
pdf:"Consolation of Philosophy.pdf"
},
{
img:"https://images-na.ssl-images-amazon.com/images/I/51YSf4h9tEL.jpg",
name:"Beyond Good & Evil",
pdf:"beyond-good-and-evil.pdf"
},
{
img:"https://images.penguinrandomhouse.com/cover/9780812968255",
name:"Meditation",
pdf:"meditation.pdf"
},
{
img:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625582782/the-critique-of-pure-reason-9781625582782_hr.jpg",
name:"The Critique Of Pure Reason",
pdf:"THE CRITIQUE OF PURE REASON.pdf"
}
];

document.getElementById('WellDone').innerHTML = `
<h1 class='Title'>Philosophy</h1>
<div class="bk">
	<table>
	<tr> 
${books2.map(function(booking){
return`
    <td>
	<img class='imgStyle' src="${booking.img}">	
	<h4 class="text2">${booking.name}</h4>
	<div class='btn'>
	<a href="${booking.pdf}" download>
	<button class='center'><strong>download book</strong></button>
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