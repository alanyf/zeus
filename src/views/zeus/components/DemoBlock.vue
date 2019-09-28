<template>
    <div class="demo-block" :class="[{ 'hover': hovering }]">
        <slot name="source"></slot>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <slot name="highlight"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/An-Old-Hope.css';
export default {
  data () {
    return {
      hovering: false,
    }
  },
  mounted(){
      console.log('demo-block');
  }
}
</script>
<style lang="less">
.demo-block{
    width: 100%;
    overflow: hidden;
    p{

        word-wrap:break-word; 
        word-break:break-all; 
    }
    pre{
        background-color: #272727;
        padding: 15px 20px;
        border-radius: 5px;
        color: #eee;
        overflow: scroll;
        span{
            font-size: 14px;
            line-height: 18px;
        }
        .hljs-name{
            color: #f1868a
        }
        .hljs-tag{
            color: #eee;
        }
        .hljs-attr{
            color: #99f170
        }
        .hljs-comment{
            color: #8a8a8a;
        }
        .attr-value, .hljs-string{
            color: rgb(230, 219, 106);
        }
        .hljs-keyword{
            color: #cc2c61;
        }
    } 
}



</style>
