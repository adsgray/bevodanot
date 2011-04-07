(function() {
function mouseX(evt) {
	if (evt.pageX) return evt.pageX;
	else if (evt.clientX)
   		return evt.clientX + (document.documentElement.scrollLeft ?
      		document.documentElement.scrollLeft :
         	document.body.scrollLeft);
	else return null;
}

function mouseY(evt) {
	if (evt.pageY) return evt.pageY;
	else if (evt.clientY)
		return evt.clientY + (document.documentElement.scrollTop ?
		document.documentElement.scrollTop :
		document.body.scrollTop);
	else return null;
}

function addEvent(elem, f, capture) {
	if (elem.addEventListener) {
		elem.addEventListener('click', f, capture);
	} else if (elem.attachEvent) {
		elem.attachEvent('onclick', f);
	}
}


function killelem(elem) {
	var elemparent = elem.parentNode;
	elemparent.removeChild(elem);
}

function eatevent(evt)
{
	if (evt.stopPropagation) {
		evt.stopPropagation();
	}
	if (evt.cancelBubble) {
		evt.cancelBubble = true;
	}
}

function bodyclick(evt) {

	var mynode = document.createElement('img');
	mynode.className = 'bevoda';
	mynode.style.position = 'absolute';
	var mx = mouseX(evt);
	var my = mouseY(evt);

	mx -= 10;
	my -= 30;

	mynode.style.left = mx + 'px'; 
	mynode.style.top = my + 'px';
	mynode.src = 'http://adsgb02usw.s3.amazonaws.com/bevoda/not.png';
	addEvent(mynode, function(evt) { 
			killelem(mynode); 
			eatevent(evt);
			return false;
		}, false);
	document.body.appendChild(mynode);
}

addEvent(document.body, bodyclick, false);

})();
