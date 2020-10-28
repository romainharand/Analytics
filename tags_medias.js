// Devis Affichage Prix Google
<!-- Event snippet for Affichage Tarif MSP conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
// Google Ads  
<script>
var gtag_report_conversion = function(url){
  var callback = function (){
    if (typeof(url) != 'undefined'){
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-874606173/'+tC.internalvars.google_devis_etape_2+'',
      'event_callback': callback
  });
  return false;
};


<script>
  gtag('event', 'conversion', {'send_to': 'AW-874606173/bHUeCJexp3IQ3dyFoQM'});
<script>


// Adhésion étape 1 Google
<!-- Event snippet for Vu Page Adhésion MSP conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
var gtag_report_conversion = function(url){
  var callback = function (){
    if (typeof(url) != 'undefined'){
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-874606173/'+tC.internalvars.google_adhesion_etape_1+'',
      'event_callback': callback
  });
  return false;
};
<script>


<!-- Event snippet for Affichage Tarif MSP conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-874606173/bHUeCJexp3IQ3dyFoQM'});
<script>



// Adhésion finale Google
<!-- Event snippet for Adhésion finale MSP conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
var gtag_report_conversion = function(url){
  var callback = function (){
    if (typeof(url) != 'undefined'){
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-874606173/'+tC.internalvars.google_adhesion_etape_4+'',
      'event_callback': callback
  });
  return false;
};
<script>


// New GoogleAds Tag
<script>
  gtag('event', 'conversion', {'send_to': 'AW-874606173/bHUeCJexp3IQ3dyFoQM'});
<script>




// Bing
<script>
if (codeOffrePourTagCo.toLowerCase().indexOf('efficience')===0){
window.uetq = window.uetq || [];
window.uetq.push('event', 'obtenir-mon-devis', {'event_category': ''+tC.internalvars.bing_nom_offre+''});
  alert("Bing Ads - Etape 4 devis téléchargé - EFS");
}

// New Bing tag
<script>
window.uetq = window.uetq || [];
window.uetq.push('event', 'obtenir-mon-devis', {'event_category': ''+tC.internalvars.bing_nom_offre+''});


// Facebook
<script>
!function(f,b,e,v,n,t,s){
if(f.fbq)return;n=f.fbq=function(){
n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1923410847900818'); // Insert your pixel ID here.
fbq('track', 'SubscribeEnd'+''+tC.internalvars.facebook_adhesion_etape_4, {
  content_name: ''+tC.internalvars.facebook_adhesion_etape_4+''
  });
<script>

//New Facebook Tag
fbq('init', '1923410847900818'); // Insert your pixel ID here.
fbq('track', 'SubscribeStart'+''+tC.internalvars.facebook_adhesion_etape_2, {
  content_name: ''+tC.internalvars.facebook_adhesion_etape_2+''
  });
  







//Devis étape 1 qui fonctionne
tC.imageElt1 = document.createElement("img");
tC.imageElt1.id = "tc_img_357_1";
tC.imageElt1.height = "1";
tC.imageElt1.width = "1";
tC.imageElt1.style.display = "none";
tC.imageElt1.alt = "";
tC.imageElt1.src = "https://px.ads.linkedin.com/collect/?pid=391196&conversionId="+tC.internalvars.linkedin_devis_etape_1+"&fmt=gif";
document.body.appendChild(tC.imageElt1);


//B to B qualité de vie  ne fonctionne pas

tC.imageElt1 = document.createElement("img");
tC.imageElt1.id = "tc_img__1";
tC.imageElt1.src = "https://px.ads.linkedin.com/collect/?pid=391196&conversionId=325576&fmt=gif";
tC.imageElt1.height = "1";
tC.imageElt1.width = "1";
tC.imageElt1.style.display = "none";
document.body.appendChild(tC.imageElt1);
