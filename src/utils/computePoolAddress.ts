import { defaultAbiCoder } from '@ethersproject/abi'
import { getCreate2Address } from '@ethersproject/address'
import { keccak256 } from '@ethersproject/solidity'
import { Token } from '@uniswap/sdk-core'
import { FeeAmount, POOL_INIT_CODE_HASH } from '../constants'

/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export function getTickSpacing(fee: number): number {
  if (fee === 100) return 1;
  if (fee === 400) return 8;
  if (fee === 500) return 10;
  if (fee === 2500) return 50;
  if (fee === 3000) return 60;
  if (fee === 6000) return 120;
  if (fee === 10000) return 200;
  if (fee === 20000) return 400;

  throw new Error("Unsupported pool fee.");
}

export function computePoolAddress({
  factoryAddress,
  tokenA,
  tokenB,
  fee,
  initCodeHashManualOverride
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
  fee: FeeAmount
  initCodeHashManualOverride?: string
}): string {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  const tickSpacing = getTickSpacing(fee);
  return getCreate2Address(
    factoryAddress,
    keccak256(
      ['bytes'],
      [defaultAbiCoder.encode(['address', 'address', 'int24'], [token0.address, token1.address, tickSpacing])]
    ),
    initCodeHashManualOverride ?? POOL_INIT_CODE_HASH
  )
}
