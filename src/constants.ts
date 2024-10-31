export const FACTORY_ADDRESS = '0x5e7BB104d84c7CB9B682AaC2F3d509f5F406809A'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xffb9af9ea6d9e39da47392ecc7055277b9915b8bfc9f83f105821b7791a6ae30'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
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
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOWMEDIUM]: 8,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUMLOW]: 50,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGHLOW]: 120,
  [FeeAmount.HIGH]: 200,
  [FeeAmount.HIGHEST]: 400
}
