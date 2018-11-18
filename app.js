//=========================================================================
// Notification Bell
//=========================================================================

const bell = document.querySelector("#bell");
const notifications = document.querySelector('#notifications');
const alertBtn = document.querySelector(".active-alert")

bell.addEventListener("click", () => {
  // alertBtn.style.color = "white"; 
  alertBtn.style.display = "none";
  notifications.innerHTML += `
  <ul class="notification">
    <li>
      <span>Notifaction 1</span>
    </li>
  </div>
  <ul class="notification">
    <li>
      <span>Notifaction 2</span>
    </li>
  </div>`;
});
document.addEventListener("click", function(){
  if (notifications.innerHTML !== '') {
  document.addEventListener("click", function(){
    notifications.innerHTML = '';
  })
  }
  })
//=========================================================================
// Charts
//=========================================================================
//================= Global chart options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize =  18;
Chart.defaults.global.defaultFontColor = "#4ABDAC";
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

//=========================================================================
// Bar Chart
//=========================================================================
let barChart = document.querySelector("#barChart").getContext("2d");
let myBarChart = new Chart(barChart, {
  type: "bar", //donut, pie, bar , horizontalBar, radar, polarArea, line
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets:[{
      label: "Monday", //turned of by display false
      data: [
        500,
        1000,
        1500,
        2000,
        2500,
        300,
        700,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth:1,
      borderColor: "#777",
      hoverBorderWidth: 3,
      hoverBorderColor: "#000",
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display:true, // turn off false
      text:"Daily Visits",
      fontSize: 25,
    },
    legend: {
      position: "right",
      display: false,
      labels: {
        fontColor: "#000",
      }
      
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      }
    },
    // tooltips:{
    //   enabled: false,
    // }
  }

});

//=========================================================================
// Line Chart
//=========================================================================
let lineChart = document.querySelector("#lineChart").getContext("2d");
let myLineChart = new Chart(lineChart,{
  type: "line",
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
     datasets: [{
       label: "Hourly",
         data: [500, 1000, 500, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
         backgroundColor: [
         'rgb(216, 218, 255)',
         ],
         borderColor: [
        'rgb(115, 119, 191)',
         ],
         borderWidth: 1
    }, {
      label: "Daily",
         data: [30, 80, 500, 1250, 1750, 1250, 1500, 1000, 500, 1500, 150],
         backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
         ],
         borderColor: [
        'rgb(115, 119, 191)',
         ],
         borderWidth: 1
    }, {
      label: "Weekly",
         data: [2000,1700, 500, 1250, 1750, 1250, 1500, 1000, 500, 2000, 150],
         backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
         ],
         borderColor: [
        'rgb(115, 119, 191)',
         ],
         borderWidth: 1
    }, {
      label: "Monthly",
      data: [1500,1700, 500, 1250, 1750, 2000, 1500, 2000, 500, 2000, 150],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
     'rgb(115, 119, 191)',
      ],
      borderWidth: 1
    }
  
  ],
   
  }, 
 
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display:true, // turn off false
      text:"Monthly Visits",
      fontSize: 25,
    },
    legend: {
      position: "right",
      display: true,
      labels: {
        fontColor: "#000",
      } 
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      }
    },

  }

});

//=========================================================================
// Donut Chart
//=========================================================================
let donutChart = document.querySelector("#donutChart").getContext("2d");
let myDonutChart = new Chart(donutChart, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      data: [
            10, 
            20, 
            30],
      backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
     borderWidth:1,
     borderColor: "#777",
     hoverBorderWidth: 3,
     hoverBorderColor: "#000",
            
    }],

  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display:false, // turn off false
      text:"Devices Used",
      fontSize: 25,
      position: "bottom",
    },
    legend: {
      position: "right",
      display:false,    
      labels: {
        fontColor: "#000",      
      } 
    },
    layout: {
      padding: {
        left: 80,
        right: 0,
        bottom: 0,
        top: 0,
      }
    },
  },
});

