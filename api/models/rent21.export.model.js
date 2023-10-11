module.exports = (sequelize, Sequelize) => {
  const Rent21_export = sequelize.define("rent21_export", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.STRING(64),
    },
    typ: {
      type: Sequelize.STRING(32),
    },
    fields: {
      type: Sequelize.JSON
    }
  });
  return Rent21_export;
};
