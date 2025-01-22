
const createBtn=document.querySelector('#createBtn'); 

createBtn.addEventListener('mouseenter', () => {
  createBtn.innerHTML='<i class="fa-solid fa-video"></i> Video'; 
});

createBtn.addEventListener('mouseleave', () => {
 
  createBtn.innerHTML='<i class="fa-solid fa-plus"></i> Create'; 
});




 logo.addEventListener("click",reload);
 function reload(){
   window.scrollTo({ top: 0, behavior:'smooth' });
 }


 
 vidNum=0;
 addVideo=()=>{
   console.log("add"); 
   document.querySelector("#mainVideoContainer").innerHTML+=`<article style=" box-shadow: 0px 0px 15px var(--shadowHintPurple);border-radius:10px; overflow:hidden;background-color: var(--darkerAccent); height: 300px;"
    id="${vidNum++}" class="videoContainer">
       <div style="width: 100%; height: 75%; background-color: var(--darkerAccent);background-image: url('images/thumbnail.png'); background-size: contain; background-repeat: no-repeat;">
        
      </div>
       <section style="color:var(--text);  padding: 10px 15px;height: 25%;"><p><i class="fa-solid fa-circle-user"></i>&nbsp;Video description</p>
       <div style="display:flex; justify-content:space-between;margin-top:7px;">
      <p style="color:var(--text); width:fit-content;">Channel name</p> <p style="color:var(--lightPurple); width:fit-content;">420k Views</p>
       </div>
       </section>
   </article>`;
  };



const searchInput=document.querySelector('#searchInput');
const placeholders=["Search Fortnite", "Search Hawk Tuah", "Search Skibidi"];
let currentIndex=0;
function changePlaceholder(){
  searchInput.placeholder=placeholders[currentIndex];
  currentIndex=(currentIndex+1)%placeholders.length;
}
setInterval(changePlaceholder, 2000);


const appearanceBtn=document.querySelector("#appearanceBtn");
 currentMode="dark";
 toggleMode=()=>{
    const root=document.documentElement; //used this to select html
    
   if(currentMode=="dark"){
    currentMode="light";
     root.classList.add("lightTheme");
     appearanceBtn.innerHTML=`<i class="fa-solid fa-sun sidebarIcon"></i><div class="ab">Appearance</div>`;
     console.log(currentMode);
   }
   else if(currentMode=="light"){
    currentMode="dark";
    root.classList.remove("lightTheme");
    appearanceBtn.innerHTML=`<i class="fa-solid fa-moon sidebarIcon"></i><div class="ab">Appearance</div>`;

    console.log(currentMode);
   }
}

