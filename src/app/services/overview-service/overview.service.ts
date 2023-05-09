import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProfilingData} from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import {UnitData} from 'src/app/models/session-overview-models/profiling-data/UnitData';
import {environment} from 'src/environments/environment';
import {SingleAttribute} from "../../models/session-overview-models/singleAttribute";
import {MultiAttribute} from "../../models/session-overview-models/multiAttribute";
import {DualAttribute} from "../../models/session-overview-models/dual-attribute";
import {Columns} from "../../models/usage-profile/columns";

@Injectable({
  providedIn: 'root'
})


export class OverviewService {

  username = "omar.atef.2001@gmail.com"
  password = "1010abab";
  profilingDataArray: ProfilingData[] = []

  /*profilingDataArray: ProfilingData[] = [
    {
      "id": 1,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 05:03",
      "totalWallTime": "1.440s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "totalsamples": "0",
      "voptTime": "3.57 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "1.51 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 28925691 +SEED=28925691 -fprofile+perf=high+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_access_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 1,
          "profilerId": 1,
          "name": "uvm_pkg",
          "localHits": 2,
          "localPercentage": "100.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_554.csv"
    },
    {
      "id": 2,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 03:28",
      "totalWallTime": "2.130s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.65 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "2.13 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 822784415 +SEED=822784415 -fprofile+perf+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_reset_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 2,
          "profilerId": 2,
          "name": "uvm_pkg",
          "localHits": 1,
          "localPercentage": "100.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_3997.csv"
    },
    {
      "id": 3,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 05:03",
      "totalWallTime": "1.440s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.57 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "1.51 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 28925691 +SEED=28925691 -fprofile+perf=high+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_access_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 4,
          "profilerId": 3,
          "name": "uvm_pkg",
          "localHits": 2,
          "localPercentage": "100.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_554.csv"
    },
    {
      "id": 4,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 05:03",
      "totalWallTime": "1.510s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.57 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "1.56 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 822784415 +SEED=822784415 -fprofile+perf=high+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_reset_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 3,
          "profilerId": 4,
          "name": "std",
          "localHits": 1,
          "localPercentage": "25.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_880.csv"
    },
    {
      "id": 9,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 05:03",
      "totalWallTime": "1.510s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.57 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "1.56 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 822784415 +SEED=822784415 -fprofile+perf=high+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_reset_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 10,
          "profilerId": 9,
          "name": "std",
          "localHits": 1,
          "localPercentage": "25.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_880.csv"
    },
    {
      "id": 11,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 03:28",
      "totalWallTime": "2.130s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.65 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "2.13 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 822784415 +SEED=822784415 -fprofile+perf+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_reset_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 11,
          "profilerId": 11,
          "name": "uvm_pkg",
          "localHits": 1,
          "localPercentage": "100.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_3997.csv"
    },
    {
      "id": 10,
      "methodology": "UVM",
      "designType": "RTL",
      "toolVersion": "QA Baseline: 2024.1 Beta - 5541880",
      "platform": "linux_x86_64",
      "dateOfCollection": "03/31/2023 at 05:03",
      "totalWallTime": "1.440s",
      "solverWallTime": "0.000s",
      "solverMemory": "0.65 MB",
      "randomizeCall": "0",
      "voptTime": "3.57 sec",
      "voptMemory": "0.38 GB",
      "voptCMDCommand": "vopt -fprofile \"+acc\" -o ethmac_tb_opt -2008 \"+floatparameters+UVM_TESTNAME+tx_cov_monitor+rx_cov_monitor\" -mfcu -timescale 1ns/1ns -timescale 1ns/10ps -csessiondir /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/sessions eth_dut_binds ethmac_tb -work /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work -statslog /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/stats_log -csession=incr -csessionid=1",
      "vsimTime": "1.51 sec",
      "vsimMemory": "0.75 GB",
      "vsimCMDCommand": "vsim -c -assertcounts -lib /home/habdel/viq/ethermac-2022.1/sim/vrm/VRMDATA/regression/Compile/qrun.out/work ethmac_tb_opt -sv_seed 28925691 +SEED=28925691 -fprofile+perf=high+solver+stats +UVM_TESTNAME=ethmac_reg_test +tx_cov_monitor=ethmac_tx_ethframe_cov +rx_cov_monitor=ethmac_rx_ethframe_cov +uvm_set_type_override=ethmac_reg_seq,ethmac_reg_access_seq -uvmcontrol=struct -msgmode both -displaymsgmode both -GfailureRate=8",
      "designCompositionName": "SV (DU: 77)",
      "designCompositionModules": "0",
      "designCompositionPackages": "0",
      "designCompositionInterfaces": "0",
      "designCompositionInstances": "0",
      "designUnits": [
        {
          "id": 9,
          "profilerId": 10,
          "name": "uvm_pkg",
          "localHits": 2,
          "localPercentage": "100.00%"
        }
      ],
      "profilingDataCluster": {
        "id": 1,
        "clusterName": "SPRONG"
      },
      "fileName": "ethmac_554.csv"
    }
  ]
*/
  constructor(private http: HttpClient) {
  }

