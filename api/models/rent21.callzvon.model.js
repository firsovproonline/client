module.exports = (sequelize, Sequelize) => {
  const Rent21_callzvon = sequelize.define("rent21_callzvon", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    direction: {
      type: Sequelize.INTEGER(1)
    },
    user_account: {
      type: Sequelize.STRING
    },
    client_number: {
      type: Sequelize.STRING(32)
    },
    src_number: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.INTEGER(5)
    },
    user_id: {
      type: Sequelize.INTEGER(5)
    },
    answer_time: {
      type: Sequelize.INTEGER(12)
    },
    src_id: {
      type: Sequelize.INTEGER(5)
    },
    client_name: {
      type: Sequelize.STRING
    },
    recording: {
      type: Sequelize.STRING
    },
    answered: {
      type: Sequelize.INTEGER(1)
    },
    db_call_id: {
      type: Sequelize.INTEGER(12)
    },
    end_time: {
      type: Sequelize.INTEGER(12)
    },
    start_time: {
      type: Sequelize.INTEGER(12)
    }
  });
  return Rent21_callzvon;
};
