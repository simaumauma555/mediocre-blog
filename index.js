let titleImage=document.getElementById("title_img");
let explanation=document.getElementById("explanation");
let blogTitle1=document.getElementById("blog_title1");
let blogTitle2=document.getElementById("blog_title2");
let blogTitle3=document.getElementById("blog_title3");
let blogTitle4=document.getElementById("blog_title4");
let blogTitle5=document.getElementById("blog_title5");
let blogTitle6=document.getElementById("blog_title6");
let blogTitle7=document.getElementById("blog_title7");
let blogTitle8=document.getElementById("blog_title8");

let englishLearningButton =document.getElementById("english_learning");
englishLearningButton.onclick=function(){
    title.innerText="英語学習";
    titleImage.src="pictures/uk_image2.JPG";
    explanation.innerText="30歳手前で突然海外関連部門に配属され、そこから慌てて英語を勉強し始め、なんとかビジネスレベル（TOEIC: 980点）の英語を獲得しました。英語を勉強されている方にその経験を共有し、微力ながら参考になる情報を提供したいと思います。";
    
    blogTitle1.parentNode.style.display="block";
    blogTitle2.parentNode.style.display="block";
    blogTitle3.parentNode.style.display="block";
    blogTitle4.parentNode.style.display="block";
    blogTitle5.parentNode.style.display="block";
    blogTitle6.parentNode.style.display="block";
    blogTitle7.parentNode.style.display="block";
    blogTitle8.parentNode.style.display="block";
    
    blogTitle1.href="If_hearing_English_is_effective.html";
    blogTitle2.href="English_learning/Why_English_listening_is_so_hard.html";
    blogTitle3.href="English_learning/How_to_improve_english_listening.html";
    blogTitle4.href="English_learning/Dictation.html";
    blogTitle5.href="English_learning/Nuance.html";
    blogTitle6.href="English_learning/Improve_English_speaking_skill_with_conjunction.html";
    blogTitle7.href="English_learning/How_to_improve_english_speaking_for_beginner.html";
    blogTitle8.href="English_learning/How_to_improve_zatsudan.html";
    blogTitle1.innerText="英語の聞き流しはリスニング力向上に効果的か？";
    blogTitle2.innerText="英語を聞き取れるようになる方法";
    blogTitle3.innerText="英語のリスニング力を劇的に向上には？";
};

let UKLifeButton =document.getElementById("UK_life");
UKLifeButton.onclick=function(){
    title.innerText="イギリスの生活";
    titleImage.src="pictures/uk_image1.JPG";
    explanation.innerText="海外駐在の機会をいただきイギリスに生活しております（2020年時点）。今後イギリスに住まれる方や旅行でイギリスに来られる方に向けて、有用な情報を提供していきたいと考えています。" 
    blogTitle1.innerHTML="<a href='UK_life/UK_traffic_rule/traffic_speed.html' id='blog_title1' class='blog_title_all'>イギリスの制限速度</a>"
    blogTitle2.innerHTML="<a href='UK_life/UK_traffic_rule/traffic_differences.html' id='blog_title2' class='blog_title_all'>安心してイギリスで運転するために必要な事前知識</a>"
    blogTitle3.innerHTML="<a href='UK_life/UK_traffic_rule/traffic_differences2.html' id='blog_title3' class='blog_title_all'>安心してイギリスで運転するために必要な事前知識２</a>"

    blogTitle4.parentNode.style.display="none";
    blogTitle5.parentNode.style.display="none";
    blogTitle6.parentNode.style.display="none";
    blogTitle7.parentNode.style.display="none";
    blogTitle8.parentNode.style.display="none";
};