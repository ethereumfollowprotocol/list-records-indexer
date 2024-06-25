import { raise } from './utilities'

export const env = Object.freeze({
  NODE_ENV: getEnvVariable('NODE_ENV'),
  ENABLE_DATABASE_LOGGING: getEnvVariable('ENABLE_DATABASE_LOGGING'),
  LLAMAFOLIO_ID: getEnvVariable('LLAMAFOLIO_ID'),
  MAINNET_ALCHEMY_ID: getEnvVariable('MAINNET_ALCHEMY_ID'),
  ANKR_ID: getEnvVariable('ANKR_ID'),
  INFURA_ID: getEnvVariable('INFURA_ID'),
  SEPOLIA_ALCHEMY_ID: getEnvVariable('SEPOLIA_ALCHEMY_ID'),
  BASE_SEPOLIA_ALCHEMY_ID: getEnvVariable('BASE_SEPOLIA_ALCHEMY_ID'),
  OP_SEPOLIA_ALCHEMY_ID: getEnvVariable('OP_SEPOLIA_ALCHEMY_ID'),
  OPTIMISM_ALCHEMY_ID: getEnvVariable('OPTIMISM_ALCHEMY_ID'),
  ETHEREUM_LOCAL_NODE_URL: getEnvVariable('ETHEREUM_LOCAL_NODE_URL'),
  DATABASE_URL: getEnvVariable('DATABASE_URL'),
  ANVIL_ACCOUNT_PRIVATE_KEY: getEnvVariable('ANVIL_ACCOUNT_PRIVATE_KEY'),
  CHAIN_ID: getEnvVariable('CHAIN_ID'),
  EFP_CONTRACTS: {
    LIST_RECORDS: getEnvVariable('EFP_CONTRACT_LIST_RECORDS')
  }
})

function getEnvVariable<T extends keyof EnvironmentVariables>(name: T) {
  return process.env[name] ?? raise(`environment variable ${name} not found`)
}
