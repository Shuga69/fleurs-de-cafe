const mockData = [
    {id:0, title:"ROMA ESPRESSO BLEND", subtitle:"Southern Italian Roast, 2lb, whole beans", image:"../assets/mockImage3.png", price:"15.50"},
    {id:1, title:"Pastel Flowers bouqet", subtitle:"Southern Italian Roast, 2lb, whole beans", image:"../assets/mockImage2.png", price:"15.50"},
    {id:2, title:"ALLERGY HERBAL TEA BLEND BY VANA TISANES", subtitle:"Southern Italian Roast, 2lb, whole beans", image:"../assets/mockImage2.png", price:"15.50"},
    {id:3, title:"THERMO MUG", subtitle:"Southern Italian Roast, 2lb, whole beans", image:"../assets/mockImage2.png", price:"15.50"},
    {id:4, title:"dark city", subtitle:"Southern Italian Roast, 2lb, whole beans",  image:"../assets/mockImage3.png", price:"15.50"},
    {id:5, title:"ROMA ESPRESSO BLEND", subtitle:"Southern Italian Roast, 2lb, whole beans",  image:"../assets/mockImage2.png", price:"15.50"},
  ]
  

  var queryString = new Array();
    window.onload = function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                let params = window.location.search.split('?')[1].split('&');
                for (let i = 0; i < params.length; i++) {
                    let key = params[i].split('=')[0];
                    let value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                  
                }
            }
        }
const displayItems = (items) => {
    const htmlString = items
        .map((item) => {
            console.log(item.image)
            return `
            <div id="search-card" class="search-card">
              <div style="background-image:url('${item.image}')" class="search-card-image"></div>
              <h3 class="search-card-title">${item.title}</h3>
              <p class="search-card-subtitle">${item.subtitle}</p>
              <p class="search-card-price">$${item.price}</p>
              <button class="search-card-add">ADD TO CART</button>
            </div>
        `;
        })
        .join('');
        searchList.innerHTML += htmlString;
 
  };
  const filteredData = mockData.filter((item) => {
    return (
        item.title.toLowerCase().includes(queryString["search"]) ||
        item.subtitle.toLowerCase().includes(queryString["search"])
    );
});
  displayItems(filteredData);
};
