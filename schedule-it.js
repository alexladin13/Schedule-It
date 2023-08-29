// SECTION - HEADER
/*
File Name: schedule-it.js
Purpose: Provider interactivity to the Schedule-It website.
Author: Alex Ladin
*/
// !SECTION - HEADER

// SECTION - MAIN

function main() { 
    console.log('MAIN RUNNING...');
    let shiftTile = document.getElementsByClassName('shift-tile')[0];
    shiftTile.onclick = showShiftDetails;
}

// !SECTION - MAIN

// SECTION - SHIFT TILE DETAILS

function showShiftDetails() { 
    console.log('Showcasing shift details now.')
    let outerContainer = document.getElementsByClassName('outer-container')[0];
    addShiftDetails(outerContainer);


}

function addShiftDetails(container) { 
    console.log('ADDING DETAILS...')
    let shiftDetailsDiv = document.createElement("div");
    shiftDetailsDiv.className = 'shift-details-container';
    let shiftDetailsTitle = document.createElement("h2");
    shiftDetailsTitle.innerHTML = 'SHIFT DETAILS'
    let shiftDetailOne = document.createElement("p");
    shiftDetailOne.className = 'shift-detail';
    shiftDetailOne.innerHTML = 'Shift: 4:00pm - 11:00pm';
    let shiftDetailTwo = document.createElement("p");
    shiftDetailTwo.className = 'shift-detail';
    shiftDetailTwo.innerHTML = 'Total Hours: 7'
    let shiftDetailThree = document.createElement("p");
    shiftDetailThree.className = 'shift-detail';
    shiftDetailThree.innerHTML = 'Break: Yes'
    let shiftDetailFour = document.createElement("p");
    shiftDetailFour.className = 'shift-detail';
    shiftDetailFour.innerHTML = 'Manager: Luis Cartega';
    shiftDetailsDiv.appendChild(shiftDetailsTitle);
    shiftDetailsDiv.appendChild(shiftDetailOne);
    shiftDetailsDiv.appendChild(shiftDetailTwo);
    shiftDetailsDiv.appendChild(shiftDetailThree);
    shiftDetailsDiv.appendChild(shiftDetailFour);
    container.appendChild(shiftDetailsDiv);

    


}

// !SECTION - SHIFT TILE DETAILS

main();