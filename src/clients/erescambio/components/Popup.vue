<template>
  <div class="wrapper-popup" :class="{'p-active': active}">
    <div class="popup">
      <span class="close-icon" @click="deactivePopup()"></span>
      
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      close: {
        type: Boolean,
        default: () => {
          return true
        }
      },
      pactive: Boolean
    },
    computed: {
      active() {
        if (this.pactive == true) {
          document.querySelector('body').classList.add('popup-active')
        }
        return this.pactive
      }
    },
    methods: {
      deactivePopup() {
        this.$emit('popup-update', false)
        document.querySelector('body').classList.remove('popup-active')
      }
    }
  }
</script>

<style lang="scss" scoped>

.wrapper-popup {
  & {
    display: none;
  }
  &.p-active {
    position: fixed;
    z-index: 999;
    background-color: rgba(30, 30, 30, 0.87);
    color: #fff;
    width: 100%;
    height: calc( 100vh - 76px);
    left: 0;
    top: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    display: grid;
    overflow: auto;
  }
  .popup {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0px;
    text-align: left;
    
    h3{
      font-size: 1.75rem;
    }
    
    .close-icon {
      position: absolute;
      z-index: 99999;
      top: 10px;
      right: 10px;
      display: inline-block;
      margin: 0;
      padding: 0;
      border: 0;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: transparent;
      color: #ddd;
      border-radius: 0;
      cursor: pointer;
      vertical-align: top;
      outline: none;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
    .close-icon::after, .close-icon::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: calc(50% - 1px);
        height: 1.55px;
        width: 22px;
        left: calc(50% - 11px);
        display: inline-block;
        background-color: currentColor;
    }
    .close-icon::before {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .close-icon:after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
  }
  
}
</style>
