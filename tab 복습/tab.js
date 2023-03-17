const tabList = document.querySelectorAll(".btn_list .btn_box"); 
const contentList = document.querySelectorAll(".content_list .content");

// 탭버튼 클릭
for(i=0; i<tabList.length; i++){
    tabList[i].addEventListener("click", tabClick);
}

function tabClick(){

    // e.preventDefault();

    // 기존 on 클래스값 삭제
    for(let i=0; i<tabList.length; i++){
        contentList[i].classList.remove("on");
        contentList[i].style.display = "none";
    }
    
    // 컨텐츠에 on 클래스값 추가
    // for(let i=0; i<tabList.length; i++){
    //     contentList[i].classList.add("on");
    // }
    activeCont = this.getAttribute('href');
    document.querySelector(acriveCont).style.display = "block";

};