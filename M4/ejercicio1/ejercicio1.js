//Mejorar la usabilidad de los ejercicios del desafío del módulo 3.
const cashflow = [
  {
      month: "enero",
      inflow: 1500,
      outflow: 1500
  },
  {
      month: "febrero",
      inflow: 2500,
      outflow: 2500
  },
  {
      month: "marzo",
      inflow: 84683,
      outflow: 1155
  },
  {
      month: "abril",
      inflow: 135353,
      outflow: 1533
  },
  {
      month: "mayo",
      inflow: 1535,
      outflow: 5434
  },
  {
      month: "junio",
      inflow: 4343354,
      outflow: 5434543
  },
  {
      month: "julio",
      inflow: 435453,
      outflow: 4543
  },
  {
      month: "agosto",
      inflow: 78351,
      outflow: 7816
  },
  {
      month: "septiembre",
      inflow: 1878,
      outflow: 95634
  },
  {
      month: "octubre",
      inflow: 48483,
      outflow: 9433
  },
  {
      month: "noviembre",
      inflow: 35483,
      outflow: 53133
  },
  {
      month: "diciembre",
      inflow: 3843,
      outflow: 348133
  },
]


const trimFlows = (cashflow)=>{
  const trimmedFlow = {
      inflow: cashflow.inflow,
      outflow: cashflow.outflow
  }
  
  return trimmedFlow;
}

const sumFlows = (cashflow)=>{
  const trimmedFlow = cashflow.map(value => trimFlows(value));

  var flows=[]; 

  flows.push(trimmedFlow.reduce((prev, curr)=> prev + curr.inflow, 0));
  flows.push(trimmedFlow.reduce((prev, curr)=> prev + curr.outflow, 0));

  console.log(flows);

  return flows;
}

let flows = sumFlows(cashflow);

const checkCashFlow = (cashflow) => {
  var reducedCashflow = cashflow.reduce((prev,curr)=> prev - curr);
  
  if (reducedCashflow === 0) {
      return 0;
  } else if(reducedCashflow > 0) {
      return 1
  } else {
      return -1;
  }
}

switch (checkCashFlow(flows)) {
  case 1:
      alert ("El flujo no genera pérdidas");
      break;
  case 0:
      alert("El flujo no genera ganancias ni pérdidas");
      break;
  case -1:
      alert ("El flujo genera pérdidas");
      break;
}