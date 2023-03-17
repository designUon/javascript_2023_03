// a태그를 클릭했을 때, li 태그에 class .on 추가
// + 다른 li태그에는 class .on 제거

let btnList = document.querySelectorAll(".list .btn");
// console.log(btnList);

// 버튼 중 하나를 선택해서 이벤트 추가
// btnList[1].addEventListener("click", onTab);
for(i=0; i<btnList.length; i++){
    btnList[i].addEventListener("click", onTab);
}

let content = document.querySelector(".content");

// on 클래스를 li에 추가하는 함수
function onTab(e){
    // a태그를 사용할 때, 새로고침 이벤트가 기본으로 들어가있으므로
    // 새로고침을 제거하고 사용해야함
    e.preventDefault();

    // 이전에 li에 추가되어있는 on을 제거하기위해 btnList 사용
    for(let i=0; i<btnList.length; i++){
        // btnList[i].parentNode.classList.remove("on");
        btnList[i].classList.remove("on");
    }

    // on 클래스 추가
    // e.target은 이벤트가 발생한 태그 자체
    // 이벤트를 붙여준 btnList[0],btnList[1],btnList[2]
    // e.target.parentNode.classList.add("on");
    e.target.classList.add("btn_on");

    e.target+content.classList.add("block");
    
}