module.exports = (sequelize, Sequelize) => {
  const impression = sequelize.define(
    'impression', {
      // Здесь определяются атрибуты модели
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      calldate: {
        type: Sequelize.INTEGER(12)
      },
      src_number: {
        type: Sequelize.STRING
      },
      plin: {
        type: Sequelize.FLOAT
      },
      plout: {
        type: Sequelize.FLOAT
      },
      user: {
        type: Sequelize.STRING(64),
      },
      category: {
        type: Sequelize.STRING(64),
      },
      uid: {
        type: Sequelize.STRING(64),
        unique: 'compositeIndex',
        primaryKey: true,
      },
      city: {
        type: Sequelize.TEXT,
      },
      street: {
        type: Sequelize.TEXT,
      },
      district: {
        type: Sequelize.TEXT,
      },
      highway: {
        type: Sequelize.TEXT,
      },
      underground: {
        type: Sequelize.TEXT,
      },
      street: {
        type: Sequelize.TEXT,
      },
      title: {
        type: Sequelize.STRING,
      },
      suburban: {
        type: Sequelize.JSON
      },
      residential: {
        type: Sequelize.JSON
      },
      commercial: {
        type: Sequelize.JSON
      },
      wlog: {
        type: Sequelize.JSON
      },
      fields: {
        type: Sequelize.JSON
      }
    }, {
      // Здесь определяются другие настройки модели
    }
  )
  return impression;
};
