var backgrounds = {
  defaultBackgroundsList: [
    { "src": "main-image.jpg", "colorScheme": "light", "position": "bottom" },
    { "src": "ballerinaproject.jpg", "colorScheme": "dark", "position": "center" },
    { "src": "ballerinaprojecttwo.jpg", "colorScheme": "dark", "position": "top" },
  ],
  backgroundsList: function () {
    defaultBackgroundsList.sort(() => { return .5 - Math.random() });
  },
  getBackground: function () {
    let background = backgroundsList.shift();
    defaultBackgroundsList.push(background);
    return background;
  },
  init: function () {
    var self = this;
    var backgroundChangeLink = document.getElementById('change-background');
    backgroundChangeLink.addEventListener("click", function () {
      self.setBackground();
    });
  },
  setBackground: function () {
    console.log("this: ", this);
    let background = this.getBackground();
    let container = document.getElementsByClassName('container')[0];
    container.style.backgroundImage = `url(./assets/images/${background.src}`;
    container.style.backgroundPosition = background.position;
  }
};


//var backgrounds = {
//  unusedBackgrounds: [
//    { "src": "main-image.jpg", "colorScheme": "light", "position": "bottom" },
//    { "src": "ballerinaproject.jpg", "colorScheme": "dark", "position": "center" },
//    { "src": "ballerinaprojecttwo.jpg", "colorScheme": "dark", "position": "top" },
//  ],
//  usedBackgrounds: [],
//  getRandomBackground: function () {
//    let unusedBackgrounds = this.unusedBackgrounds,
//      usedBackgrounds = this.usedBackgrounds;

//    if (this.unusedBackgrounds.length === 0) {
//      this.unusedBackgrounds = this.usedBackgrounds;
//      this.usedBackground = [];
//    };

//    let randomInt = Math.floor(Math.random() * (this.unusedBackgrounds.length));
//    let newBackground = this.unusedBackgrounds.splice(randomInt, 1)[0];

//    this.usedBackgrounds.push(newBackground);
//    console.log("new background: ", newBackground);
//    return newBackground;
//  },
//  init: function () {
//    var self = this;
//    var backgroundChangeLink = document.getElementById('change-background');
//    backgroundChangeLink.addEventListener("click", function () {
//      self.setBackground();
//    });
//  },
//  setBackground: function () {
//    console.log("this: ", this);
//    let background = this.getRandomBackground();
//    let container = document.getElementsByClassName('container')[0];
//    container.style.backgroundImage = `url(./assets/images/${background.src}`;
//    container.style.backgroundPosition = background.position;
//  }
//};