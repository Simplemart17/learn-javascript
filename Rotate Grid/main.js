var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var content = '';
var button = document.querySelector('.container');
function rotateGrid() {
    content = '';

    array = arr1.concat(arr2).concat(arr3);
    // console.log(array);

    

    for (var i = 0; i < array.length; i++) {
        if (array[i] === 5) {
            content += '<button class="box start">' + array[i] + '</div>';
            // console.log(array[i]);
        }else {
            content += '<button class="box">' + array[i] +'</div>';
            // console.log(array[i]);
        }
    }
    
    
    
    button.innerHTML = content;
    document.querySelector('.start').addEventListener('click', function() {
        var arr1Pop = arr1.pop();
        var arr2Pop = arr2.pop();
        var arr2Shift = arr2.shift();
        var arr3Shift = arr3.shift();

        arr1.unshift(arr2Shift);
        arr3.push(arr2Pop);
        arr2.push(arr1Pop);
        arr2.unshift(arr3Shift);
        array = arr1.concat(arr2).concat(arr3);
        // console.log(array);
        rotateGrid();
    });
}
rotateGrid();
