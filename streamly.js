const createBtn = document.querySelector('#createBtn');
videoTitleInputTag=document.querySelector("#videoTitleInputTag");
videoDescriptionInputTag=document.querySelector("#videoDescription");
videoInput=document.querySelectorAll(".videoInput");
const videoUploadContainer = document.querySelector("#videoUploadContainer");
videoUploadScreen=document.querySelector("#videoUploadScreen");
const searchInput = document.querySelector('#searchInput');
const appearanceBtn = document.querySelector("#appearanceBtn");

createBtn.addEventListener('mouseenter', () => {
    createBtn.innerHTML = '<i class="fa-solid fa-video"></i> Video';
});

createBtn.addEventListener('mouseleave', () => {

    createBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Create';
});



//reload on logo click
logo.addEventListener("click", reload);
function reload() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


//views formatter K for thousand and M for million
views = 4280;
if (views > 999 && views <= 999999) { viewsString = ((views / 1000).toFixed(1)) + "k"; } //toFixed method return a string
else if (views >= 999999) {
    viewsString = (views / 1000000) + "M";
}


//IMPORTANT
// Store a reference to the videoUploadContainer before removing it IMPORTANT
/*once you remove the element from the DOM, the reference to that element will be lost. 
This means document.querySelector("#videoUploadContainer") will return null after
 the element is removed, and attempting to append it again will fail. */

//Returns the number of pixels the document has been scrolled vertically from the top of the viewport.
videoUploadContainer.remove();//removed element from DOM
function showOverlay() {
  /*querySelectorAll method returns a NodeList of all elements that match the specified selector.
    Since querySelectorAll is returning a list, you can't directly access the .value property on the 
    entire NodeList You need to iterate over the NodeList and set the value for each individual input element. */
    videoInput.forEach(input=>{
      input.value="";
    });//clearing previous input
    document.body.style.overflow = "hidden";
    document.body.appendChild(videoUploadContainer);
    videoUploadContainer.style.top = `${window.scrollY}px`;
}


//remove overlay on clicking outer parent
videoUploadContainer.addEventListener("click", (e) => {
    if (!videoUploadScreen.contains(e.target)) {
        removeOverlay();
    }
});

//////////////////////////////////////////////////////////
//video upload
let videoTitle;



function selectFile(){
   videoTitle=(document.querySelector("#videoTitleInputTag")).value;
    addVideo();
    removeOverlay();
}



videoUploadContainer.remove();//removed element from DOM
function removeOverlay() {
    
    document.body.style.overflowY = "auto";
    videoUploadContainer.remove();
    videoUploadContainer.style.top = `${window.scrollY}px`;
}


vidNum=0;
addVideo=()=>{
    document.querySelector("#mainVideoContainer").innerHTML += `<article style=" box-shadow: 0px 0px 15px var(--shadowHintPurple);border-radius:10px; overflow:hidden;background-color: var(--darkerAccent); height: 300px;"
    id="${vidNum++}" class="videoContainer">
       <div style="width: 100%; height: 75%; background-color: var(--darkerAccent);background-image: url('images/thumbnail.png'); background-size: contain; background-repeat: no-repeat;">
      
      </div>
       <section style="color:var(--text);  padding: 10px 15px;height: 25%;"><p><i class="fa-solid fa-circle-user"></i>&nbsp;&nbsp;${videoTitle}</p>
       <div style="display:flex; justify-content:space-between;margin-top:7px;">
      <p style="color:var(--text); width:fit-content;">Channel name</p> <p style="color:var(--lightPurple); width:fit-content;">${viewsString} Views</p>
       </div>
       </section>
   </article>`;
};




const placeholders = ["Search Fortnite", "Search Hawk Tuah", "Search Skibidi"];
let currentIndex = 0;
function changePlaceholder() {
    searchInput.placeholder = placeholders[currentIndex];
    currentIndex = (currentIndex + 1) % placeholders.length;
}
setInterval(changePlaceholder, 2000);


currentMode = "dark";
toggleMode = () => {
    const root = document.documentElement; //used this to select html

    if (currentMode == "dark") {
        currentMode = "light";
        root.classList.add("lightTheme");
        appearanceBtn.innerHTML = `<i class="fa-solid fa-sun sidebarIcon"></i><div class="ab">Appearance</div>`;
        console.log(currentMode);
    }
    else if (currentMode == "light") {
        currentMode = "dark";
        root.classList.remove("lightTheme");
        appearanceBtn.innerHTML = `<i class="fa-solid fa-moon sidebarIcon"></i><div class="ab">Appearance</div>`;

        console.log(currentMode);
    }
}