// Меню в sectionFive
function themeOne() {
  var iOne = document.getElementById("serviceMenuPointSubMenuJsOne").style.display;
  if (iOne == "none") {
     document.getElementById("serviceMenuPointSubMenuJsOne").style.display="block";
     document.getElementById("serviceMenuPointSubMenuJsTwo").style.display="none";
     document.getElementById("serviceMenuPointSubMenuJsThree").style.display="none";
     document.getElementById("serviceMenuArrowRotateOne").style.transform="rotate(180deg)";
     document.getElementById("serviceMenuArrowRotateTwo").style.transform="rotate(0deg)";
     document.getElementById("serviceMenuArrowRotateThree").style.transform="rotate(0deg)";
  }
  else {
     document.getElementById("serviceMenuPointSubMenuJsOne").style.display="none";
     document.getElementById("serviceMenuArrowRotateOne").style.transform="rotate(0deg)";
  }
}
function themeTwo() {
  var iTwo = document.getElementById("serviceMenuPointSubMenuJsTwo").style.display;
  if (iTwo == "none") {
     document.getElementById("serviceMenuPointSubMenuJsTwo").style.display="block";
     document.getElementById("serviceMenuPointSubMenuJsOne").style.display="none";
     document.getElementById("serviceMenuPointSubMenuJsThree").style.display="none";
     document.getElementById("serviceMenuArrowRotateOne").style.transform="rotate(0deg)";
     document.getElementById("serviceMenuArrowRotateTwo").style.transform="rotate(180deg)";
     document.getElementById("serviceMenuArrowRotateThree").style.transform="rotate(0deg)";
  }
  else {
     document.getElementById("serviceMenuPointSubMenuJsTwo").style.display="none";
     document.getElementById("serviceMenuArrowRotateTwo").style.transform="rotate(0deg)";
  }
}
function themeThree() {
  var iThree = document.getElementById("serviceMenuPointSubMenuJsThree").style.display;
  if (iThree == "none") {
     document.getElementById("serviceMenuPointSubMenuJsThree").style.display="block";
     document.getElementById("serviceMenuPointSubMenuJsOne").style.display="none";
     document.getElementById("serviceMenuPointSubMenuJsTwo").style.display="none";
     document.getElementById("serviceMenuArrowRotateOne").style.transform="rotate(0deg)";
     document.getElementById("serviceMenuArrowRotateTwo").style.transform="rotate(0deg)";
     document.getElementById("serviceMenuArrowRotateThree").style.transform="rotate(180deg)";
  }
  else {
     document.getElementById("serviceMenuPointSubMenuJsThree").style.display="none";
     document.getElementById("serviceMenuArrowRotateThree").style.transform="rotate(0deg)";
  }
}
// Слайдер в SectionSix
var sliderComments = 1;
function sliderCommentsBack() {
  var sliderCommentsNumber = --sliderComments;
  console.log(sliderComments);
  if (sliderCommentsNumber == 1) {
    document.getElementById("sliderCommentsOne").style.display = "block";
    document.getElementById("sliderCommentsTwo").style.display = "none";
    document.getElementById("sliderCommentsThree").style.display = "none";
  }
  else if (sliderCommentsNumber == 2) {
    document.getElementById("sliderCommentsOne").style.display = "none";
    document.getElementById("sliderCommentsTwo").style.display = "block";
    document.getElementById("sliderCommentsThree").style.display = "none";
  }
  else if (sliderCommentsNumber == 3) {
    document.getElementById("sliderCommentsOne").style.display = "none";
    document.getElementById("sliderCommentsTwo").style.display = "none";
    document.getElementById("sliderCommentsThree").style.display = "block";
  }
  else if (sliderCommentsNumber == 0) {
    var sliderCommentsNumber = ++sliderComments;
  }
}
function sliderCommentsNext() {
  var sliderCommentsNumber = ++sliderComments;
  console.log(sliderComments);
  if (sliderCommentsNumber == 1) {
    document.getElementById("sliderCommentsOne").style.display = "block";
    document.getElementById("sliderCommentsTwo").style.display = "none";
    document.getElementById("sliderCommentsThree").style.display = "none";
  }
  else if (sliderCommentsNumber == 2) {
    document.getElementById("sliderCommentsOne").style.display = "none";
    document.getElementById("sliderCommentsTwo").style.display = "block";
    document.getElementById("sliderCommentsThree").style.display = "none";
  }
  else if (sliderCommentsNumber == 3) {
    document.getElementById("sliderCommentsOne").style.display = "none";
    document.getElementById("sliderCommentsTwo").style.display = "none";
    document.getElementById("sliderCommentsThree").style.display = "block";
  }
  else if (sliderCommentsNumber == 4) {
    var sliderCommentsNumber = --sliderComments;
  }
}

var workSlider = 1;
function sectionsWorkBack() {
  var workSliderNumber = --workSlider;
  console.log(workSlider);
  if (workSliderNumber == 1) {
    document.getElementById("sectionWorkOne").style.display = "block";
    document.getElementById("sectionWorkTwo").style.display = "none";
    document.getElementById("sectionWorkThree").style.display = "none";
  }
  else if (workSliderNumber == 2) {
    document.getElementById("sectionWorkOne").style.display = "none";
    document.getElementById("sectionWorkTwo").style.display = "block";
    document.getElementById("sectionWorkThree").style.display = "none";
  }
  else if (workSliderNumber == 3) {
    document.getElementById("sectionWorkOne").style.display = "none";
    document.getElementById("sectionWorkTwo").style.display = "none";
    document.getElementById("sectionWorkThree").style.display = "block";
  }
  else if (workSliderNumber == 0) {
    var workSliderNumber = ++workSlider;
  }
}
function sectionsWorkNext() {
  var workSliderNumber = ++workSlider;
  console.log(sliderComments);
  if (workSliderNumber == 1) {
    document.getElementById("sectionWorkOne").style.display = "block";
    document.getElementById("sectionWorkTwo").style.display = "none";
    document.getElementById("sectionWorkThree").style.display = "none";
  }
  else if (workSliderNumber == 2) {
    document.getElementById("sectionWorkOne").style.display = "none";
    document.getElementById("sectionWorkTwo").style.display = "block";
    document.getElementById("sectionWorkThree").style.display = "none";
  }
  else if (workSliderNumber == 3) {
    document.getElementById("sectionWorkOne").style.display = "none";
    document.getElementById("sectionWorkTwo").style.display = "none";
    document.getElementById("sectionWorkThree").style.display = "block";
  }
  else if (workSliderNumber == 4) {
    var workSliderNumber = --workSlider;
  }
}

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("buttonTop").style.visibility = "visible";
  }
  else {
      document.getElementById("buttonTop").style.visibility = "hidden";
  }
})
