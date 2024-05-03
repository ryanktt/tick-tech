//AJAX
let loadCount = 0;
document.querySelector('.load-more').addEventListener('click', (e) => {
	loadCount = loadCount + 12;
	const request = new XMLHttpRequest();
	request.open('GET', '/data?loadCount=' + loadCount, true);

	request.onload = function () {
		//add posts to the html when load button is clicked
		if (request.status == 200 && request.readyState == 4) {
			const data = JSON.parse(this.responseText);
			console.log(data.length);
			data.reverse().forEach((cur, i) => {
				document.querySelector('.invisible').insertAdjacentHTML(
					'afterend',
					`<div class="box">
                <a href="/post/${cur.id}"><img src="${cur.imageUrl}" alt="image"></a> 
                <a href="/post/${cur.id}"><h2>${cur.title}</h2></a> 
                <p>${cur.firstParagraph}</p> 
                </div>`,
				);
			});
			//make button disapear when there's no more posts to be loaded
			if (data.length < 12) {
				document.querySelector('.load-more').classList.add('disapear');
			}
		}
	};
	request.send();
});
