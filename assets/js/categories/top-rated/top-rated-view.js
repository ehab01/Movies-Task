var topRatedView = {
    template:`<div class="glider-contain">
    <div class="glider-top-rated" id="glider">
   {{#results}}
   <div class="card">
     <img class="img-fluid img" src="https://www.themoviedb.org/t/p/w440_and_h660_face{{poster_path}}" alt="Card image cap">
   </div>
   {{/results}}
   </div>
   </div>`,
    init() {
      var topRatedRendered = Mustache.render(this.template, topRatedModel.topRatedMovies);
      document.getElementById("top-rated").innerHTML = topRatedRendered;
      console.log(topRatedModel.topRatedMovies);
      loadGliderSingleSlide(".glider-top-rated");
    }
  };
  
 