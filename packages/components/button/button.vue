<template>
    <button 
        class="nu_btn"
        @click="handleClick" @mousedown = "handleRipple"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'nu_btn-'+type,'nu_btn-'+size,
        {'nu_btn-ripple':ripple,'is-plain': plain, 'round': round, 'nu_btn-fab': fab}
        ]"
        :disabled="disabled"
    >
        <i :class="icon" v-if="icon"></i>
        <i class="nu_icon-loading" v-if="loading && !icon"></i>
        <div class="ripple" vi-if="ripple" ref="ripple"></div>
        <!-- <span><slot></slot></span> -->
        <slot></slot>
    </button>
</template>

<script>

export default {
  name: 'nu-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    ripple:{
      type:Boolean,
      default:true
    },
    round: {
      type:Boolean,
      default:false
    },
    fab: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean
    
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return      
      this.$emit('click', event)// 传播方法名为click，你也可以自定义其他名字
    },
    handleRipple (e) {
      if (this.disabled) return
      if (this.ripple) {
        let self, ripple, size, rippleX, rippleY, eWidth, eHeight
        self = e.currentTarget || e.target

        // ripple = document.querySelector('.ripple')
        ripple = this.$refs.ripple
        ripple.classList.remove('animated');
        console.log(ripple.classList)

        eWidth = self.offsetWidth;
        eHeight = self.offsetHeight;
        size = Math.max(eWidth, eHeight)

        ripple.style.height = size+'px'
        ripple.style.width = size+'px'

        rippleX = parseInt(e.pageX - self.offsetLeft) - (size / 2);
        rippleY = parseInt(e.pageY - self.offsetTop) - (size / 2);


        ripple.style.top = rippleY + 'px'
        ripple.style.left = rippleX +'px'
        console.log(rippleX,rippleY)
        ripple.classList.add('animated');
      }      
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">

</style>
