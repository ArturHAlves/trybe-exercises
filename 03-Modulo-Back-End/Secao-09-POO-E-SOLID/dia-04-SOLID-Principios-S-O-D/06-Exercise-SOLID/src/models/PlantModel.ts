import { HandleFile, FileType } from './HandleFile';
import { IModel, IOpsInfo } from './interfaces';
import { IPlant } from '../interfaces';

class PlantModel implements IModel<IPlant> {
  private fileTypePlant: FileType = 'plants';

  private fileTypeOpsInfo: FileType = 'opsInfo';

  private handleFile = new HandleFile();

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.handleFile.readFile<IOpsInfo>(this.fileTypeOpsInfo);
    opsInfo.createdPlants += incrementAmount;

    await this.handleFile.saveFile(this.fileTypeOpsInfo, opsInfo);

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.handleFile.readFile<IPlant[]>(this.fileTypePlant);
    return plants;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);

    await this.handleFile.saveFile(this.fileTypePlant, plants);

    return newPlant;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();

    const plantById = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!plantById) return null;
    return plantById;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();

    const updatedPlants = plants.map((editPlant) => {
      if (plant.id === editPlant.id) return { ...plant };
      return editPlant;
    });

    await this.handleFile.saveFile(this.fileTypePlant, updatedPlants);

    return plant;
  }

  public async removeById(id: string): Promise<boolean> {
    const plants = await this.getAll();

    const removedPlant = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!removedPlant) return false;

    const newPlants = plants.filter((plant) => plant.id !== parseInt(id, 10));
    this.handleFile.saveFile(this.fileTypePlant, newPlants);

    return true;
  }
}

export default PlantModel;
