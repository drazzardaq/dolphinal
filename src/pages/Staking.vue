<template>
  <div class="flex flex-col justify-between px-12 pt-48">
    <div class="flex flex-col ml-1">
      <h1 class="text-5xl mb-5 -ml-1">CryptoStaking</h1>
      <p class="mb-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p class="mb-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <div class="flex w-full items-end justify-between">
        <p class="cursor-pointer hover:text-accent">Connect MetaMask</p>
        <p class="cursor-pointer hover:text-accent mx-auto">Add <span class="font-dol">DOL</span> Token</p>
        <a href="https://pancakeswap.finance" target="_blank" class="flex cursor-pointer hover:text-accent items-center mr-1">
          <p>Buy <span class="font-dol">DOL</span> on PancakeSwap</p>
          <icon prefix="fas" icon="arrow-up-right-from-square" class="h-5 ml-3" />
        </a>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 text-2xl items-center w-full bg-accent text-white p-5 my-5 rounded-md">
      <div class="flex items-center">
        <img src="@/assets/logos/dolphinal.png" alt="DOL Token" title="DOL Token" class="mr-3 h-12 w-12">
        <p class="font-dol">DOL</p>
      </div>
      <div class="flex items-center">
        <p>{{ stakingConfig.apy + '%' }}</p>
        <div class="flex items-center justify-center ml-3 mb-2 relative cursor-pointer text-white bg-accent rounded-md hover:bg-accent-200 transition-all p-2 w-6 h-6" @mouseover="hintAPY = true" @mouseleave="hintAPY = false">
          <icon prefix="fas" icon="info" class="h-3" />
          <hint :show="hintAPY" content="Annual Percentage Yield" />
        </div>
      </div>
      <div class="flex items-center">
        <p>{{ '$' + stakingConfig.tvl }}</p>
        <div class="flex items-center justify-center ml-3 mb-2 relative cursor-pointer text-white bg-accent rounded-md hover:bg-accent-200 transition-all p-2 w-6 h-6" @mouseover="hintTVL = true" @mouseleave="hintTVL = false">
          <icon prefix="fas" icon="info" class="h-3" />
          <hint :show="hintTVL" content="Total Locked Value" />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap z-50 bg-white border-accent w-full max-h-fit h-auto">
      <div class="grid grid-cols-3 gap-5 items-start w-full mb-5">
        <div class="h-12 px-5 flex items-center justify-between bg-accent text-white rounded-md">
          <p>Token Contract</p>
          <p class="ml-auto">{{ parseAdress(stakingConfig.address) }}</p>
          <a href="#" target="_blank" class="ml-3 cursor-pointer">
            <icon prefix="fas" icon="arrow-up-right-from-square" class="h-5 text-white" />
          </a>
        </div>
        <div class="h-12 px-5 flex items-center justify-between bg-accent text-white rounded-md">
          <p>Staking Contract</p>
          <p class="ml-auto">{{ parseAdress(stakingConfig.address) }}</p>
          <a href="#" target="_blank" class="ml-3 cursor-pointer">
            <icon prefix="fas" icon="arrow-up-right-from-square" class="h-5 text-white" />
          </a>
        </div>
        <div class="h-12 px-5 flex items-center justify-between bg-accent text-white rounded-md">
          <p>Remaing Time</p>
          <p class="ml-auto">{{ user.lockTime === 0 ? '0' : user.lockTime }}</p>
        </div>
      </div>
      <div class="flex items-start w-full">
        <div class="flex flex-col">
          <control color="accent" :disable="!connected || !(user.rewards > 0)" @click="claim">
            <icon prefix="fas" icon="check-circle" class="mr-3 h-5" />
            <p>Claim</p>
          </control>
          <div class="flex items-center justify-start ml-2 mt-1">
            <label class="mr-1">{{ user.rewards }}</label>
            <p class="font-dol">DOL</p>
          </div>
        </div>
        <div class="flex items-start mx-auto">
          <div class="flex flex-col mr-5 relative">
            <div class="absolute text-xs bg-accent/50 uppercase font-bold text-white rounded-md w-10 h-7 flex items-center justify-center hover:bg-accent z-50 cursor-pointer top-[0.7rem] left-[0.7rem]" @click="balances.deposit = user.wallet.balance">
              max
            </div>
            <input v-model="balances.deposit" type="number" class="h-12 rounded-md w-60 bg-white pr-5 text-right ring-0 outline-0 border-2 border-accent hover:border-accent focus:border-accent appearance-none">
            <div class="flex items-center justify-start ml-2 mt-1">
              <label class="mr-1">{{ user.wallet.balance }}</label>
              <p class="font-dol">DOL</p>
            </div>
          </div>
          <control color="accent" :disable="!connected || user.wallet.balance <= 0 || balances.deposit <= 0 || balances.deposit > user.wallet.balance" @click="stake">
            <icon prefix="fas" icon="coins" class="mr-3 h-5" />
            <p>Stake</p>
          </control>
        </div>
        <div class="flex items-start">
          <div class="flex flex-col mr-5 relative">
            <div class="absolute text-xs bg-accent/50 uppercase font-bold text-white rounded-md w-10 h-7 flex items-center justify-center hover:bg-accent z-50 cursor-pointer top-[0.7rem] left-[0.7rem]" @click="balances.deposit = user.wallet.balance">
              max
            </div>
            <input v-model="balances.withdraw" type="number" class="h-12 rounded-md w-60 bg-white pr-5 text-right ring-0 outline-0 border-2 border-accent hover:border-accent focus:border-accent appearance-none">
            <div class="flex items-center justify-start ml-2 mt-1">
              <label class="mr-1">{{ user.stakedBalance }}</label>
              <p class="font-dol">DOL</p>
            </div>
          </div>
          <control color="accent" :disable="!connected || user.lockTime <= 0 || user.stakedBalance <= 0 || balances.withdraw <= 0 || user.stakedBalance < balances.withdraw" @click="withdraw">
            <icon prefix="fas" icon="square-up-right" class="mr-3 h-5" />
            <p>Withdraw</p>
          </control>
        </div>
        <div class="flex items-center ml-5">
          <control color="accent" :disable="!connected || user.stakedBalance <= 0 || balances.withdraw <= 0 || user.stakedBalance < balances.withdraw" @click="emergencyWithdraw">
            <icon prefix="fas" icon="truck-medical" class="mr-3 h-5" />
            <p>Emergency</p>
          </control>
        </div>
      </div>
    </div>
  </div>

  <dolphin />
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
import Control from '@/components/Control.vue'
import Hint from '@/components/Hint.vue'
import Dolphin from '@/components/Dolphin.vue'
import DolphinalAbi from '@/assets/abi/DolphinalAbi.json'
import axios from 'axios'
import Web3 from 'web3'

