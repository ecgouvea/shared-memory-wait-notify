# shared-memory-wait-notify

## Running with no timeout for Atomics.wait

```bash
> node .\main.js
Main thread: Waiting for signal...
waitReturn: ok
Main thread: Received signal!
Main thread: Final value: 42
Worker thread: Starting task...
```

## Running with 1_000 ms timeout for Atomics.wait

```bash
> node .\main.js
Main thread: Waiting for signal...
waitReturn: timed-out
Main thread: Received signal!
Main thread: Final value: 0
Worker thread: Starting task...
```