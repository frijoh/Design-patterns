class SingletonQueue {
    constructor() {
        this.queueNumber = 0;
    }
    static getSingletonQueueInstance() {
        if (!SingletonQueue.singletonQueue) {
            SingletonQueue.singletonQueue = new SingletonQueue();
        }
        return SingletonQueue.singletonQueue;
    }
    getQueueNumber() {
        return this.queueNumber++;
    }
}
SingletonQueue.singletonQueue = null;
class Main {
    run() {
        const queue1 = SingletonQueue.getSingletonQueueInstance();
        const queue2 = SingletonQueue.getSingletonQueueInstance();
        console.log("Queue1 nr: " + queue1.getQueueNumber());
        console.log("Queue2 nr: " + queue2.getQueueNumber());
    }
}
const main = new Main().run();
