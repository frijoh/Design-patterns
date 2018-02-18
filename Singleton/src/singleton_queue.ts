class SingletonQueue {
    private queueNumber: number;
    private static singletonQueue: SingletonQueue = null;

    private constructor(){
        this.queueNumber = 0;
    }

    public static getSingletonQueueInstance(): SingletonQueue {
        if(!SingletonQueue.singletonQueue){
            SingletonQueue.singletonQueue = new SingletonQueue();
        }
        return SingletonQueue.singletonQueue;
    }

    public getQueueNumber(): number {
        return this.queueNumber++;
    }
}

class Main {
    public run(): void{
        const queue1: SingletonQueue = SingletonQueue.getSingletonQueueInstance();
        const queue2: SingletonQueue = SingletonQueue.getSingletonQueueInstance();

        console.log("Queue1 nr: " + queue1.getQueueNumber());
        console.log("Queue2 nr: " + queue2.getQueueNumber());
    }
}

const main = new Main().run(); 