<template>
    <main class="col">
        <div class="card">
            <img :src='image'/>
            <div class="section1">
                <span>Tennis</span>
                <span class="highlight">HIGHLIGHT</span>
            </div>
            <span class="title">{{title}}</span>
            <span class="update">Update vor 9 Tagen</span>
            <div class="section">
                <div>
                    <i class="bi bi-person-fill"></i> <span>{{text}}</span>
                </div>
                <div class="mt-2">
                    <i class="bi bi-calendar-fill"></i> <span>{{date}}</span>
                </div>
            </div>
            <hr/>
            <div class="button">
                <button><i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props:['image' , 'title' , 'text' , 'date']
}
</script>

<style scoped>
.card{
    width: 300px;
    position: relative;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card img{
    height: 200px;
}
.card .section1{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
}
.card .section1 span{
    color: #dc3545;
}
.card .section1 .highlight{
    background: #dc3545;
    padding: 3px 10px;
    color: white;
    font-weight: bold;
}
.card .title{
    padding:0px 15px;
    font-size: 20px;
    font-weight: bold;
}
.card .update{
    color: #044386;
    padding: 0px 15px;
}
.card .section{
    padding: 0px 15px;
    margin-top: 10px;
}
.card .section div{
    font-size: 14px;
    color: #9b9b9b;
}
.card .button{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    margin-right: 10px;
}
.card button{
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5a6268;
    border: none;
    height: 40px;
    font-size: 30px;
    color: white;
    border-radius: 50%;
}
</style>