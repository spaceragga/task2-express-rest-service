/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdmin implements MigrationInterface {
    name = 'AddAdmin'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public."user" (login, name, password) VALUES ('admin', 'admin', '$2b$10$pbFbzS0pKm714aXF6TM.iuPt3AjZ99cU6K/jTrvfb19k5ihu7FiKq')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM public."user" WHERE login='admin'`);
    }

}