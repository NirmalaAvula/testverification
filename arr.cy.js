describe('CarWale Compare Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });
  it('compare cars,fixtures,arrays,variables,strings,math,alias', () => {
   
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT')
      .find('div.o-cKuOoN')
      .children().eq(2).click()
    cy.get('.o-bkmzIL')
      .find('li')
      .children()
      .first()
      .trigger('mouseover')
      .wait(2000);
    cy.get('.o-cpnuEd')
      .find('div.oROWc7')
      .contains('Compare Cars')
      .click();
    cy.wait(3000);
    const cars = cy.fixture('cardetails').then((cars) => {
      cars.cars.forEach(car => {
        cy.log(`${car.brand} - ${car.model}`);
      });
      const marutiCars = cars.cars.filter(car => car.brand === "Maruti Suzuki");
      cy.log("Maruti Cars:", marutiCars);
      const carNames = cars.cars.map(car => car.carname);
      cy.log("Car Names:", carNames);
      const slicedCars = cars.cars.slice(1);
      // cy.log("Sliced Cars:", slicedCars);
      slicedCars.forEach(car => {
        cy.log(JSON.stringify(car));
      });
      const index = cars.cars.indexOf('Fronx');
      cy.log("Index of Fronx:", index);
      // Select first car for comparison
      cy.selectCar(cars.cars[0].brand, cars.cars[0].carname, cars.cars[0].type, cars.cars[0].model);
      // Select second car for comparison
      cy.selectCar(cars.cars[1].brand, cars.cars[1].carname, cars.cars[1].type, cars.cars[1].model);
    })
  })
})