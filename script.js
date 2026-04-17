let myTasks = [];

// Implementing 

const addBtn = document.getElementById("addBtn");
const dltBtn = document.getElementById("dltBtn");
const clrBtn = document.getElementById("clrBtn");
const taskText = document.getElementById("taskText");
const list = document.getElementById('taskList');


// 🚀 Feature Requirements
// 1. Add & Display (The for...of Loop)
// When the Add Task button is clicked:
// Get the value from the input.
// Use .push() to add it to the myTasks array.
// Use a for...of loop to print every task in the console so the user can see their current list.
// Goal: Practice basic array iteration.

// 2. The Numbered List (The Classic for Loop)
// Modify your "Add & Display" logic. Instead of just the name, use a Classic for loop to print the index number plus the task name (e.g., "1. Buy Milk", "2. Wash Car").
// Goal: Practice using the index $i$ and remembering that humans start counting at 1, while computers start at 0.

// 2. The Numbered List (The Classic for Loop)
// Modify your "Add & Display" logic. Instead of just the name, use a Classic for loop to print the index number plus the task name (e.g., "1. Buy Milk", "2. Wash Car").
// Goal: Practice using the index $i$ and remembering that humans start counting at 1, while computers start at 0.


addBtn.addEventListener('click', () => {
   const inputField = taskText.value;

   if (inputField !== '') {
      myTasks.push(inputField);
   }
   // inputField = '';

   for (let i = 0; i < myTasks.length; i++) {
      console.log(`${i + 1}. ${myTasks[i]}`);
   }

   taskDisplay();
});

// 3. Delete Specific Task (The if + Collector Pattern)
// When the Delete Specific Task button is clicked:
// Get the name of the task the user wants to remove from the input.
// Create a new empty array called updatedList.
// Use a for...of loop to look at every task in myTasks.
// The Test: If the task is NOT EQUAL to the one the user wants to delete, .push() it into updatedList.
// Finally, set myTasks = updatedList and print the result.
// Goal: Use logic to filter data without using advanced methods like .filter().

dltBtn.addEventListener('click', () => {
   let deleteTask = taskText.value;
   let updatedList = [];

   for (let task of myTasks) {
      if (task !== deleteTask) {
         updatedList.push(task);

      }
      else {
         console.log(task);
      }
   }

   myTasks = updatedList;
   console.log(myTasks);
   taskDisplay();

});

// 4. Clear All (The while Loop)
// When the Clear All button is clicked:
// Use a while loop that runs as long as the array length is greater than 0.
// Inside the loop, use .pop() to remove items.
// Goal: Use a loop controlled by a changing condition.

clrBtn.addEventListener('click', () => {
   while (myTasks.length > 0) {
      myTasks.pop()
   }
   taskDisplay();
});






function taskDisplay() {
   list.innerHTML = "";
   myTasks.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
   });
   console.log("Current Array:", myTasks);
   console.log("Array Length:", myTasks.length);
}

// 










