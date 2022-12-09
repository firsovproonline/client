module.exports = (sequelize, Sequelize) => {
  const Rent21_owner = sequelize.define("rent21_owner", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.STRING(64),
    },
    contacts: {
      type: Sequelize.JSON
    },
    fields: {
      type: Sequelize.JSON
    }
  });
  return Rent21_owner;
};
