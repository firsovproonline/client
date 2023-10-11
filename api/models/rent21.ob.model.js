module.exports = (sequelize, Sequelize) => {

  const Rent21_ob = sequelize.define("rent21_ob", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.STRING(64),
      unique: 'compositeIndex'
    },
    owner: {
      type: Sequelize.STRING(64),
    },
    build: {
      type: Sequelize.STRING(64),
    },
    category: {
      type: Sequelize.STRING(64)
    },
    cian: {
      type: Sequelize.JSON
    },
    fields: {
      type: Sequelize.JSON
    },
    exports: {
      type: Sequelize.JSON
    },
    showcase: {
      type: Sequelize.JSON
    }
  });
  return Rent21_ob;
};
