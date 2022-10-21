const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "<apikey>",
		"X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});