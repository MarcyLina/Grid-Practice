
  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const overlayClose = overlay.querySelector('.close');

  // controls the visibility of the gallery
  const generateHTML =([h, v])=> {
    return `
      <div class="item h${h} v${v}">
        <img src="images/${randomNumber(20)}.jpeg">
        <div class="item__overlay">
          <button>View →</button>
        </div>
      </div>
    `;
  }
  // the actual bit of code that randomizes the images generated in the generateHtml function that is called in the generateHtml function above
  const randomNumber =(limit)=> {
    return Math.floor(Math.random() * limit) + 1;
  }

  //the function that handles the image to open up larger when button is clicked. is also what the empty img tag is referencing in the body of the html. this function is called below as part of the 'items' variable.
  const handleClick =(e)=> {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }

  // closes the image when clicked or...technically.... removes the 'open' command
  const close =()=> {
    overlay.classList.remove('open');
  }

  //array that generates the different sizes of images in the grid.  initially, the collage was viewed with 1x1 blank spaces. an array of arrays was concatenated to accomodate this. the array of 1x1's filled the spaces by randomizing some images to be that size, allowing for a more pleasant, full view.
  // length:30 creates 30 items on the page
  const digits = Array.from({ length: 30 }, () =>

  //the actual bit that creates the item sizes. random numbers up to 3 are chosen for both row and column span. as a result, of the 20 items, none shall be larger than 3x3
  [randomNumber(3), randomNumber(3)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

  //passes the number information from the array and send it to the generateHTML function, allowing gallery to show up on the page.
  const html = digits.map(generateHTML).join('');
  gallery.innerHTML = html;

  //calls function 'handleClick' to allow user to enlarge images
  const items = document.querySelectorAll('.item');
  items.forEach(item => item.addEventListener('click', handleClick));
  overlayClose.addEventListener('click', close);
