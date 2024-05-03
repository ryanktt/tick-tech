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

			data.reverse().forEach((cur, i) => {
				document.querySelector('.invisible').insertAdjacentHTML(
					'afterend',
					`<div class="box">
                    <div>
                        <a href="/post/${cur.id}"  class="post-img"><img src="${cur.imageUrl}" alt="image"></a>
                        <a href="/post/${cur.id}"><h3>${cur.title}</h3></a>
                    </div>
                    <div>
                        <a href="/admin/add-post/${cur.id}?edit=true" class="edit-btn options"><i class="far fa-edit fa-2x"></i></a>
                        <form action="/admin/panel" method="POST">
                            <input type="hidden" name="id" value="${cur.id}">
                            <button type="submit" class="delete-btn"><i class="far fa-trash-alt fa-2x"></i></button>
                        </form>
            
                    </div>
                </div>`,
				);
			});
			//make button disapear when there's no more posts to be loaded
			if (data.length < 12) {
				document.querySelector('.load-more').classList.add('invisible');
			}
		}
	};
	request.send();
});
