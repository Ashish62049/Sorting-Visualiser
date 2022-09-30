//accessing html elements------------------------------------------------------------------

var win = document.getElementById("win");
var sl = document.getElementById("slider");
var sl2 = document.getElementById("slider2");
var sortBtn = document.getElementById("sortBtn");
var dropBtn = document.getElementById("dropBtn");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
document.body.style.backgroundColor = "black";

//getting size of array from slider and then adjusting the width of bars accordingly----------------------------------------------------------------------------

var n = sl.defaultValue;
var sp_factor = sl2.defaultValue;
var winWidth = screen.width - 100;
var w = (winWidth - 4 * n) / n;
var arr = [];
var heights = [];
resetArr(n);
sl.addEventListener("input", function () {
  console.log("inside slider event listener");
  n = sl.value;

  winWidth = 1220 - 62;
  w = Math.floor((8 * winWidth) / (13 * n));
  w = w + (winWidth - n * w) / (20 * n);
  resetArr(n);
});
var delay_time = 10;
sl2.addEventListener("input", function () {
  sp_factor = sl2.value;
  delay_time = (100 * 100) / (sp_factor * sp_factor);
});

//resetting the array -------------------------------------------------------------------------------------------------------------

function resetArr(n) {
  arr = [];
  heights = [];
  win.innerHTML = "";
  for (let i = 0; i < n; ++i) {
    var rand = Math.floor(Math.random() * 500) + 1;
    var b = document.createElement("div");
    b.className = "bar";
    b.style.height = rand + "px";
    b.style.width = w + "px";
    heights[i] = rand;
    arr.push(b);
    win.appendChild(arr[i]);
  }
}

//choosing algorithm for sorting-------------------------------------------------------------
var algo = 1;
a1.addEventListener("click", function () {
  algo = 1;
  dropBtn.innerHTML = "Bubble Sort";
});
a2.addEventListener("click", function () {
  algo = 2;
  dropBtn.innerHTML = "Selection Sort";
});
a3.addEventListener("click", function () {
  algo = 3;
  dropBtn.innerHTML = "Insertion Sort";
});
a4.addEventListener("click", function () {
  algo = 4;
  dropBtn.innerHTML = "Merge Sort";
});
a5.addEventListener("click", function () {
  algo = 5;
  dropBtn.innerHTML = "Quick Sort";
});



//handling button click----------------------------------------------------------------------
var z = 0;
sortBtn.addEventListener("click", function () {
  //console.log("inside sort btn event listener");
  if (arr.length < 1) resetArr(n);
  if (algo == 1) {
    bubbleSort();
  } else if (algo == 2) {
    selectionSort();
  } else if(algo==3){
    insertionSort();
  }
  else if(algo==4){
    mergeSort(0, n - 1);
  }
  else{
    quicksort(0, n - 1);
  }
});

//Updating height of the bar
function update_height(a, h) {
	a.style.height = h + 'px';
	
}

//delay
function sleep(milisec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('')
    }, milisec);
  })
}

