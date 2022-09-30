async function mergeSort(s,e){
	 
	 await Sort(s, e);
}
async function  Sort(s, e) {
    if (s >= e) {
        return;
    }
    var m = Math.floor((s + e) / 2);
    await Sort(s, m);
    await Sort(m + 1, e);
    await merge(s, m, e);
}

async function merge(s, m, e) {
    var la = [];
    var ra = [];
    var nu = [];
    for (var i = s; i < m + 1; ++i) {
        la.push(heights[i]);
        arr[i].style.backgroundColor="#F3FF58";
    }
    for (var i = m + 1; i < e + 1; ++i) {
        ra.push(heights[i]);
        arr[i].style.backgroundColor="#F3FF58";    
    }
    var i = 0;
    var j = 0;
    var k = s;
    while (i < la.length && j < ra.length && k < e + 1) {
        if (la[i] < ra[j]) {
            nu.push(la[i]);
            ++i;
        }
        else {
            nu.push((ra[j]));
            ++j;
        }
    }
    while (i < la.length) {
        nu.push((la[i]));
        ++i;
    }
    while (j < ra.length) {
        nu.push((ra[j]));
        ++j;
    }
    for (let q = 0; q < nu.length; ++q) {
        arr[s].style.backgroundColor = "#1aff00";
        heights[s++] = nu[q] ;

        await sleep(delay_time);
		update_height(arr[s-1],heights[s-1] );
    }
} 