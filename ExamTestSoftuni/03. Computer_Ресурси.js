class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {

        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }


    installAProgram(name, requiredSpace){
        if(this.hddMemory < requiredSpace){
            throw Error("There is not enough space on the hard drive");
        }
        let obj ={
            name,
            requiredSpace,
        };
        this.installedPrograms.push(obj);

        this.hddMemory -= requiredSpace;

        return obj;
    };

    uninstallAProgram(name){

        let programToBeRemoved = this.installedPrograms.filter(x => x.name === name);

        if(programToBeRemoved.length === 0){
            throw Error('Control panel is not responding');
        }

        this.hddMemory += programToBeRemoved[0].requiredSpace;

        let index = this.installedPrograms.findIndex(x => x.name === name);

        this.installedPrograms.splice(index, 1);

        return this.installedPrograms;
    }

    get totalRamUsage(){
        let sum;
        if(this.taskManager.length !== 0){
             sum = this.taskManager.map(x => x.ramUsage).reduce((a,b) => a + b);
        }
         else{
            sum = 0;
        }
        return sum;
    }

    get totalCpuUsage(){
        let sum;

        if(this.taskManager.length !== 0){
            sum = this.taskManager.map(x => x.cpuUsage).reduce((a,b) => a + b);
        }
        else{
            sum = 0;
        }
        return sum;
    }


    openAProgram(name){
        let programToBeOpened = this.installedPrograms.filter(x => x.name === name);
        if(programToBeOpened.length === 0){
            throw Error(`The ${name} is not recognized`);
        }

        if(this.taskManager.filter(x => x.name === name).length !== 0){
            throw Error(`The ${name} is already open`);
        }

        let ramUsage= (programToBeOpened[0].requiredSpace / this.ramMemory) * 1.5;

        let cpuUsage = ( programToBeOpened[0].requiredSpace / this.cpuGHz / 500) * 1.5;

        if(this.totalRamUsage + ramUsage>= 100 && this.totalCpuUsage + cpuUsage >=100){
            throw Error(`${name} caused out of memory exception.`);
        }
        if(this.totalRamUsage + ramUsage >= 100){
            throw Error(`${name} caused out of memory exception.`);
        }
        if(this.totalCpuUsage + cpuUsage >= 100){
            throw Error(`${name} caused out of cpu exception.`);
        }


        let obj = {
            name,
            ramUsage,
            cpuUsage,
        };

        this.taskManager.push(obj);
        return obj;
    }


    taskManagerView(){

        let str = '';

        if(this.taskManager.length === 0){
            str = "All running smooth so far ";
        }else{
            this.taskManager.forEach(p => {
                str += `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%\n`;
            });
        }

        return str.substring(0, str.length - 1);
    }
}



