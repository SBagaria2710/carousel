let slider = document.getElementById('carousel'),
    sliderItems = document.getElementById('cards-list'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
 
slide(slider, sliderItems, prev, next);
 
function slide (wrapper, items, prev, next) {
  let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 300,
      slides = items.getElementsByClassName('card'),
      slidesLength = slides.length,
      slideSize = 320,
      index = 0,
      allowShift = true;
  // Mouse and Touch events
  items.onmousedown = dragStart;
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  // Click events
  prev.addEventListener('click', () => { shiftSlide(-1) });
  next.addEventListener('click', () => { shiftSlide(1) });
  // Transition events
  items.addEventListener('transitionend', checkIndex);
function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    // posInitial = items.offsetLeft;
    posInitial = 320;
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
function dragAction (e) {
    e = e || window.event;
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
function shiftSlide(dir, action) {
    items.classList.add('shifting');
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;     
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;     
      }
    };
    allowShift = false;
  }
function checkIndex () {
    items.classList.remove('shifting');
    if (index == -1) {
    //   items.style.left = -(slidesLength * slideSize) + "px";
    items.style.left = -320 + "px";
      index = slidesLength - 1;
    }
    if (index == 3) {
      items.style.left = (1 * slideSize) + "px";
      index = 0;
    }
    allowShift = true;
  }
}

invoke = (clicked_id) => {
    document.getElementById("para").innerHTML = "Paragragh Changed.";
    document.getElementById(clicked_id).disabled = true;
}

enlargeImage = (superParentID) => {
    let imageUrl = document.getElementById(superParentID).style.backgroundImage;
    let filePath = stripURL(imageUrl);
    let modal = document.getElementById("modal-container");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = filePath;  
}

closeModal = () => {
    document.getElementById("modal-container").style.display = "none";
}

stripURL = (url) => {
    return (url.substring(5, 20));
}