export default defineComponent({
  name: 'Staking',

  components: {
    Icon,
    Control,
    Hint,
    Dolphin,
  },

  data() {
    return {
      hintAPY: false,
      hintTVL: false,
      balances: {
        deposit: 0,
        withdraw: 0,
      },
      connected: false,
      tokenAddress: '0x715b4573d7922ACA78cE471dbEa97d2EB4261f41',
      tokenContract: undefined,
      DolphinalAbi: DolphinalAbi,
      stakingConfig: {
        contract: undefined,
        tvl: 0,
        apy: 0,
        address: '',
        abi: undefined
      },
      user: {
        address: undefined,
        wallet: {
          label: undefined,
          walletIcon: undefined,
          balance: 0
        },
        approval: false,
        rewards: 0,
        stakedBalance: 0,
        lockTime: 0
      },
      timeInterval: undefined,
      dataInterval: undefined,
      walletModal: undefined,
      web3: undefined
    }
  },

  mounted() {
    // this.syncContracts()
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },

  methods: {
    async syncContracts() {
      const web3 = await new Web3('https://bsc-dataseed.binance.org:443')

      this.tokenContract = new web3.eth.Contract(this.DolphinalAbi, this.tokenAddress, web3.currentProvider)

      const contract = new web3.eth.Contract(this.stakingConfig.abi, this.stakingConfig.address, web3.currentProvider)
      this.stakingConfig.contract = contract

      const poolInfo = await contract.methods.poolInfo().call()
      const tvl = await contract.methods.getPoolTotalStakedSupply().call()
      const price = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dolphinal&vs_currencies=usd') // from CoinGecko
      const apy = poolInfo.periodRewardTokenCount * 525600 * price.data.dolphinal.usd / tvl * 1000000000000000000 // ether unit
      // console.log(web3.utils.fromWei(parseInt(apy).toString(), 'milli')) // apy in USD

      this.stakingConfig.tvl = parseFloat(web3.utils.fromWei(tvl) * price.data.dolphinal.usd).toFixed(2)
      this.stakingConfig.apy = parseFloat(web3.utils.fromWei(parseInt(apy).toString(), 'milli') * 1000).toFixed(2) // apy in DOL

      this.web3 = web3

      this.loading = false

      this.dataInterval = setInterval(async () => {
        const poolInfo = await contract.methods.poolInfo().call()
        const tvl = await contract.methods.getPoolTotalStakedSupply().call()
        const price = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dolphinal&vs_currencies=usd') // from CoinGecko
        const apy = poolInfo.periodRewardTokenCount * 525600 * price.data.dolphinal.usd / tvl * 1000000000000000000 // ether unit

        this.stakingConfig.tvl = parseFloat(web3.utils.fromWei(tvl) * price.data.dolphinal.usd).toFixed(2)
        this.stakingConfig.apy = parseFloat(web3.utils.fromWei(parseInt(apy).toString(), 'milli') * 1000).toFixed(2) // apy in DOL
      }, 1000 * 60 * 10)
    },
    async syncUser(addr) {
      const walletBalance = await this.tokenContract.methods.balanceOf(addr).call()
      const userInfo = await this.stakingConfig.contract.methods.userInfo(addr).call()
      const reward = await this.stakingConfig.contract.methods.calculateClaimableReward(addr, 0).call()

      this.timeInterval = setInterval(async () => {
        const lockTime = await this.stakingConfig.contract.methods.remainLockTime(addr).call()
        this.user.lockTime = this.parseTime(lockTime)
      }, 1000)

      this.user.wallet.balance = this.parseBalance(walletBalance, 1)
      this.user.stakedBalance = this.parseBalance(userInfo.amount, 0)
      this.user.rewards = this.parseBalance(reward, 0)
    },
    async claim() {
      this.stakingConfig.contract.methods.claim().call()
      this.syncUser(this.user.address)
    },
    async stake() {
      let uint256 = this.web3.utils.toWei(this.balances.deposit.toString(), 'ether')
      console.log('stake-amount', uint256)

      await this.tokenContract.methods.allowance(this.user.address, this.stakingConfig.address).call().then((allowance) => {
        console.log('allowance', allowance)
      })

      await this.stakingConfig.contract.methods.deposit(uint256).send({ from: this.user.address }).then((result) => {
        this.balances.deposit = 0
        this.user.approval = false
        console.log(result)
      })

      this.syncUser(this.user.address)
    },
    async approve() {
      let uint256 = this.web3.utils.toWei(this.balances.deposit.toString(), 'ether')
      console.log('approve-amount', uint256)

      await this.tokenContract.methods.approve(this.stakingConfig.address, uint256).send({ from: this.user.address }).then((result) => {
        this.user.approval = result
      })
    },
    async withdraw() {
      let uint256 = this.web3.utils.toWei(this.balances.withdraw.toString(), 'ether')
      console.log('withdraw-amount', uint256)
      this.balances.withdraw = 0

      await this.stakingConfig.contract.methods.withdraw(uint256).call()
      this.syncUser(this.user.address)
    },
    async emergencyWithdraw() {
      await this.stakingConfig.contract.methods.emergencyWithdraw().call()
      this.syncUser(this.user.address)
    },
    async provider() {
      if (window.BinanceChain && this.user.wallet.label === 'Binance Smart Wallet') {
        this.web3.setProvider(window.BinanceChain)
        this.web3.eth.setProvider(window.BinanceChain)
      } else {
        this.web3.setProvider(window.ethereum)
        this.web3.eth.setProvider(window.ethereum)
      }
    },
    parseBalance(balance, roundFactor) {
      let calculation = parseFloat(this.web3.utils.fromWei(balance.toString())).toFixed(0) - roundFactor
      return calculation
    },
    parseTime(timestamp) {
      let days = Math.floor(timestamp / 86400)
      let hours = Math.floor((timestamp - days * 86400) / 3600)
      let minutes = Math.floor((timestamp - days * 86400 - hours * 3600) / 60)
      let seconds = timestamp - days * 86400 - hours * 3600 - minutes * 60

      return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'
    },
    parseAdress(addr) {
      return addr.slice(0, 5) + '...' + addr.substring(addr.length - 5)
    },
    setConnectionParams(data) {
      this.connected = true
      this.user.address = data.wallets[0].accounts[0].address

      setTimeout(() => {
        this.user.wallet.label = data.wallets[0].label
        this.user.wallet.walletIcon = data.wallets[0].icon

        let svgContainer = document.getElementById('svg-container')
        svgContainer.innerHTML = data.wallets[0].icon

        this.syncUser(data.wallets[0].accounts[0].address)
        this.provider()
      }, 300)
    },
    disconnectWallet() {
      this.connected = false
      this.walletModal = false
      clearInterval(this.timeInterval)

      window.location.reload()
    }
  }
})
</script>
