const $main = $("main");
//
const filteredBySearch = (searching) => {
  //
  const URL =
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI";
  //
  const API_KEY = `dbba48b67bmsh70f893694c968dbp146758jsn29d22a1e8afa`;
  //"6bb341ebeemshb5fcd2f5c52376bp132a3ajsnf5c99d6e70ba";
  //
  const QUERY = `?q=${searching}`;
  //
  const PAGE_NUMBER = `&pageNumber=${1}`;
  //
  const PAGE_SIZE = `&pageSize=${10}`;

  const OPTIONS = `&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;

  const settings = {
    async: true,
    crossDomain: true,
    url: URL + QUERY + PAGE_NUMBER + PAGE_SIZE + OPTIONS,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  //Reference API
  // https://rapidapi.com/contextualwebsearch/api/web-search
  const request = $.ajax(settings);
  const response = request
    .then((response) => {
      const objData = response;
      objData.value.map((element) => {
        //first div in main
        const $div1 = $("<div>");
        $div1.html(`<p>${element.title}</p>`);
        $main.append($div1);

        //second div in main
        const $div2 = $("<div>");
        $div2.html(`<p>${element.url}</p>`);
        $main.append($div2);

        // // third div in main
        const $div3 = $("<div>");
        $div3.html(`<image src=${element.image.url}>`);
        $main.append($div3);
      });
      //console.log(response);
    })

    .catch((err) => console.log("ERROR =====>", err.responseJSON.message));
};

const inputSubmit = $("input[type=submit]");

const callback = (e) => {
  e.preventDefault();
  $main.empty();
  let inputText = $("input[type=text]").val();
  filteredBySearch(inputText);
};

inputSubmit.on("click", callback);

//add css
//


// util functions