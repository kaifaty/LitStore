import { BaseStore } from '../src/store';


class RootStore extends BaseStore{
    data = {
        lvl: 1,
        isHidden: false,
        userName: "Captain America"
    }
    constructor(){
        super();
        this.initState();
    }
    increment(){
        this.data.lvl++;
    }
    toggle(){
        this.data.isHidden = !this.data.isHidden;
    }
};

class LVLMonitor extends BaseStore {
    data = {
        lvlStatus: ""
    }
    constructor(root: typeof rootStore){
        super();
        this.initState();
        this.updateLvlStatus(root.data.lvl)
        root.on("lvl", lvl => {
            this.updateLvlStatus(lvl as number);
        })
    }
    updateLvlStatus(lvl: number){
        this.data.lvlStatus = `Current level: ${lvl}`;
    }
};


export const rootStore = new RootStore; 
export const rootState = rootStore.data;
export const lvlMonitorStore = new LVLMonitor(rootStore);
export const lvlMonitorState = lvlMonitorStore.data;



