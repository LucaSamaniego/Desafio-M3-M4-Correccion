var table = document.getElementById("plans-table");

const makePlanArray = (table) => {
    var aux = [];

    var rows = table.rows;
    
    for (let i=1 ; i < rows.length ; i++) {
        var cells = rows[i].cells;
        
        var plan = {}
        
        plan.name = cells[0].innerText;
        plan.capital = Number(cells[1].innerText);
        plan.plazo = parseInt(cells[2].innerText);
        plan.tasa = parseInt(cells[3].innerText)/100;
        
        aux.push(plan);
    }
    
    return aux;
}

const calculateInterest = (plan) =>{
    return plan.capital * plan.plazo * plan.tasa /100;
}

const addInterestToPlan = (plan) => {
    plan.interest = calculateInterest(plan);
}

const fillInterest = (planArray) => {
    planArray.forEach(element => {
        addInterestToPlan(element);
    });
}


const updateHtmlTable = () => {
    var th = document.createElement("th");
    var tRows =  table.rows;
    th.textContent="Interés";

    tRows[0].appendChild(th);

    for (let i = 1 ; i < tRows.length ; i++) {
        var td = document.createElement("td");
        td.textContent = planArray[i-1].interest;

        tRows[i].appendChild(td);
    }
}

const planArray = makePlanArray(table);

fillInterest(planArray);

const button = document.getElementById("my-btn")
button.addEventListener("click", updateHtmlTable);