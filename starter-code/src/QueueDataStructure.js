//FIFO
function QueueDataStructure(max) {

    this.queueControl = [];
    this.MAX_SIZE = max ? max : 5;

    this.isEmpty = function () {
        return this.queueControl.length ? false : true;
    }

    this.canEnqueue = function () { return this.queueControl.length < this.MAX_SIZE; }

    this.enqueue = function (element) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(element);
            return this.queueControl;
        }
        else { return "Queue Overflow" }
    }

    this.dequeue = function () {

        return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();
    }
}
