declare namespace App {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Locals {}

   interface Platform {
       env: {
           COUNTER: DurableObjectNamespace;
       };
       context: {
           waitUntil(promise: Promise<any>): void;
       };
       caches: CacheStorage & { default: Cache }
   }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Session {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Stuff {}
}