const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Course',
  tableName: 'COURSE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    description: {
      type: 'text',
      nullable: false,
    },
    start_at: {
      type: 'timestamp',
      nullable: false,
    },
    end_at: {
      type: 'timestamp',
      nullable: false,
    },
    max_participants: {
      type: 'integer',
      nullable: false,
    },
    created_at: {
      type: 'timestamp',
      createDate: true,
      nullable: false,
    },
    updated_at: {
      type: 'timestamp',
      updateDate: true,
      nullable: false,
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      nullable: false,
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'course_user_id_fk',
      },
    },
    skill: {
      type: 'many-to-one',
      target: 'Skill',
      nullable: false,
      joinColumn: {
        name: 'skill_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'course_skill_id_fk',
      },
    },
  },
})
