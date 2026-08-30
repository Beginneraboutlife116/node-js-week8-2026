/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Init1788101755882 {
    name = 'Init1788101755882'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "CLASS" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_f7e171cf1a8b2d418f1fd182456" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SUBJECT" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_f4bd852a75dd2062e5d01e3d824" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "STUDENT" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "class_id" uuid NOT NULL, CONSTRAINT "PK_85f0e0a0ccd38f6d8ea17f5e9b1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "GRADE" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "score" integer NOT NULL, "student_id" uuid NOT NULL, "subject_id" uuid NOT NULL, CONSTRAINT "PK_bd0bb90149430debd6371dd718a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD CONSTRAINT "student_class_id_fk" FOREIGN KEY ("class_id") REFERENCES "CLASS"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "grade_student_id_fk" FOREIGN KEY ("student_id") REFERENCES "STUDENT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "grade_subject_id_fk" FOREIGN KEY ("subject_id") REFERENCES "SUBJECT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "grade_subject_id_fk"`);
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "grade_student_id_fk"`);
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP CONSTRAINT "student_class_id_fk"`);
        await queryRunner.query(`DROP TABLE "GRADE"`);
        await queryRunner.query(`DROP TABLE "STUDENT"`);
        await queryRunner.query(`DROP TABLE "SUBJECT"`);
        await queryRunner.query(`DROP TABLE "CLASS"`);
    }
}
