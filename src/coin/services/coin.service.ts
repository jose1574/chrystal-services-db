import { Injectable, NotFoundException } from '@nestjs/common';

import { CoinDto, UpdateCoinDto } from '../dtos/coin.dto';
import { CoinEntity } from '../entity/coin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoinService {
    constructor(
        @InjectRepository(CoinEntity)
        private readonly coinRepository: Repository<CoinEntity>,
      ) {}
    
      async findAll(): Promise<CoinDto[]> {
        return this.coinRepository.find();
      }
    
      async findOneByCode(code: string): Promise<CoinDto> {
        const coin = await this.coinRepository.findOne({ where: { code } });
    
        if (!coin) {
          throw new NotFoundException(
            `coin con el codigo ${code} no se encuentra.`,
          );
        }
        return coin;
      }
    
      async insert(data: CoinDto[]): Promise<any> {
        try {
          const newInstance = this.coinRepository.create(data);
          const addNew = await this.coinRepository.save(newInstance);
          return addNew;
        } catch (err) {
          throw new NotFoundException(
            `Error al insertar la coin ${JSON.stringify(err)}`,
          );
        }
      }
    
      async update(id: string, changes: UpdateCoinDto): Promise<UpdateCoinDto> {
        try {
          const search = await this.findOneByCode(id);
    
          if (search!) {
            throw new NotFoundException(`coin con el id ${id} no se encuentra`);
          }
          const merge = this.coinRepository.merge(search, changes);
          const updateCoin = this.coinRepository.save(merge);
    
          return updateCoin;
        } catch (error) {
          throw new NotFoundException(
            `Error al actualizar la coin ${JSON.stringify(error)}`,
          );
        }
      }
    
      async delete(id: string): Promise<CoinDto> {
        const coinDelete = await this.findOneByCode(id);
        if (!coinDelete) {
          throw new NotFoundException(`coin con ID ${id} no encontrado`);
        }
        await this.coinRepository.remove(coinDelete);
        return coinDelete;
      }
}
