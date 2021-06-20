var modalInfo = {
  1: {
    title: "VR Model House",
    info: "unity를 이용해 개발한 VR 모델하우스입니다. <br>가상의 클라이언트를 설정하고, 요구사항에 맞추어 C# script를 통해 개발했습니다.",
    github: "#",
  },
  2: {
    title: "공공장소 도난 방지 시스템",
    info: "Arduino UNO와 C++언어를 이용해 만든 도난 방지 장치입니다.<br>카페 등의 공공장소에서 잠시 자리를 비울 때, 노트북과 같은 귀중품의 안전이 걱정되던 경험에서 비롯하여 개발하게 되었습니다. 귀중품에 움직임 등의 변화가 감지되면, 경보음이 울리며 사용자에게 알림을 전송합니다",
    //link: "#",
    github: "https://github.com/yommyjooin/arduino_project"
  },
  3: {
    title: "대중교통 통합 시간표 앱",
    info: "안드로이드 스튜디오와 JAVA를 이용해 개발한 기차, 고속버스 시간표 통합 애플리케이션입니다.<br>지역 이동시에 탈 수 있는 교통수단이 다양한데, 시간표와 정보를 확인하기 위해서는 각 수단별 앱을 이용해야하는 불편함이 있었습니다.따라서 사용자에게 기차와 고속버스의 시간표를 통합하여 제공해주는 서비스를 개발하게 되었습니다.",
    //link: "#",
    github: "https://github.com/yommyjooin/TermProject"
  },
  4: {
    title: "",
    info: "...",
    //link: "#",
    github: "#"
  },
  5: {
    title: "",
    info: "...",
    //link: "#",
    github: "#"
  },
  6: {
    title: "",
    info: "...",
    //link: "#",
    github: "#"
  },
  7: {
    title: "Project 7",
    info: "....",
    //link: "#",
    github: "#"
  },
  8: {
    title: "Project 8",
    info: "...",
    //link: "#",
    github: "#"
  },
  9: {
    title: "Project 9",
    info: "...",
    //link: "#",
    github: "#"
  }
};

// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
/*
  document.getElementById("live").onclick = function(){
    window.open(modalInfo[id].link,'_blank');
  }
*/
  document.getElementById("github").onclick = function(){
    window.open(modalInfo[id].github,'_blank');
  }
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".navbar").css("background" , "#fff");
        }
        else{
          $(".navbar").css("background" , "#EC6947");   
        }
      })
    })