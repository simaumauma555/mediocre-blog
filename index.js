let englishLearningButton =document.getElementById("english-learning");
englishLearningButton.onclick=function(){
    let title = document.getElementById("title");
    title.innerText="英語学習";
    let blogTitle1=document.getElementById("blog-title1");
    let blogTitle2=document.getElementById("blog-title2");
    let titleImage=document.getElementById("title_img");
    let explanation=document.getElementById("explanation");
    blogTitle1.innerText="スピーキングについて";
    blogTitle2.innerText="リスニングについて";
    titleImage.src="pictures/uk_image2.JPG";
    explanation.innerHTML="<p>30歳手前で突然海外関連部門に配属され、そこから慌てて英語を勉強し始め、なんとかビジネスレベル（TOEIC: 980点）の英語を獲得しました。</p><p>英語を勉強されている方にその経験を共有し、微力ながら参考になる情報を提供したいと思います。</p>";
};

let UKLifeButton =document.getElementById("UK-life");
UKLifeButton.onclick=function(){
    let title = document.getElementById("title");
    title.innerText="イギリスの生活";
    let blogTitle1=document.getElementById("blog-title1");
    let blogTitle2=document.getElementById("blog-title2");
    let titleImage=document.getElementById("title_img");
    let explanation=document.getElementById("explanation");
    blogTitle1.innerText="イギリスの交通ルール完全攻略";
    blogTitle2.innerText="イギリスでの買い物";
    explanation.innerText="海外駐在の機会をいただきイギリスに生活しております（2020年時点）。今後イギリスに住まれる方や旅行でイギリスに来られる方に向けて、有用な情報を提供していきたいと考えています。"
   titleImage.src="pictures/uk_image1.JPG";
};