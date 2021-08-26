var trendingView = {
    template:`<div class="glider-contain">
    <div class="glider-trending" id="glider">
   {{#results}}
   <div class="card">
     <img class="img-fluid img" src="https://www.themoviedb.org/t/p/w440_and_h660_face{{poster_path}}" alt="Card image cap">
   </div>
   {{/results}}
   </div>
   </div>`,
    init() {
      var nowPlayingrendered = Mustache.render(this.template, trendingModel.trendingMovies);
      document.getElementById("trending").innerHTML = nowPlayingrendered;
   
      loadGliderSingleSlide(".glider-trending");


    }
  };
  
 