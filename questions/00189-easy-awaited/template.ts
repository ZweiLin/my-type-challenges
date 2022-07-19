type MyAwaited<P> = P extends Promise<infer U> ? MyAwaited<U> : P
