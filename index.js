var i = 0;
var images =[]
var time = 3500;
slide = document.getElementById("image1")

images[0] = './Resourses/image1.png'
images[1] = './Resourses/image2.JPG'
images[2] = './Resourses/image3.jpg'
images[3] = './Resourses/image4.jpg'
images[4] = './Resourses/image5.jpg'

changeImage()

function changeImage(){

  document.slide.src = images[i]

  if(i < images.length -1){
      i++;
  }
  else{
      i=0
  }

  setTimeout("changeImage()", time)
}

window.onload = changeImage;