async function insertionSort() {
  arr[0].style.backgroundColor = "#1aff00";
  for (let i = 1; i < n; ++i) {
    //console.log(i);
    let key = heights[i];
    let j = i - 1;
    arr[i].style.backgroundColor = "#FF02F3";
    await sleep(delay_time);
    // arr[j].style.backgroundColor="#FF02F3";
    while (j >= 0 && heights[j] > key) {
      // arr[j].style.backgroundColor = "#F3FF58";
      //console.log("inside while");
      

      // await sleep(delay_time);
      heights[j + 1] = heights[j];
      heights[j] = key;
      // arr[j + 1].style.background = "1aff00";
      update_height(arr[j+1], heights[j+1]);
      update_height(arr[j], heights[j]);
      arr[j].style.backgroundColor = "red";


      await sleep(delay_time);
      arr[j].style.backgroundColor = "#1aff00";

      j--;

    }

    
    // arr[i].style.backgroundColor = "#1aff00";
    heights[j + 1] = key;
    update_height(arr[j+1], heights[j+1]);
    arr[i].style.backgroundColor = "#1aff00";
  }
}
