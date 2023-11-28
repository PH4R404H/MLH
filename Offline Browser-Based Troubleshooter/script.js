document.getElementById('search').addEventListener('input', function() {
    var searchText = this.value;
    // Here you would add your logic to search the input text and match it to possible options based on keywords
    // For now, we will just log the input text to the console
    console.log(searchText);
});

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

