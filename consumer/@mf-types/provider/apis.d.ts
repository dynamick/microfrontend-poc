
    export type RemoteKeys = 'provider/Button' | 'provider/App';
    type PackageType<T> = T extends 'provider/App' ? typeof import('provider/App') :T extends 'provider/Button' ? typeof import('provider/Button') :any;