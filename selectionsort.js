async function selectionSort() {
  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    arr[i].style.backgroundColor = "#FF02F3";
    for (let j = i + 1; j < n; j++) {
      //compare
      if (heights[j] < heights[min_index]) {
        await sleep(delay_time);
        if (i != min_index) arr[min_index].style.backgroundColor = "#06ffd0";
        min_index = j;
        arr[min_index].style.backgroundColor = "red";
      } else {
        arr[j].style.backgroundColor = "#F3FF58";
        await sleep(delay_time);
        arr[j].style.backgroundColor = "#06ffd0";
      }
    }

    //swap
    arr[min_index].style.backgroundColor = "#06ffd0";

    if (i !== min_index) {
      let temp = heights[i];
      heights[i] = heights[min_index];
      heights[min_index] = temp;
      update_height(arr[i], heights[i]);
      update_height(arr[min_index], heights[min_index]);
    }

    arr[i].style.backgroundColor = "#1aff00";
  }
  arr[n - 1].style.backgroundColor = "#1aff00";
}
