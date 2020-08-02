let englishLearningButton =document.getElementById("english_learning");
englishLearningButton.onclick=function(){
    let title = document.getElementById("title");
    title.innerText="英語学習";
    let blogTitle1=document.getElementById("blog_title1");
    let blogTitle2=document.getElementById("blog_title2");
    let titleImage=document.getElementById("title_img");
    let explanation=document.getElementById("explanation");
    blogTitle1.href="English_learning/If_hearing_English_is_effective.html";
    blogTitle1.innerText="英語の聞き流しはリスニング力向上に効果的か？"
    blogTitle2.innerText="英語を聞き取れるようになる方法";
    titleImage.src="pictures/uk_image2.JPG";
    explanation.innerHTML="<p>30歳手前で突然海外関連部門に配属され、そこから慌てて英語を勉強し始め、なんとかビジネスレベル（TOEIC: 980点）の英語を獲得しました。</p><p>英語を勉強されている方にその経験を共有し、微力ながら参考になる情報を提供したいと思います。</p>";
};

let UKLifeButton =document.getElementById("UK_life");
UKLifeButton.onclick=function(){
    let title = document.getElementById("title");
    let blogTitle1=document.getElementById("blog_title1");
    let blogTitle2=document.getElementById("blog_title2");
    let titleImage=document.getElementById("title_img");
    let explanation=document.getElementById("explanation");
    title.innerText="イギリスの生活";
    titleImage.src="pictures/uk_image1.JPG";
    blogTitle1.href="UK_life/UK_traffic_rule/traffic_speed.html";
    blogTitle2.href="UK_life/UK_traffic_rule/traffic_differences.html";
    blogTitle1.innerText="イギリスの交通ルール完全攻略";
    blogTitle2.innerText="イギリスでの買い物";
    explanation.innerText="海外駐在の機会をいただきイギリスに生活しております（2020年時点）。今後イギリスに住まれる方や旅行でイギリスに来られる方に向けて、有用な情報を提供していきたいと考えています。" 
};