<template>
  
</template>

<script>
import imgUrl from '@/assets/avatar.jpg'
export default {
    props:{
        avatar:{
            type:String,
            default:imgUrl
        },
        content:{
            type:String,
            default:""
        },
        time:{
            type:String,
             default:""
        },
        isSend:{
            validator: function (value) {
                return [0,1].indexOf(value) !== -1
            }
        },
        sendState:{
            type:Number,
            default:0
        }
    },
    render(){
        return   (
            <div class= {`msg-item  ${isSend === 0 ? "mine":"" }` }>
                <div class="avatarWrap">
                    <img src={avatar} />
                </div>
                <div class="content"> 
                    <div> {content} </div>
                </div>
            </div>
        ) 
    }

}
</script>

<style lang="scss" scoped>
.msg-item{
    height: 40px;
    display: flex;
    .avatarWrap{
        img{
            @include round(30px);
        }
    }
    .content{
        background: #fff;
        color: black;
    }
    &.mine{
        flex-direction: row-reverse;
        .content{
            background:$theme-color;
            color: #fff;
        }
    }

}
</style>