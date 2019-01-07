<template>
    <div class="main">
        <div class="button-wrapper">
            <p>不同类型</p>
            <nu-button @click="handleTest">普通按钮</nu-button>
            <nu-button type="primary">primary</nu-button>
            <nu-button type="secondary">secondary</nu-button>
            <nu-button type="success">success</nu-button>
            <nu-button type="info">info</nu-button>
            <nu-button type="error">error</nu-button>
            <nu-button type="warning">warning</nu-button> 
            <p>禁用状态</p>
            <nu-button disabled type="primary">普通按钮</nu-button>
            <p>无波纹</p>
            <nu-button type="info" :ripple=false>无波纹按钮</nu-button>
            <p>圆形按钮</p>
            <nu-button type="info" round ></nu-button>
            <p>不同尺寸</p>
            <nu-button type="info" size="large">超大按钮</nu-button>
            <nu-button type="info" >默认大小</nu-button>
            <nu-button type="info" size="mini" >小按钮</nu-button>
            <p>fab 浮动按钮是圆形的，通常包含一个图标。</p>
            <nu-button fab type="info" icon="nu_icon-share"></nu-button>
            <p>图标按钮</p>
            <nu-button type="info" icon="nu_icon-checked"></nu-button>
            <nu-button type="info" icon="nu_icon-phone"></nu-button>
            <nu-button type="info" icon="nu_icon-search"></nu-button>
            <nu-button type="info" icon="nu_icon-close-outline"></nu-button>
            <nu-button type="info" icon="nu_icon-close"></nu-button>
            <nu-button type="info" class="btn-font" icon="nu_icon-user" size="large">带图标大按钮</nu-button><br>
            <nu-button fab type="info" icon="nu_icon-search"></nu-button>
            <nu-button fab type="info" icon="nu_icon-close-outline"></nu-button>
            <nu-button fab  type="info" icon="nu_icon-close"></nu-button>
            <p>loading按钮</p>
            <nu-button loading type="success">loading状态按钮</nu-button>
            <p>自动以颜色</p>
            <nu-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</nu-button>
        </div>
        <p>按钮组</p>
        <nu-button-group class="btn__group">
            <nu-button type="warning">警告按钮</nu-button>
            <nu-button type="primary" icon="nu__icon--checked">primary按钮</nu-button>
        </nu-button-group>
        </div> 
</template>
<script>
// @ is an alias to /src
export default {
    name: 'home',
    methods: {
        handleTest (){
            alert('good')
        }
    }
}
</script>
<style scoped lang="scss">
.main{
    padding-bottom: 60px;
}
.button-wrapper {
  text-align: center;
  .nu_btn{
    margin: 8px;
  }
  .btn-font{
    font-size: 18px;
  }
}
</style>