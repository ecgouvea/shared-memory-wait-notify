const { Worker } = require('worker_threads');

// Create a SharedArrayBuffer (shared memory)
const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes for one Int32 value
const sharedArray = new Int32Array(sharedBuffer);

// Spawn a worker thread
const worker = new Worker('./worker.js', {
    workerData: { sharedBuffer },
});

// Wait for the worker to complete its task
console.log('Main thread: Waiting for signal...');
let waitReturn = Atomics.wait(sharedArray, 0, 0); // Wait until the value at index 0 changes
console.log(`waitReturn: ${waitReturn}`)
console.log('Main thread: Received signal!');

// Read the updated value
console.log('Main thread: Final value:', Atomics.load(sharedArray, 0));

// Exit the process
worker.terminate();
