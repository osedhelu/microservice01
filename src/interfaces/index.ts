export interface MessageResponse {
    ok: boolean;
    message?: any;
    data?: any;
    token?: any;
    total?: any;
    menu?: any;
}
export enum walletType {
    /**
     * el {AHORRO} en la preventa va a estar en USDT
     */
    AHORRO = "AHORRO",
    /**
    * el {DISPONIBLE} en la preventa va a estar en YAZ 
    */
    DISPONIBLE = "DISPONIBLE",
    /**
       * el {RESERVADO} en la preventa va a estar en YAZ 
       */
    RESERVADO = "RESERVADO",
}
export enum enumStatus {
    complete = "complete",
    Settled = "Settled",
    confirmed = "confirmed",
}
export enum typeDetailBalnce {
    recarga = "recarga",
    transaccion = "transaccion",
}
export enum WalletAirdrop {
    SUSCRIPTORES = "SUSCRIPTORES",
    DISPONIBLE = "DISPONIBLE"
}
export interface TypeWallet {
    ahorro: number;
    disponible: number;
    reservado: number;
    token_value: any;
}