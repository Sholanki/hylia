import helpers from '../_data/helpers';
import dateFilter from '../filters/date-filter';
import markdownFilter from '../filters/markdown-filter';
import w3DateFilter from '../filters/w3-date-filter';

export {
  helpers,
  dateFilter,
  markdownFilter,
  w3DateFilter,
};

const exposed = {};
if (location.search) {
  var a = document.createElement("a");
  a.href = location.href;
  a.search = "";
  history.replaceState(null, null, a.href);
}

function expose(name, fn) {
  exposed[name] = fn;
}
    function tweet_(url) {
	  open(
		"https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
		"_blank"
	  );
	}
	function tweet(anchor) {
	  tweet_(anchor.getAttribute("href"));
	}
	expose("tweet", tweet);
