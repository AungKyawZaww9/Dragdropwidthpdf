// UI 

const proofcontiner = document.querySelector('.proof-continer');
const proof = document.querySelector('.proof');
const fillfile = document.querySelector('.fillfile');
const one = document.querySelector('.one');



fillfile.addEventListener('dragstart',dragstart);
fillfile.addEventListener('dragend',dragend);




// Drop Start 
function dragstart(){
    // console.log("Drop Start");

    this.className += " hold";

    setTimeout(()=>{
        this.className = "fillfile";
    },0);
}




// Drop End
function dragend(){
    // console.log("Drop End");

    this.className = "fillfile";

}



proofcontiner.addEventListener('dragover',dragover);
proofcontiner.addEventListener('dragenter',dragenter);
proofcontiner.addEventListener('dragleave',dragleave);
proofcontiner.addEventListener('drop',dragdrop);

//Dragover
function dragover(e){
    // console.log("dragover");
    this.className += " hovered";

    e.preventDefault();

}



function dragenter(e){
    // console.log("dragenter");

    e.preventDefault();

}



function dragleave(e){
    // console.log("dragleave");
    e.preventDefault();

    this.className = "proof-continer";

}



function dragdrop(){
    // console.log("dragdrop");
    this.className = "proof-continer";
    const div = document.createElement('div');

    div.classList.add('two');
    proofcontiner.appendChild(div);
    one.style.display = "none";
    proofcontiner.classList.add('show');

    setTimeout(()=>{
        one.style.display = "block";
        div.style.display = "none";
        proofcontiner.classList.remove('show');

        addimagesfile();
        updatelocalstorage();


    },1000);

    

}


//Random Texts

let headers = ["Cover_letter","Sample","Job_Note","Job_Report"];
// console.log(headers);


function randomtext(){
    return headers[Math.floor(Math.random() * headers.length)];
}

// console.log(randomtext());



let index = 0;
const uploadedfiles = document.querySelector('.uploaded-file');

function addimagesfile(){
    // console.log("I am images file");
   
    index++;

    const drivers = document.createElement('div');
    drivers.classList.add('photoone');

    drivers.innerHTML = `
    
        <i class="far fa-file-pdf fa-2x"></i>       
        <p class="imagetexts">${randomtext()}_${index}.pdf</p>
        <p class="times"><span class="day">14/</span> <span class="month">6/</span> <span class="year">2000</span></p>
        
        <i id="checkcircle" class="far fa-check-circle"></i>
    `;

    
    const circleactice = drivers.querySelector('.fa-check-circle');

    circleactice.classList.add('active');

    uploadedfiles.appendChild(drivers);


    drivers.addEventListener('contextmenu',(e)=>{
        // console.log("I'm drivers");

        e.preventDefault();

        drivers.remove();
        
        updatelocalstorage();
    });


    const day = drivers.querySelector('.day');
    const month = drivers.querySelector('.month');
    const year = drivers.querySelector('.year');

    let getyear = new Date().getUTCFullYear();
    let getmonth = new Date().getMonth() + 1;
    let getday = new Date().getDate();
    
    day.innerText = getday < 10 ? "0"+ getday: getday;
    month.innerText = getmonth < 10 ? "0"+ getmonth: getmonth;
    year.textContent = getyear < 10 ? "0"+ getyear: getyear;

    
}
// addimagesfile();



function updatelocalstorage(){
    
    // console.log("local storage is ready");
    let arr = [];
    let devics = document.querySelectorAll('.imagetexts');
    // console.log(devics);

    devics.forEach(devic=>{
        // console.log(devics);

        arr.push(devic.innerText);
    });

    localStorage.setItem('div',JSON.stringify(arr));
    // console.log(arr);

}



const getdivs = JSON.parse(localStorage.getItem('div'));
// console.log(getdivs);

if(getdivs){
    getdivs.forEach(getdiv=>{
        // console.log(getdiv);

        addimagesfile(getdiv);

    });
}




