import TrezorConnect from "@trezor/connect";

export default class TrezorEthereumBinding {
  setLoadConfig(): void {}

  async getAddress(
    path: string,
    boolDisplay = false
  ): Promise<{
    publicKey: string;
    address: string;
    chainCode?: string;
  }> {
    const result = await TrezorConnect.ethereumGetAddress({path: `m/${path}`, showOnTrezor: boolDisplay});
    if (!result.success) {
      throw new Error("Nope");
    }
    

    return {
      publicKey: '',
      address: result.payload.address,
    };
  }

}