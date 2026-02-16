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

export default instance;