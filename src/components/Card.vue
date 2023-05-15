<template>
    <div class="card_">
        <div>
            <i :class="icon"></i>
        </div>
        <div class="body">
            <h2 :class="title === 'FAQ' ? 'faq' : ''">{{title}}</h2>
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','body' , 'icon']
}
</script>

<style scoped>
.card_{
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    height: 150px;
    background:transparent;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 0px 10px;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 4px;
}
.bi{
    font-size: 50px;
    color:#dd3333;
    margin-left:20px ;
}
.card_ .body{
    margin-left: 20px;
}
.card_ .body h2{
    font-size: 25px;
    font-weight: bold;
}
.card_ .body h2.faq{
    font-size: 40px;
}
</style>