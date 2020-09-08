module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('schedule', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    startDate: {
      field: 'date_start',
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      field: 'date_end',
      type: DataTypes.DATE,
      allowNull: false,
    },
    target: {
      field: 'target',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      field: 'type',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'schedule',
    timestamps: false,
  });

  Schedule.getSchedule = (idx) => Schedule.findOne({
    where: {
      idx,
    },
    raw: true,
  })

  Schedule.deleteSchedule = (idx) => Schedule.destroy({
    where: {
      idx,
    }
  })

  Schedule.getScheduleByTarget = (target) => Schedule.findAll({
    where: {
      target,
    }
  })

  Schedule.getScheduleByType = (type) => Schedule.findAll({
    where: {
      type,
    }
  })

  return Schedule;
};
