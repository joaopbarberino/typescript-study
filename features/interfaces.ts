interface aVehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printVehicle = (vehicle: aVehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);
