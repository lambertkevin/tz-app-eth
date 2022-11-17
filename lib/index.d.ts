export default class TrezorEthereumBinding {
    setLoadConfig(): void;
    getAddress(path: string, boolDisplay?: boolean): Promise<{
        publicKey: string;
        address: string;
        chainCode?: string;
    }>;
}
