function parseShipment(rawData) {
  const shipment = [];

  for(const line of rawData) {
    const [sku, name, qty, expires, zone] = [...line.split("|")];

    if(!shipment.some(item => item.sku == sku)) {
      shipment.push({
        sku: sku,
        name: name,
        qty: parseInt(qty),
        expires: expires,
        zone: zone ? zone : "general"
      });
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for(const item of shipment) {
    let type;

    if(item.qty <= 0) {
      type = "discard";
    }
    else if(pantry.some(stock => stock.sku == item.sku)) {
      type = "restock";
    }
    else {
      type = "donate";
    }

    actions.push({
      type: type,
      item: item
    });
  }

  return actions;
}

function groupByZone(actions) {
  const zones = {};

  for(const action of actions) {
    const item = action.item;

    if(!zones[item.zone]) {
      zones[item.zone] = [];
    }

    zones[item.zone].push(action);
  }

  return zones;
}

function clonePantry(pantry) {
  const clone = [];

  for(const item of pantry) {
    clone.push({...item});
  }

  return clone;
}

const pantry = [
  {
    sku: "A10",
    name: "Tomato",
    qty: 1,
    expires: "2026-06-06",
    zone: "shelf"
  },
  {
    sku: "E50",
    name: "Egg",
    qty: 6,
    expires: "2026-10-06",
    zone: "fridge"
  },
];

const rawData = [
  "N99|Luftballon|99|1983-09-09|horizon",
  "N99|Luftballon|99|1983-09-09|horizon",
  "M10|Milk|-5|2000-01-01|fridge",
  "E50|Egg|12|2026-07-07|fridge",
  "R1|Rice|100|2030-01-01"
];

const parsedData = parseShipment(rawData);
const clonedPantry = clonePantry(pantry);
const actions = planRestock(clonedPantry, parsedData);
const grouped = groupByZone(actions);
console.log(grouped);