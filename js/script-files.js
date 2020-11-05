
const itemFirst = document.querySelector('.window-files__item-first');
const windowList = document.querySelector('.window-files__list');

const mobDrop = () => {  
  windowList.classList.toggle('active-mobdrop'); 
};
itemFirst.addEventListener('click', mobDrop);

var droplists = document.querySelectorAll('.window__droplist');
var windowMintitles = document.querySelectorAll('.window-files__mintitle');
var windowDropitems  = document.querySelectorAll('.window-files__dropitem'); 
var windowDocsTitle = document.querySelector('.window-files__docs-title');
var windowItemFirst = document.querySelector('.window-files__item-first');
var activeItemTitle = document.querySelector('.active-item-title');

windowMintitles.forEach( function(windowMintitle){
  windowMintitle.addEventListener('click',function() {
    this.parentElement.classList.toggle('active-droplist');
   
  });
});

windowMintitles.forEach( function(windowMintitle){ 
  windowMintitle.addEventListener('change', function() {
    alert()
  })
});
windowDropitems.forEach( function(windowDropitem){
  windowDropitem.addEventListener('click',function() {
      var DropItemText = windowDropitem.innerHTML;
      windowDocsTitle.innerHTML = DropItemText;
      windowItemFirst.textContent =  activeItemTitle.textContent;
  });
});
