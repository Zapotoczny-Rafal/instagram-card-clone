const heart = document.querySelector('.heart')
const heart_red = document.querySelector('.heart-red')
const bookmark = document.querySelector('.bookmark')
const textarea = document.querySelector('.textarea')
const publish = document.querySelector('.publish')

heartClicked = false
heart.addEventListener('click', () => {

  if(!heartClicked) {
    heart_red.src = `../public/images/heart_red.png`
    heart_red.style.transform = 'scale(1.2)'
    heart_red.style.transition = 'all 0.15s'
    heart_red.classList.add('heart-red')
    heartClicked = true
  } else {
    
    heart_red.src = `../public/images/heart.png`
    heart_red.style.transform = 'scale(1)'
    heart_red.classList.remove('heart-red')
    heartClicked = false
  }
})

bookmarkClicked = false
bookmark.addEventListener('click', () => {

  if(!bookmarkClicked) {
    bookmark.src = `../public/images/bookmark_dark.png`
    bookmark.classList.remove('hovered')
    bookmarkClicked = true
  } else {
    
    bookmark.src = `../public/images/bookmark.png`
    bookmark.classList.add('hovered')
    bookmarkClicked = false
  }
})


textarea.addEventListener('keyup', () => {

  if(!textarea.value == '') {
    publish.disabled = false
  } else {

    publish.disabled = true
  }
})