
async function partition(left, right) {
    var pivot = heights[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    arr[i].style.backgroundColor = "#FF02F3"
    arr[j].style.backgroundColor = "#FF02F3"   
    arr[Math.floor((right + left) / 2)].style.backgroundColor= "#FF4343";
    await sleep(delay_time);
    while (i <= j) {
        while (heights[i] < pivot) {
            i++;
        }
        while (heights[j] > pivot) {
            j--;
        }
        arr[i].style.backgroundColor = "#F3FF58"
        arr[j].style.backgroundColor = "#F3FF58"
        await sleep(delay_time);
        if (i <= j) {
			var temp = heights[i];
			heights[i] = heights[j];
			heights[j] =temp;

			update_height(arr[i],heights[i] );
			update_height(arr[j],heights[j] );
            await sleep(delay_time);
            arr[i].style.backgroundColor = "#06FFD0";
            arr[j].style.backgroundColor = "#06FFD0";
            i++;
            j--;
        }
        if(i<n)
        arr[i].style.backgroundColor = "#06FFD0";
        if(j>=0)
        arr[j].style.backgroundColor = "#06FFD0";
        
    }
    if(i<n)
    arr[i].style.backgroundColor = " #06FFD0";
    if(j>=0)
    arr[j].style.backgroundColor = "#06FFD0"  ;
     arr[Math.floor((right + left) / 2)].style.backgroundColor= "#06FFD0 ";
    return i;
}



async function quicksort(l,r){
	 
	await quickSort(l,r);
}



async function quickSort(left, right) {
	
    if (left == right){
      
      return;
        
    } 

    var index = await partition(left, right);
    if (left < index - 1) {
        await quickSort(left, index - 1);
    }
    if (index < right) {
        await quickSort(index, right);
    }
    arr[index-1].style.backgroundColor = "#1aff00";
    if(left==index-1) arr[left].style.backgroundColor = "#1aff00";
    if(right==index) arr[right].style.backgroundColor = "#1aff00";
}