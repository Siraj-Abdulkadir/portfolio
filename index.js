var i = 0;
var images =[]
var time = 3500;
slide = document.getElementById("image1")
const loaderContainer = document.querySelector('.loader-container')
const pageContent = document.querySelector('#page-content')
const htmlBody = document.querySelector('#body')
const darkMode = document.querySelector('.nav-img')
const h1Text = document.querySelector('.projects-text')
const h1Text1 = document.querySelector('.Experience-text')
const h1Text2 = document.querySelector('.aboutme-text')
const projectsGraphics = document.querySelector('.project-switcher-graphics')
const projectsWeb = document.querySelector('.project-switcher-web')
lightMode = document.querySelector('.nav-img')
const headerText = document.querySelector('.hero-section-text')


window.addEventListener('load',()=>{
  loaderContainer.classList.add('hidden')
  pageContent.classList.add('visible')
})

images[0] = './Resourses/image1.png'
images[1] = './Resourses/image2.JPG'
images[2] = './Resourses/image3.jpg'
images[3] = './Resourses/image5.jpg'

changeImage()

function changeImage(){

  document.slide.src = images[i]

  if(i <= 3){
      i = i +1;
  }
  else{
      i=0
  }

  setTimeout("changeImage()", time)
}


darkMode.addEventListener('click', darkModeFunc)

function darkModeFunc(e) {
  

  lightMode.src = './Resourses/light.png'
  htmlBody.classList.toggle('dark-mode');
  h1Text.classList.toggle('h1-text-black')
  h1Text1.classList.toggle('h1-text-black')
  h1Text2.classList.toggle('h1-text-black')
  headerText.classList.toggle('header-dark')
  projectsGraphics.classList.toggle('project-dark')
  projectsWeb.classList.toggle('project-dark')
}

  
window.onload = changeImage;