const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Grade',
  tableName: 'GRADE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
    },
    score: {
      type: 'integer',
      nullable: false,
    },
  },
  relations: {
    student: {
      type: 'many-to-one',
      target: 'Student',
      nullable: false,
      joinColumn: {
        name: 'student_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'grade_student_id_fk',
      },
    },
    subject: {
      type: 'many-to-one',
      target: 'Subject',
      nullable: false,
      joinColumn: {
        name: 'subject_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'grade_subject_id_fk',
      },
    },
  },
})
