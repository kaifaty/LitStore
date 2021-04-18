import { createStore, IStore } from '../src/store';


const RootStore = createStore(class {
    data = {
        lvl: 1,
        isHidden: false,
        userName: "Captain America"
    }
    increment(){
        this.data.lvl++;
    }
    toggle(){
        this.data.isHidden = !this.data.isHidden;
    }
})

const LVLMonitor = createStore(class {
    constructor(root: typeof rootStore){
        this.updateLvlStatus(root.data.lvl)
        root.on("lvl", (lvl: number) => {
            this.updateLvlStatus(lvl);
        })
    }
    data = {
        lvlStatus: ""
    }
    updateLvlStatus(lvl: number){
        this.data.lvlStatus = `Текущий уровень равен: ${lvl}`;
    }
});


export const rootStore = new RootStore; 
export const rootState = rootStore.data;
export const lvlMonitorStore = new LVLMonitor(rootStore);
export const lvlMonitorState = lvlMonitorStore.data;



