import { INewPlant } from '../../interfaces';
import { BadRequestException } from '../../exceptions';

export default class PlantValidate {
  private static validateBreed(breed: string): void {
    if (typeof breed !== 'string') {
      throw new BadRequestException('Attribute "breed" must be string.');
    }
  }

  private static validateNeedsSun(needsSun: boolean): void {
    if (typeof needsSun !== 'boolean') {
      throw new BadRequestException('Attribute "needsSun" must be boolean.');
    }
  }

  private static validateOrigin(origin: string): void {
    if (typeof origin !== 'string') {
      throw new BadRequestException('Attribute "origin" must be string.');
    }
  }

  private static validateSize(size: number): void {
    if (typeof size !== 'number') {
      throw new BadRequestException('Attribute "size" must be number.');
    }
  }

  public static validateAttributes(plant: INewPlant): void {
    PlantValidate.validateBreed(plant.breed);
    PlantValidate.validateNeedsSun(plant.needsSun);
    PlantValidate.validateOrigin(plant.origin);
    PlantValidate.validateSize(plant.size);
  }
}
