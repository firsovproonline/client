module.exports = (sequelize, Sequelize) => {
  const Rent21_log = sequelize.define("rent21_log", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: Sequelize.STRING(64),
    },
    uid: {
      type: Sequelize.STRING(64),
    },
    typ: {
      type: Sequelize.STRING(64),
    },
    date: {
      type: Sequelize.INTEGER(12)
    },
    fields: {
      type: Sequelize.JSON
    }
  });
  return Rent21_log;
};
