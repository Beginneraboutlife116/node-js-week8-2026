const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Student',
  tableName: 'STUDENT',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    name: {
      type: 'varchar',
      length: 50,
      nullable: false,
    },
  },
  relations: {
    class: {
      type: 'many-to-one',
      target: 'Class',
      nullable: false,
      joinColumn: {
        name: 'class_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'student_class_id_fk',
      },
    },
  },
})
