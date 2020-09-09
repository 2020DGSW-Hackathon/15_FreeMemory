module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      field: 'id',
      type: DataTypes.STRING(45),
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    grade: {
      field: 'grade',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classroom: {
      field: 'classroom',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentNumber: {
      field: 'student_number',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'member',
  });

  return Member;
};
