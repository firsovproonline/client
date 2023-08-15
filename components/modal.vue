<template>
  <transition :name="modalClass">
    <div :class="modalClass" ref="modalDiv">
      <div
        :class="`${modalClass}-backdrop`"
        @click="closeModal"
      >
        <div :class="[{'simple-modal-scrollable': scrollable}, `${modalClass}-container`]"  >
          <div
            :class="`${modalClass}-content`"
            role="dialog"
            :aria-labelledby="headerId"
            :aria-describedby="bodyId"
            @click.stop
            ref="windiv"
          >
            <header
              :id="headerId"
              :class="`${modalClass}-header`"
            >
              <slot
                :id="bodyId"
                name="header"
              >
                Modal title
              </slot>
            </header>
            <section :class="`${modalClass}-body`">
              <slot name="body">
                Modal body
              </slot>
            </section>
            <footer :class="`${modalClass}-footer`">
              <slot name="footer" />

            </footer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    headerId: {
      type: String,
      required: true,
      default: null,
    },
    bodyId: {
      type: String,
      required: true,
      default: null,
    },
    modalClass: {
      type: String,
      default: 'simple-modal',
    },
  },
  data: () => ({
    proto : {left:0,top:0,left2:0,top2:0},
    isClicked : false
  }),

  mounted() {
    window.addEventListener('keydown', this.escCloseModal);
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseModal);
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    escCloseModal(e) {
      if (this.show && e.key === 'Escape') {
        this.closeModal();
      }
    },
  },
};
</script>
<style lang="scss">
.simple-modal {
  footer{
    box-shadow: none;
  }
  .buttonDiv{
    font-family: Tahoma,Helvetica;
    padding: 6px;
    font-size: inherit;
    color: black;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    border: 1px solid #a4bed4;
    background-color: #e2efff;
    background: linear-gradient(#e2efff,#d3e7ff);
    background: -webkit-linear-gradient(#e2efff,#d3e7ff);
    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#e2efff,endColorStr=#d3e7ff) progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    margin: 5px 2px;
    border-radius: 2px;
    float: left;
    cursor: default;
    clear: both;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
  }



  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
    z-index: 9999;
  }
  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }
  &-scrollable {
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: fit-content;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    box-sizing: border-box;
    transform: translate(0, 0);
    transition: all 0.3s ease;
  }
  &-header {
    padding-bottom: 16px;
    font-size: 14px;
    text-align: center;
  }
  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }
}
</style>
