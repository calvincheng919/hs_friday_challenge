'use strict'

console.log('hello world')

// TODO: Create an array to hold the teacher names [name1, name2, name3, name4]

var teacherArray = ['Mr. Cheng', 'Ms. Quinby', 'Mr. Mumm', 'Mr. Spear']
//teacherArray holds all the teachers.

// TODO: Target the unordered list with getElementById or querySelector
// TODO: Once targeted, assign the undordered list element to a variable

var unorderedlist = document.getElementById('teachers');
//unorderedlist holds the element with id='teachers'

// TODO: loop thorugh the array
// at each iteration, create an element to hold the first teacher name
// at each iteration, give the textContent of the new element the content of the current index (ie Mr. Cheng, or Mr. Mumm, etc)
// at each iteration, append the new element as a child of the unordered list you created earlier

for (var i=0; i < teacherArray.length; i++) {
  console.log(teacherArray[i]);

// at each iteration, create an element to hold the first teacher name
// at each iteration, give the textContent of the new element the content of the current index (ie Mr. Cheng, or Mr. Mumm, etc)
// at each iteration, append the new element as a child of the unordered list you created earlier
  var listitem = document.createElement('li')
  // listitem now holds the newly created li element
  listitem.textContent = teacherArray[i];
  unorderedlist.appendChild(listitem);

}
