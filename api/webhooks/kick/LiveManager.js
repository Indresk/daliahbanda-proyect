class LiveManager{
    constructor(){
        this.liveStatus = false
    }

    setStatus(isLive) {
        this.liveStatus = isLive;
    }

    getStatus() {
        return this.liveStatus;
    }
}

const instance = new LiveManager();
Object.freeze(instance);

export default instance;