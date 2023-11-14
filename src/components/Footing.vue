<template>
  <footer class="flex flex items-center justify-between w-full px-3 text-slate-900 xl:px-12 text-center fixed inset-x-0 bottom-0 py-3 bg-white drop-shadow-2xl shadow-slate-200/20">
    <div class="flex items-center">
      <a href="https://twitter.com/dolphinal" target="_blank" class="mr-2 hover:text-accent">
        <icon prefix="fab" icon="twitter" class="h-7" />
      </a>
      <a href="https://github.com/drazzardaq/dolphinal" target="_blank" class="mr-2 hover:text-accent">
        <icon prefix="fab" icon="github" class="h-7" />
      </a>
      <!-- <a href="#" target="_blank" class="hover:text-accent">
        <icon prefix="fas" icon="book" class="h-7" />
      </a> -->
    </div>
    <a href="https://coingecko.com" target="_blank" class="flex text-xs hover:text-accent items-center justify-center mx-auto">
      <p>Live Token Price: $0.00001</p>
      <a href="https://coingecko.com/" target="_blank" class="ml-3">
        <img src="@/assets/logos/coingecko.png" alt="CoinGecko Logo" title="CoinGecko" class="h-7">
      </a>
    </a>
    <div class="hidden xl:flex items-center mx-auto cursor-pointer" @click="addToken">
      <img src="@/assets/logos/dolphinal.png" alt="DOL Token" title="DOL" class="mr-2 h-8">
      <p class="font-bold text-accent">DOL</p>
    </div>
    <a href="https://pancakeswap.finance" target="_blank" class="flex text-xs hover:text-accent items-center justify-center ml-auto xl:mx-auto">
      <p class="hidden xl:inline-flex">Buy on PancakeSwap</p>
      <img src="@/assets/logos/pancakeswap.png" alt="PancakeSwap Logo" title="PancakeSwap Logo" class="h-6 ml-3">
    </a>
    <div class="hidden xl:flex items-center text-xs">
      <p class="mr-3">Inspired by</p>
      <a href="https://metamask.io" target="_blank">
        <img src="@/assets/logos/metamask.png" alt="MetaMask Logo" title="MetaMask" class="h-7">
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
import detectEthereumProvider from '@metamask/detect-provider'
import { useToast } from 'vue-toastification'

const toast = useToast()

export default defineComponent({
  name: 'Footing',

  components: {
    Icon
  },

  data() {
    return {
      web3Provider: undefined,
      token: {
        address: '0x715b4573d7922ACA78cE471dbEa97d2EB4261f41',
        symbol: 'DOL',
        decimals: 18,
        image: 'https://dolphinal.com/favicon/favicon-64x64.png'
      }
    }
  },

  async mounted() {
    const provider = this.web3Provider = await detectEthereumProvider()

    if (provider) {
      provider === window.ethereum
    } else {
      this.web3Provider = undefined
    }
  },

  methods: {
    async addToken() {
      if (this.web3Provider) {
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
              { chainId: '0x38' },
            ],
          })

          toast.success('Great!')
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x38',
                    chainName: 'Binance Smart Chain',
                    rpcUrls: ['https://bsc-dataseed.binance.org:443'],
                  },
                ],
              })

              toast.success('Great!')
            } catch (addError) {
              // console.log(addError)
              // Something got wrong with wallet_addEthereumChain
              toast.error('Something went wrong.')
            }
          }

          // console.log(switchError)
          // Something went wrong with wallet_switchEthereumChain
          toast.error('Something went wrong.')
        }

        const wasAdded = await this.web3Provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: this.token.address,
              symbol: this.token.symbol,
              decimals: this.token.decimals,
              image: this.token.image
            },
          },
        })

        if (wasAdded) {
          toast.success('Welcome!')
        } else {
          toast.info('Come back at any time...')
        }
      } else {
        toast.warning('MetaMask not installed.')
      }
    }
  }
})
</script>
