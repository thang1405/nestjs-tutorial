import { FindOneOptions, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<T> {
  protected constructor(protected readonly repository: Repository<T>) {}

  async create(entity: T, dto: any): Promise<T> {
    const res = await this.repository.save(entity);
    return plainToInstance(dto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(options: FindOneOptions<T>, dto: any): Promise<T> {
    const res = this.repository.findOne(options);
    return plainToInstance(dto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(dto: any): Promise<T[]> {
    const res = this.repository.find();
    return plainToInstance(dto, res, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: string,
    options: FindOneOptions<T>,
    entity: T,
    dto: any,
  ): Promise<T> {
    await this.repository.update(id, entity as QueryDeepPartialEntity<T>);
    const res = this.repository.findOne(options);
    return plainToInstance(dto, res, {
      excludeExtraneousValues: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
