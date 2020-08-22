var fruits, content, i;

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = [7, 8, 9];

array = arr1.concat(arr2).concat(arr3);

content = "<div>";

for (i = 0; i < array.length; i++) {


    content += "<button>" + array[i] + "</button>";
}
  content += "</div>";



document.getElementById("demo").innerHTML = content;
