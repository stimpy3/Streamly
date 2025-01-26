const createBtn = document.querySelector('#createBtn');
const videoTitleInputTag=document.querySelector("#videoTitleInputTag");
const videoDescriptionInputTag=document.querySelector("#videoDescription");
const videoInput=document.querySelectorAll(".videoInput");
const videoUploadContainer = document.querySelector("#videoUploadContainer");
const videoUploadScreen=document.querySelector("#videoUploadScreen");
const searchInput = document.querySelector('#searchInput');
const appearanceBtn = document.querySelector("#appearanceBtn");
const videoContainer=document.querySelector("#videoContainer");
const mainVideoContainer=document.querySelector("#mainVideoContainer");
const selectFileBtn = document.querySelector("#selectFileBtn");
const fileInput = document.querySelector("#fileInput");
const addVideoBtn=document.querySelector("#addVideoBtn");
const videoPlayer = document.querySelector("#videoPlayer");
const videoSource = document.querySelector("#videoSource");
const adboardOuter= document.querySelector("#adboardOuter");
const adboardSection=document.querySelector("#adboardSection");

let c=0;
function changeAdvertise(){
c%=3;
c++;
adboardOuter.style.backgroundImage=`url("images/advertise${c}.png")`;
adboardSection.style.backgroundImage=`url("images/advertise${c}.png")`;
}
setInterval(changeAdvertise,5000);


//scroll to top on logo click
logo.addEventListener("click", reload);
function reload() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

//video upload
// Add event listener to the button
selectFileBtn.addEventListener("click", () => {
  fileInput.click(); // Trigger the file input's click event
});

/*event.target.files:

The files property is an array-like object that contains all the files selected by the user through
 the file input. Even though users can only select one file at a time if the multiple attribute isn't
  set, files is still an array-like object.
This property contains all the files the user selected, but in most cases, it's an array with just 
one file, since the user usually picks one file.
event.target.files[0]:

files[0] accesses the first file (in this case, the only file) from the files array-like object.
 If the user selects multiple files, files[0] will give you the first file selected, files[1] 
 will give the second file, and so on. */
 let videoURL = null;
fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  console.log(selectedFile);
  if (selectedFile) { 
 
    videoURL = URL.createObjectURL(selectedFile);
    console.log(videoURL);
    console.log("Selected file:", selectedFile.name);
    // You can perform any actions with the selected file here
  }
  else {
    alert("Please select a valid MP4 video file.");
  }
});


vidNum=0;

function addVideo(){
    videoTitle=videoTitleInputTag.value;
    document.querySelector("#mainVideoContainer").innerHTML += `<article style=" box-shadow: 0px 0px 15px var(--shadowHintPurple);border-radius:10px; overflow:hidden;background-color: var(--darkerAccent); height: 300px; min-width:200px;"
    id="${vidNum}" class="videoContainer">
       <video id="videoPlayer${vidNum}" width="640" height="360" controls style="width: 100%; height: 75%; background-color: #3a3a3a6c;">
           <source id="videoSource${vidNum}" src="${videoURL}" type="video/mp4">
      </video>
       <section style="color:var(--text);  padding: 10px 15px;height: 25%;"><p><i class="fa-solid fa-circle-user"></i>&nbsp;&nbsp;${videoTitle}</p>
       <div style="display:flex; justify-content:space-between;margin-top:7px;">
      <p style="color:var(--text); width:fit-content;">Channel name</p> <p id="vid${vidNum}view" style="color:var(--lightPurple); width:fit-content;">${viewsString}</p>
       </div>
       </section>
   </article>`;
   vidNum++;
  
   fileInput.value = ""; // Clear the file input
   removeOverlay();

};



videoUploadContainer.remove();//removed element from DOM
function removeOverlay() {
    
    document.body.style.overflowY = "auto";
    videoUploadContainer.remove();
    videoUploadContainer.style.top = `${window.scrollY}px`;
}

//views formatter K for thousand and M for million
views =0;
viewsString=  "No views";
function viewsFormater(){
  views++;
if(views==0){
  viewsString=  "No views";
  return viewsString;
}
else if(views==1){
  viewsString=views+" view";
  return viewsString;
}
 else if (views > 999 && views <= 999999)
  {viewsString=((views/1000).toFixed(1)) + "K "+"views";
    return viewsString;
   } //toFixed method return a string
else if (views >= 999999) {
    viewsString = (views / 1000000) + "M "+"views";
    return viewsString;
}
else{
  viewsString=views+" views";
  return viewsString;
}
}

mainVideoContainer.addEventListener("click",(e)=>{
  id=e.target.closest(".videoContainer").id;//finds the closest ancestor to the target named as mentioned
  str=`#vid${id}view`;
  document.querySelector(str).innerText=viewsFormater();
  console.log(str);

});



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
        appearanceBtn.innerHTML = `<i class="fa-solid fa-sun sidebarIcon"></i><div class="ab">Lighting</div>`;
        console.log(currentMode);
    }
    else if (currentMode == "light") {
        currentMode = "dark";
        root.classList.remove("lightTheme");
        appearanceBtn.innerHTML = `<i class="fa-solid fa-moon sidebarIcon"></i><div class="ab">Lighting</div>`;

        console.log(currentMode);
    }
}