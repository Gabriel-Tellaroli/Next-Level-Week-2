// Search for button
const addTime = document.querySelector("#add-time");

// When click the button "addTime" execute the arrowFunction
addTime.addEventListener('click', () =>{

    //Clone fields.
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    //Get all inputs into the "newFieldContainer"
    const fields = newFieldContainer.querySelectorAll('input');

    //Clean each field
    fields.forEach( (field) =>{
        field.value = "";
    });

    //Put "newFieldContainer" below the previous
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
    
});

