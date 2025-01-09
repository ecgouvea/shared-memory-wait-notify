const { workerData, parentPort } = require('worker_threads');

// Access the shared memory
const sharedArray = new Int32Array(workerData.sharedBuffer);

console.log('Worker thread: Starting task...');

// Simulate work (e.g., processing data)
setTimeout(() => {
    // Write a value to the shared memory
    Atomics.store(sharedArray, 0, 42); // Update value to 42

    // Notify the main thread
    console.log('Worker thread: Task completed, notifying main thread...');
    Atomics.notify(sharedArray, 0, 1); // Notify one waiting thread
}, 2000);
