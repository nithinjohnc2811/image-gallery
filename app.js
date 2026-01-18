const thumbnailsContainer = document.querySelector(".thumbnails");
const display = document.getElementById("display");
const nextArrow = document.getElementById("next-arrow");
const prevArrow = document.getElementById("prev-arrow");


const images = [
  {
    src: "https://images.unsplash.com/photo-1629834598512-77a443808b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "people-in-a-park-during-daytime",
  },
  {
    src: "https://images.unsplash.com/photo-1642717841683-c0323214617c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a-water-park-with-a-water-slide-and-slides",
  },
  {
    src: "https://images.unsplash.com/photo-1545960122-23d7d68938a6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "group-of-people-swimming",
  },
  {
    src: "https://images.unsplash.com/photo-1628238996362-a90f37d35b33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "orange-and-green-kayak-on-blue-water",
  },
];


let currentIndex = 0;

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = images[i].src;
    imgElement.alt = images[i].alt;
    imgElement.addEventListener("click", function () {
        currentIndex = i;
        createImage(images[i]);
    });
    thumbnailsContainer.append(imgElement);
  }
}

createThumbnails();

function createImage(imageData) {
  display.innerHTML = "";
  const bigImage = document.createElement("img");
  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;
  display.append(bigImage);
}

 nextArrow.addEventListener("click", function() {
      currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Loop back to the first image
        }
       createImage(images[currentIndex]);
   });
    
    
    prevArrow.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Loop to the last image
        }
        createImage(images[currentIndex]);
   })

   createImage(images[0]);
