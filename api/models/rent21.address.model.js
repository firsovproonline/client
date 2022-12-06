module.exports = (sequelize, Sequelize) => {
  const Rent21_address = sequelize.define("rent21_address", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.STRING(64),
    },
    metro: {
      type: Sequelize.JSON
    },
    fields: {
      type: Sequelize.JSON
    }
  });
  return Rent21_address;
};
