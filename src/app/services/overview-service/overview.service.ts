import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { UnitData } from 'src/app/models/session-overview-models/profiling-data/UnitData';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})



export class OverviewService {

    username = "omar.atef.2001@gmail.com"
    password = "1010abab";
    profilingDataArray: ProfilingData[] = [
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

    constructor(private http: HttpClient) {
    }

    getClusterById(id: number) {
        return this.http.get<ProfilingData[]>(environment.baseUrl + `/profiling-data-clusters/getProfilingData/${id}`, {
            headers: {
                Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
            }
        })
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


}
