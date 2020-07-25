var englishLearningButton =document.getElementById("english-learning");
englishLearningButton.onclick=function(){
    let title = document.getElementById("title");
    title.innerText="英語学習";
    let blogTitle1=document.getElementById("blog-title1");
    let blogTitle2=document.getElementById("blog-title2");
    blogTitle1.innerText="スピーキングについて"
    blogTitle2.innerText="リスニングについて"
};

var UKLifeButton =document.getElementById("UK-life");
UKLifeButton.onclick=function(){
    let title = document.getElementById("title");
    title.innerText="イギリスの生活";
    let blogTitle1=document.getElementById("blog-title1");
    let blogTitle2=document.getElementById("blog-title2");
    blogTitle1.innerText="イギリスの交通ルール完全攻略"
    blogTitle2.innerText="イギリスでの買い物"
};