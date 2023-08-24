import { Sequelize } from "sequelize"
import db from "../src/db.js"

const Users = db.define('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps:false,
    freezeTableName: true 
  }
);

const Post = db.define('post', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  }
},
{
  timestamps:false,
  freezeTableName: true 
}
);

Users.hasMany(Post);
Post.belongsTo(Users);

export { Users, Post }