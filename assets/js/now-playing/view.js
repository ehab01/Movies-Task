var view = {
    template:`<div class="glider-contain">
    <div class="glider" id="glider">
   {{#results}}
   <div class="card">
     <img class="img-fluid img" src="https://www.themoviedb.org/t/p/w440_and_h660_face{{poster_path}}" alt="Card image cap">
     <div class="card-img-overlay">
       <h5 class="card-title"><small class="text-muted">Now Playing</small></h5>
       <h1 class="card-text text-light">{{title}}</h1>
       <p class="card-text">Last updated 3 mins ago</p>
     </div>
   </div>
   {{/results}}
   </div>
   </div>`,
    init() {
      var rendered = Mustache.render(this.template, model.theatrMovies);
      console.log(model.theatrMovies);
      document.getElementById("now-playing").innerHTML = rendered;
      loadGlider();
    }
  };
  
 