//=========================================================================
// Alert Popup
//=========================================================================

const main = document.querySelector("main");
document.addEventListener("onload", (addAlert))
// function adding alert
function addAlert() {
  //create div
  let divElement = document.createElement("div");
  // add class
  divElement.className = "alert";
  //append div
  main.appendChild(divElement);
  // create p
  let pElement = document.createElement("p");
  let pText = document.createTextNode("Warning, this is alert popup");
  pElement.appendChild(pText);
  divElement.appendChild(pElement);
  // create a 
  let aElement = document.createElement("a");
  let aText    = document.createTextNode("X");
  aElement.className = "delete";
  aElement.appendChild(aText);
  divElement.appendChild(aElement);
  aElement.href = "#";
}
addAlert();
//========= remove div if X is clicked
const alertDiv = document.querySelector(".alert")
alertDiv.addEventListener("click", (e) =>{
  if(e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
};
})


//=========================================================================
// AutoComplete
//=========================================================================
const targetInput = document.getElementById("search"),
      results = document.getElementById("autoCompleteResults");
      nameList = ["Dawn Wood", "Dan Oliver", "Dale Byrd ", "Victoria Chambers"],
      matches = [ ],
      resultsCursor = 0;
     


 //Focus the input
//  targetInput.focus()

// Add event listener for the input keydown
targetInput.addEventListener( "keydown", (event) => {
  if (event.keyCode == "13") {
     event.preventDefault();
     results.classList = "hide";
  }
})


targetInput.addEventListener( "keyup", function( event ){
//Key Codes
//enter: 13
// arrow up: 38
// arrow down: 40

// reset previus results
  results.innerHTML = "";
  toggleResults( "hide" );

  if (this.value.length  > 0) {
     matches = getMatches( this.value );

     if (matches.length > 0) {
       displayMatches( matches );
     }
  }
  if (results.classList.contains( "visible")) {
    switch( event.keyCode ) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggleResults( "hide");
        resultsCursor = 0;
        break;
      case 38:
      if ( resultsCursor > 0 ) {
        resultsCursor--;
        moveCursor( resultsCursor);
      }
        break;
      case 40:
      if ( resultsCursor  < ( matches.length - 1)) {
        resultsCursor++;
        moveCursor( resultsCursor );
      }
        break;
    }
  }
});

// Define a function for toggling the results list
function toggleResults( action ) {
  if (action === "show") {
    results.classList.add( "visible" );
  } else if (action === "hide" ) {
      results.classList.remove( "visible" ); 
  } 
}

// Define a function for checcking if the input value matches any of the listNames
function getMatches( inputText ) {
  let matchList = [];
  for ( let i = 0; i < nameList.length; i++) {
    if ( nameList[i].toLowerCase().indexOf( inputText.toLowerCase()) != -1) {
      matchList.push( nameList[i] );
    };
  }
  return matchList;
}

// Define a function for displaying autocomplete results

function displayMatches (matchList) {
  let j = 0;

  while ( j < matchList.length ) {
    results.innerHTML += `<li class="results">` + matchList[j] + `</li>`;
    j++;
  }


  // The first child 
  moveCursor( resultsCursor );

  // Show the results
  toggleResults( "show" );
}

// Define a function for moving the cursor in the results list
function moveCursor ( pos ) {
  for (let i = 0; i < results.children.length; i++) {
    results.children[i].classList.remove("highlighted");
  }

  results.children[pos].classList.add( "highlighted");
}

// console.log(matches);

//====== messageField
// clear inputs message
userMessage.addEventListener("click", (e) => {
  userMessage.value = " ";
})
const checkIfSet = () => {
  const trimmedInput = userMessage.value.trim();
  if (trimmedInput == "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
    console.log('enabled');
  }
};
const submit = (e) => {
 alert("Message was send")
  e.preventDefault();
}
userMessage.addEventListener('input', checkIfSet);
submitButton.addEventListener('click', submit);
checkIfSet();

//=========================================================================
// Local Storage
//=========================================================================

