const tabitem = document.querySelectorAll(".tabs-item");
const contentitem = document.querySelectorAll(".content-item");

// Select item 
function selectitem(e){
    removeBorder();
    removeShow();
    // Add underlined
    this.classList.add('underlined');
    // For show class
    const contentitems = document.querySelector(`#${this.id}-content`);
	// Add show class
	contentitems.classList.add('show');
}

// To remove border
function removeBorder(){
    tabitem.forEach(item =>{
        item.classList.remove('underlined');
    });
}

function removeShow(){
    contentitem.forEach(item =>{
        item.classList.remove('show');
    });
}

// Event Listner
tabitem.forEach(item => {
    item.addEventListener('click', selectitem);
});