  getClusterById(id: number) {
    return this.http.get<ProfilingData[]>(environment.baseUrl + `/profiling-data-clusters/getProfilingData/${id}`, {
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    })
  }

  set_profiling_data(data: ProfilingData[]) {
    this.profilingDataArray = data;
  }

  getVsimTimes(): number[] {
    let times: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      times.push(unitData.value)
    })
    console.log("vsimTimes " + times);

    return times
  }

  getVoptMemory(): number[] {
    let memories: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptMemory)
      memories.push(unitData.value)
    })
    console.log("voptmemories " + memories);

    return memories
  }

  getVsimMemory(): number[] {
    let memories: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimMemory)
      memories.push(unitData.value)
    })
    console.log("vsim memories " + memories);

    return memories
  }

  getTotalSimulations(): SingleAttribute {
    return {count: this.profilingDataArray.length, type: "Simulations"}

  }

  getDesigns(): SingleAttribute {
    let designs: Set<string> = new Set<string>()

    this.profilingDataArray.forEach((data) => {
      designs.add(data.designCompositionName)
    })

    return {count: designs.size, type: "Designs"}
  }

  getVoptTime_multiAttr(): MultiAttribute {
    let voptTimes: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptTime)
      voptTimes.push(unitData.value)
    })

    voptTimes.sort();

    return {
      min: voptTimes[0],
      max: voptTimes[voptTimes.length - 1],
      avg: this.getAverage(voptTimes),
      min_name: "Min Vopt Time",
      max_name: "Max Vopt Time",
      avg_name: "Avg Vopt Time",
      measuring_unit: "sec"
    }
  }

  getVsimTime_multiAttr(): MultiAttribute {
    let vsimTimes: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      vsimTimes.push(unitData.value)
    })

    vsimTimes.sort();

    return {
      min: vsimTimes[0],
      max: vsimTimes[vsimTimes.length - 1],
      avg: this.getAverage(vsimTimes),
      min_name: "Min Vsim Time",
      max_name: "Max Vsim Time",
      avg_name: "Avg Vsim Time",
      measuring_unit: "sec"
    }
  }

  getVoptMemory_multiAttr(): MultiAttribute {
    let VoptMemory: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptMemory)
      VoptMemory.push(unitData.value)
    })

    VoptMemory.sort();

    return {
      min: VoptMemory[0],
      max: VoptMemory[VoptMemory.length - 1],
      avg: this.getAverage(VoptMemory),
      min_name: "Min Vopt Memory",
      max_name: "Max Vopt Memory",
      avg_name: "Avg Vopt Memory",
      measuring_unit: "GB"
    }
  }

  getVsimMemory_multiAttr(): MultiAttribute {
    let VsimMemory: number[] = []

    this.profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      VsimMemory.push(unitData.value)
    })

    VsimMemory.sort();

    return {
      min: VsimMemory[0],
      max: VsimMemory[VsimMemory.length - 1],
      avg: this.getAverage(VsimMemory),
      min_name: "Min Vsim Memory",
      max_name: "Max Vsim Memory",
      avg_name: "Avg Vsim Memory",
      measuring_unit: "GB"
    }
  }

  getSamplesAndCalls(): DualAttribute {
    let samples: number = 0
    let calls: number = 0

    this.profilingDataArray.forEach((data) => {
      samples += data.totalSamples
      let calls_unit_data = new UnitData(data.randomizeCall)
      calls += calls_unit_data.value
    })

    return {samples: samples, calls: calls}
  }


  getUsageProfilingData(): Columns[] {
    let cols: Columns[] = []
    for (let i = 0; i < this.profilingDataArray.length; i++) {
      let calls_unit_data = new UnitData(this.profilingDataArray[i].randomizeCall)

      let col: Columns = {
        file_name: this.profilingDataArray[i].fileName,
        design_type: this.profilingDataArray[i].designType,
        methodology: this.profilingDataArray[i].methodology,
        language: this.profilingDataArray[i].designCompositionName.split(" ")[0],
        du_count: this.profilingDataArray[i].designUnits.length,
        vopt_time: this.profilingDataArray[i].voptTime,
        vsim_time: this.profilingDataArray[i].vsimTime,
        vopt_memory: this.profilingDataArray[i].voptMemory,
        vsim_memory: this.profilingDataArray[i].vsimMemory,
        pref_samples: this.profilingDataArray[i].totalSamples,
        randomize_calls: calls_unit_data.value,
        date_of_collection: this.profilingDataArray[i].dateOfCollection,
        vopt_cmd: this.profilingDataArray[i].voptCMDCommand,
        vsim_cmd: this.profilingDataArray[i].vsimCMDCommand,
      }
      cols.push(col)
    }

    console.log("cols " + cols.forEach((col) => {
      console.log(col)
    }));
    return cols
  }

  getAverage(array: number[]): number {
    let sum: number = 0
    array.forEach((value) => {
      sum += value
    })
    return (sum / array.length).toFixed(2) as unknown as number
  }
}
