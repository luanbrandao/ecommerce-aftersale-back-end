import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFavorites1598568011707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'favorites',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'product_id',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FavoriteUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favorites');
  }
}
