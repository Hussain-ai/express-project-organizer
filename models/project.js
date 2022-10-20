'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init({
    githubLink: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    name: DataTypes.STRING,
    deployLink: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    description: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};

db.project.findOne({
  where: { id: 1 },
  include: [db.category]
})
.then(project => {
  // by using eager loading, the project model should have a categories key
  console.log(project.categories)

  // createCategory function should be available to this model - it will create the category then add it to the project
  project.createCategory({ name: 'express' })
  .then(category => {
    console.log(category.id)
  })
})