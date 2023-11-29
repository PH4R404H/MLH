document.getElementById('search').addEventListener('input', function() {
    var searchText = this.value;
    // Here you would add your logic to search the input text and match it to possible options based on keywords
    // For now, we will just log the input text to the console
    console.log(searchText);
});

//var errorList = [
//            { name: 'Error 1', url:'src/errors/Error_1.html' },
//            { name: 'Error 2', url:'src/errors/Error_2.html' },
//            { name: 'Error 3', url:'src/errors/Error_3.html' },
//            { name: 'Error 4', url:'src/errors/Error_4.html' },
//            { name: 'Error 5', url:'src/errors/Error_5.html' },
//            { name: 'Error 6', url:'src/errors/Error_6.html' },
//            { name: 'Error 7', url:'src/errors/Error_7.html' },
//            { name: 'Error 8', url:'src/errors/Error_8.html' },
//            { name: 'Error 9', url:'src/errors/Error_9.html' },
//            { name: 'Error 10', url:'src/errors/Error_10.html' },
//            { name: 'Error 11', url:'src/errors/Error_11.html' },
//            { name: 'Error 12', url:'src/errors/Error_12.html' },
//            { name: 'Error 13', url:'src/errors/Error_13.html' },
//            { name: 'Error 14', url:'src/errors/Error_14.html' },
//            { name: 'Error 15', url:'src/errors/Error_15.html' },
//            { name: 'Error 16', url:'src/errors/Error_16.html' },
//            { name: 'Error 17', url:'src/errors/Error_17.html' },
//            { name: 'Error 18', url:'src/errors/Error_18.html' },
//            { name: 'Error 19', url:'src/errors/Error_19.html' },
//            { name: 'Error 20', url:'src/errors/Error_20.html' },
//           { name: 'Error 21', url:'src/errors/Error_21.html' },
//            { name: 'Error 22', url:'src/errors/Error_22.html' },
//            { name: 'Error 23', url:'src/errors/Error_23.html' },
//            { name: 'Error 24', url:'src/errors/Error_24.html' },
//            { name: 'Error 25', url:'src/errors/Error_25.html' },
//            { name: 'Error 26', url:'src/errors/Error_26.html' },
//            { name: 'Error 27', url:'src/errors/Error_27.html' },
//];

function searchFunction() {
    var input, filter, ul, li, a, i, j, txtValue, words, wordFound;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("errorList");
    li = ul.getElementsByTagName('li');

    // If the search bar is empty, hide the dropdown
    if (input.value === '') {
        ul.style.display = 'none';
    } else {
        // Otherwise, show the dropdown
        ul.style.display = 'block';
    }

    words = filter.split(' ');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        // Check if any word in the input sentence is found in the text
        wordFound = false;
        for (j = 0; j < words.length; j++) {
            if (txtValue.toUpperCase().indexOf(words[j]) > -1) {
                wordFound = true;
                break;
            }
        }

        if (wordFound) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }         
}

// Attach the searchFunction to the input event of the search box
document.getElementById('search').addEventListener('input', searchFunction);

// TEST FORM BEGIN //

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Finish";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

// TEST FORM END //