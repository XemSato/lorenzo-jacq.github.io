document.querySelector(".Bouton3").addEventListener("click", add);
//NOICE
function add(){
    document.querySelector(".Corp").innerHTML += ` <div class="galerie">
    <div> <img class="Enter" src="https://picsum.photos/400/400?rand1" ></div>
    <div></div>
    <div> <img class="Entere" src="https://picsum.photos/400/400?rand2" ></div>
    <div></div>
    <div> <img class="Enteres" src="https://picsum.photos/400/400?rand3" ></div> 
 </div>

 <div class="galerie2">
     <div> <img class="Enter1" src="https://picsum.photos/400/400?rand4" ></div>
     <div></div>
     <div> <img class="Entere2" src="https://picsum.photos/400/400?rand5" ></div>
     <div></div>
     <div> <img class="Enteres3" src="https://picsum.photos/400/400?rand6" ></div> 
  </div>

  <div class="galerie3">
     <div> <img class="Enter4" src="https://picsum.photos/400/400?rand7"></div>
     <div></div>
     <div> <img class="Entere5" src="https://picsum.photos/400/400?rand8" ></div>
     <div></div>
     <div> <img class="Enteres6" src="https://picsum.photos/400/400?rand9" ></div> 
  </div>
  <!--/La galeire-->`
};