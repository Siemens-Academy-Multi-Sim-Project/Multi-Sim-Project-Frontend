import { DataCluster } from "./DataCluster";
import { DesignUnit } from "./DesignUnit";

export class ProfilingData {
    public id!: number;
    public methodology!: string;
    public designType!: string;
    public toolVersion!: string;
    public platform!: string;
    public dateOfCollection!: string;
    public totalWallTime!: string;
    public solverWallTime!: string;
    public solverMemory!: string;
    public randomizeCall!: string;
    public voptTime!: string;
    public voptMemory!: string;
    public voptCMDCommand!: string;
    public vsimTime!: string;
    public vsimMemory!: string;
    public vsimCMDCommand!: string;
    public designCompositionName!: string;
    public designCompositionModules!: string;
    public designCompositionPackages!: string;
    public designCompositionInterfaces!: string;
    public designCompositionInstances!: string;
    public designUnits!: Array<DesignUnit>;
    public profilingDataCluster!: DataCluster;
    public fileName!: string;
}