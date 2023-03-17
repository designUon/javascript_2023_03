// 사진을 클릭했을 때(이벤트)
// 사진이 여러개이므로 배열로 가져옴
const pics = document.querySelectorAll(".image_box .pic");
const lightbox = document.querySelector("#light_box")

// 사진 하나에 이벤트를 먼저 확인한 후 반복문으로 추가
// lightbox의 이미지가 클릭한 이미지로 바뀜
for(let i=0; i<pics.length; i++){
    pics[i].addEventListener("click", showLightBox);
}



// 사진을 클릭했을 때 라이트박스가 보임
function showLightBox(e){
    // 이미지 수정
    // data-이름 작성한 값은 dataset을 통해 접근
    let img = e.target.dataset.src;
    // console.dir(e.target);
    // console.dir(img);

    // 이미지값을 가져와서 lightbox의 이미지에 추가
    lightbox.firstElementChild.src = img;

    // lightbox의 display가 block으로 바뀜
    lightbox.style.display = "block";
}

// lightbox를 클릭했을 때 display가 none으로 바뀜(이벤트)
lightbox.addEventListener("click", function(){
    lightbox.style.display = "none";
});


// pic.addEventListener("click", largeImg);

// function largeimg(e){
//     lightBox.style.display = "block";
// }