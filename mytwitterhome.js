var twtbtn = document.getElementById('tweetbtnbig');
var twtdone = document.getElementById('tweetdone')
var text = document.getElementById('tweetbox');

// if you clicked the button tweet on the first column the tweetbox will be active
twtbtn.addEventListener('click', function() {
    text.focus();
});

//if you clicked the twtdone button(Tweet inside the tweetbox) the textarea will be cleared
twtdone.addEventListener('click', function() {
	text.value = '';
});