export declare const FACTORY_ADDRESS = "0x5e7BB104d84c7CB9B682AaC2F3d509f5F406809A";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0xffb9af9ea6d9e39da47392ecc7055277b9915b8bfc9f83f105821b7791a6ae30";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOWEST = 100,
    LOWMEDIUM = 400,
    LOW = 500,
    MEDIUMLOW = 2500,
    MEDIUM = 3000,
    HIGHLOW = 6000,
    HIGH = 10000,
    HIGHEST = 20000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
