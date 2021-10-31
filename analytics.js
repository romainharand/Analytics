//Médias


if (typeof uetq !== "undefined"){
    window.uetq = window.uetq || []; 
    window.uetq.push
    ({'ec':'adhesion', 'ea':'etudiant'}); 
}


    switch (#EVENT_NAME#) 
    if (typeof fbq !== "undefined"){{
case "accueil espace persoGAOJIINIT":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIEQUI":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIREF":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIESS":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIINTEG":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIINIP":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIEQUP":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIREFP":
fbq('trackCustom', 'OJI');
      break;
case "accueil espace persoGAOJIESSP":
fbq('trackCustom', 'OJI');
      break;
default :
      break;
    }}


// Create and Send a Pixel on front with TagCo
  if (codeOffrePourTagCo.toLowerCase().indexOf('efficience')===0){
      tC.imageElt1 = document.createElement("img");
      tC.imageElt1.id = "tc_img_118_1";
      tC.imageElt1.height = "1";
      tC.imageElt1.width = "1";
      tC.imageElt1.style.borderStyle = "none";
      tC.imageElt1.alt = "";
      tC.imageElt1.src = "//www.googleadservices.com/pagead/conversion/XXXXXXX/?label=XXXXXXXXXX&guid=ON&script=0";
      document.body.appendChild(tC.imageElt1);
  }



// Split URLs
if (tc_vars["env_subsite"] === 13) && (tc_vars["service_category"] === "" || tc_vars["service_category"] === "undefined") {
tC.internalvars.service_category = "";
var urlPath = window.location.pathname;
var urlArray = urlPath.split( '/' );
tC.internalvars.service_category = urlArray[3];
} else {
  tC.internalvars.service_category = tc_vars["service_category"]
}

// Split URLs from last
var url = window.location.pathname;
url[] urlArray = url.split("/");
var lastPath = urlArray[urlArray.length-1];

tC.internalvars.product_url = "";
var urlPath = window.location.pathname;
var urlArray = urlPath.split( '/' );
tC.internalvars.product_url = urlArray[urlArray.length-1];


// Simple Split URL
tC.internalvars.download_file_path = "";
if (this.href) {

}
var urlPath = window.location.pathname;
var urlArray = urlPath.split( '/' );
tC.internalvars.product_url = urlArray[2];

 // Internal variable for Href
automatic_tracking_download = "";
var href_gathered = this.href.replace(/^.*\/\//, '');
var fileAdmin = "fileadmin";
if (href_gathered.includes(fileAdmin)) {

	var href_splitted = href_gathered.split( '/' , 5);
	var href_splitted_docName = href_splitted[5];
  automatic_tracking_download = href_splitted_docName;
}
else {
 
  automatic_tracking_download = this.href.replace(/^.*\/\//, '')
  
     }


// URL path for HERA
var hera_hostname = document.location.host
if (hera_hostname === "mr.mgen.fr") {
var urlPath = window.location.pathname;
var urlArray = urlPath.split( '/' );
tC.internalvars.page_name_via_url = urlArray[2];
}


// Tracking clicks from front
document.addEventListener('DOMContentLoaded', function() {
   // var cta = document.querySelectorAll("a.external-link-new-window.btn.btn-primary.tagClic")
   var cta = document.querySelectorAll('a[class*="TagClic"]')
  for (i = 0; i < cta.length; i++) {
      cta[i].addEventListener('click', function() {
        var idElt = this.getAttribute('title');
        var href_name = this.href;
        if (!idElt) {
        	var name_final = href_name
        }
        else {
        	var name_final = idElt
        }
       var ATconfig = {};
      ATconfig.site = tC.internalvars.siteLevel1;
        if (typeof(ATInternet) !== "undefined" && typeof(ATInternet.Tracker) !== "undefined") {
          var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
            ATTag.click.send({
            elem: this,
            name: rewriteAT(name_final),             
            chapter1: tC.internalvars.clic_automatique_chapter1,
            chapter2: rewriteAT(tc_vars["page_cat2"]),
            chapter3: rewriteAT(tc_vars["page_name"]),
            level2: tc_vars["env_subsite"],
            type: "action"
          })
        }
      });
    }
  })


// Tracking download files from front with JQuery
window.addEventListener("load", function() {
  var ATconfig = new Object();
  ATconfig.site = tC.internalvars.siteLevel1;
  if (typeof ATInternet.Tracker !== "undefined") {
    var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
    if (typeof jQuery != 'undefined') {
      jQuery(document).ready(function($) {
        $.expr[':'].regex = function(e, i, m) {
          var mP = m[3].split(','),
            l = /^(data|css):/,
            a = {
              method: mP[0].match(l) ? mP[0].split(':')[0] : 'attr',
              property: mP.shift().replace(l, '')
            },
            r = new RegExp(mP.join('').replace(/^\s+|\s+$/g, ''), 'ig');
          return r.test($(e)[a.method](a.property));
        };
        $('a:regex(href,^.*\\.(zip|mp\d+|mpe?g|pdf|docx?|pptx?|xlsx?|jpe?g|png|gif|tiff?)$)').bind('click', function(e) {
          // Use " this.href.replace(/^.*\/\//, '') " to pass the link in parameter
var href_gathered = this.href.replace(/^.*\/\//, '');
var fileAdmin = "fileadmin";
if (href_gathered.includes(fileAdmin)) {

	var href_splitted = href_gathered.split( '/' , 6);
	var href_splitted_docName = href_splitted[5];
  var automatic_tracking_download = href_splitted_docName;
}

 else {
 
  automatic_tracking_download = this.href.replace(/^.*\/\//, '')
  
     }
     

          if (tc_vars["page_cat3"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              chapter2: tc_vars["page_cat2"],
              chapter3: tc_vars["page_cat3"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else if (tc_vars["page_cat2"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              chapter2: tc_vars["page_cat2"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else if (tc_vars["page_cat1"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          }

});
      });
    }
  }
})


//Internal variables HERA
tC.internalvars.user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  tC.internalvars.user_id_hera = connected_user_uid;
} else {
  tC.internalvars.user_id_hera = ""
}



// SmartTag Original
  window.ATInternet = {
    onTrackerLoad:function(){
      var ATconfig = {};
      ATconfig.site = tC.internalvars.siteLevel1;
      var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
      ATTag.page.set({
        name:tC.internalvars.page_name_mgen,
        //name:tC.internalvars.page_name_AT,
        //chapter1:tC.internalvars.page_cat1,
        level2:tc_vars["env_subsite"]
      });




                  ATTag.customVars.set({
      site: {
        "1": tc_vars["env_template"],
        "2": tc_vars["product_category"],
        "3": tc_vars["product_name"],
        "4": tC.internalvars.service_category_2,
        "5": tc_vars["service_name"],
        "6": tc_vars["user_type"],
        "7": tc_vars["user_contract"],
        "8": tC.internalvars.ow_guarantee,
        "9": tc_vars["user_age"],
        "10": tc_vars["user_postalcode"],
        "11": tc_vars["user_city"],
        "12": tc_vars["user_department"],
        "13": tc_vars["user_recipient"],
        "14": tc_vars["user_section"],
        "15": tC.internalvars.responsive,
        "16": tc_vars["user_profil_type"],
        "17": tc_vars["accessibilite_faciliti"]
        },
      page: {
        "1": tC.internalvars.page_value1,
        "2": tC.internalvars.page_value2,
        "3": tC.internalvars.page_value3,
        "4": tC.internalvars.page_value4,
        "5": tC.internalvars.page_value5,
        "6": tC.internalvars.page_value6,
        "7": tC.internalvars.page_value7,
        "8": tC.internalvars.page_value8,
        "9": tC.internalvars.page_value9,
        "10": tC.internalvars.page_value10,
        "11": tC.internalvars.page_value11,
        "12": tC.internalvars.page_value12,
        "13": tC.internalvars.page_value13,
        "14": tC.internalvars.page_value14,
        "15": tC.internalvars.page_value15,
        "16": tC.internalvars.page_value16
        }
                  });


                  ATTag.internalSearch.set({
        keyword: tc_vars["search_keywords"],
        resultPageNumber: tc_vars["search_page_number"]
      });


                  ATTag.identifiedVisitor.set({
        id: tc_vars["user_id"],
        category: tc_vars["user_category"]
      });

      ATTag.dispatch();
    }
};


// SmartTag avec les tableaux permettant d'éviter les valorisations vides sur les paramètres
//Récupération des indicateurs de site existants
var tab_event_site = [#EVENT_SITE1#,#EVENT_SITE2#,#EVENT_SITE3#,#EVENT_SITE4#,#EVENT_SITE5#,#EVENT_SITE6#,#EVENT_SITE7#,#EVENT_SITE8#,#EVENT_SITE9#,#EVENT_SITE10#,#EVENT_SITE11#,#EVENT_SITE12#,#EVENT_SITE13#,#EVENT_SITE14#,#EVENT_SITE15#,#EVENT_SITE16#,#EVENT_SITE17#];
var indicateurs_site = {};
for(i=0; i<tab_event_site.length; i++){
  if(tab_event_site[i]){
    var param = i+1;
    indicateurs_site[param] = tab_event_site[i];
  }}
  
//Récupération des indicateurs de page existants
var tab_event_values = [#EVENT_VALUE1#,#EVENT_VALUE2#,#EVENT_VALUE3#,#EVENT_VALUE4#, #EVENT_VALUE5#,#EVENT_VALUE6#,#EVENT_VALUE7#,#EVENT_VALUE8#,#EVENT_VALUE9#,#EVENT_VALUE10#,#EVENT_VALUE11#,#EVENT_VALUE12#,#EVENT_VALUE13#,#EVENT_VALUE14#,#EVENT_VALUE15#,#EVENT_VALUE16#];
var indicateurs_page = {};
for(i=0; i<tab_event_values.length; i++){
  if(tab_event_values[i]){
    var param = i+1;
    indicateurs_page[param] = rewriteAT(tab_event_values[i]);
  }
}  

  
  window.ATInternet = {
    onTrackerLoad:function(){
      var ATconfig = {};
      ATconfig.site = tC.internalvars.siteLevel1;
      var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
      ATTag.page.set({
        name:tC.internalvars.page_name_mgen,
        //name:tC.internalvars.page_name_AT,
        //chapter1:tC.internalvars.page_cat1,
        level2:tc_vars["env_subsite"]
      });


                  ATTag.customVars.set({
      site: indicateurs_site,
      page: indicateurs_page
                  });


                  ATTag.internalSearch.set({
        keyword: tc_vars["search_keywords"],
        resultPageNumber: tc_vars["search_page_number"]
      });


                  ATTag.identifiedVisitor.set({
        id: tc_vars["user_id"],
        category: tc_vars["user_category"]
      });

      ATTag.dispatch();
    }
    };



//Update HERA internalvar
var hera_hostname = document.location.host
if (hera_hostname === "xx.xxx.fr") {
var urlPath = window.location.pathname;
var urlArray = urlPath.split( '/' );
if (urlArray[2] === undefined || urlArray[2] === "" ) {
	tC.internalvars.page_name_via_url = urlArray[1];
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	tC.internalvars.page_name_via_url = urlArray[2];
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	tC.internalvars.page_name_via_url = urlArray[3];
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	tC.internalvars.page_name_via_url = urlArray[4];
}
else tC.internalvars.page_name_via_url = urlArray[5];
}



// SmartTag qui fonctionne parfaitement
// For the first page being viewed

// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}
  

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if ((urlArraySites[2] === undefined || urlArraySites[2] === "") && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}


//Gestion des chapitres et noms des pages
  var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
  
  
  if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/XXXXX/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }  
 // for pages with HREF being changed 
  // store url on load
var currentPage = location.href;
// listen for changes
setInterval(function(){
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        // do your thing..
      
// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if (urlArraySites[2] === undefined && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}      
      
    var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
      if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/XXXXX/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }
    }
}, 5000);



// dernier tag SimSite

var wa = document.createElement("script");
wa.id = "tc_script_291_1";
    wa_s = document.getElementsByTagName("script")[0];
wa.src = "https://targetemsecure.blob.core.windows.net/"+tC.internalvars.simsite_js_call+".js";
wa.type = "text/javascript";
wa_s.parentNode.insertBefore(wa, wa_s);
wa.bt_queue = [];
wa.afterInit = function(){
  wa.bt_queue.push({ 
    "customIdentifier": tc_vars["user_id"],
    "tagValues":[
	{ "tag": "PAGE_NAME", "value": rewriteATForSimSite(tc_vars["page_name"]) },
	{ "tag": "URL", "value": rewriteATForSimSite(tc_vars["page_path"])},
	{ "tag": "PAGE_ESPACE_PERSONNEL", "value": rewriteATForSimSite(tc_vars["page_path"])},      
	{ "tag": "WEB_PROFIL_CONTACT", "value": tc_vars["user_contract"]},
    { "tag": "WEB_CONNEXION", "value": tC.internalvars.user_connected_SimSite },
    { "tag": "WEB_CONNEXION_LAST_DT", "value": "2020-10-28" }
	],
    "isEvent": true, 
    "isTargeting": true,
    "async": true 
  });
};



// Internalvars pour le user connecté SimSite
var tC.internalvars.user_connected_SimSite = "";
var web_connexion = "";
if (tc_vars["user_type"] === "anonyme" || tc_vars["user_type"] === "" || tc_vars["user_type"] === undefined){
	tC.internalvars.user_connected_SimSite = 0
}
else tC.internalvars.user_connected_SimSite = 1






// Tag Hera qui fonctionne parfaitement
// For the first page being viewed

// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}
  

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if ((urlArraySites[2] === undefined || urlArraySites[2] === "") && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}


//Gestion des chapitres et noms des pages
  var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
  
  
  if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/559311/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }  
 // for pages with HREF being changed 
  // store url on load
var currentPage = location.href;
// listen for changes
setInterval(function(){
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        // do your thing..
      
// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if (urlArraySites[2] === undefined && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}      
      
    var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
      if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/559311/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }
    }
}, 5000);






// New tag hera avec contrainte sur URL
// For the first page being viewed

// Contrainte sur l'URL
var urlExclusion = window.location.pathname;
if (urlExclusion.indexOf('ls') === -1) {


// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}
  

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if ((urlArraySites[2] === undefined || urlArraySites[2] === "") && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}


//Gestion des chapitres et noms des pages
  var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
  
  
  if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/559311/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }  
}
 // for pages with HREF being changed 


  // store url on load
var currentPage = location.href;
// listen for changes
setInterval(function(){
// URL exclusion 
 var urlExclusionBis = window.location.pathname;
if (urlExclusionBis.indexOf('ls') === -1) {	
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        // do your thing..
      
// Gestion de l'ID unique
var user_id_hera = "";
var connected_user = window.CONNECTED_USER;
if (typeof connected_user !== "undefined") {
  var connected_user_uid = connected_user.uid;
  user_id_hera = connected_user_uid;
} else {
  user_id_hera = ""
}

// Gestion des IDs de site
var IDSiteLevels = "";
var urlPathSites = window.location.pathname;
var urlArraySites = urlPathSites.split( '/' );
if (urlArraySites[2] === undefined && urlArraySites[1] === "accueil"){
	IDSiteLevels = 1
}
else if (urlArraySites[2] === "toute-lactualite") {
	IDSiteLevels = 2
}
else if (urlArraySites[2] === "directions") {
	IDSiteLevels = 3
}
else if (urlArraySites[2] === "groupe-mgen") {
	IDSiteLevels = 4
}
else if (urlArraySites[2] === "services-rh") {
	IDSiteLevels = 5
}
else if (urlArraySites[2] === "kiosque") {
	IDSiteLevels = 6
}
else if (urlArraySites[2] === "hub-abo") {
	IDSiteLevels = 7
}      
      
    var chapitre1 = "";
    var chapitre2 = "";
    var chapitre3 = "";
    var page_name_hera = "";   
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = rewriteATForHera(urlArray[1]);
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = rewriteATForHera(urlArray[2])
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	page_name_light = rewriteATForHera(urlArray[3]);
	page_name_hera = chapitre1 + "::" + page_name_light
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	chapitre1 = rewriteATForHera(urlArray[2]);
	chapitre2 = rewriteATForHera(urlArray[3]);
	page_name_light = rewriteATForHera(urlArray[4]);
	page_name_hera = chapitre1 + "::" + chapitre2 + "::" + page_name_light
}
else if (urlArray[5] !== undefined) {
	 chapitre1 = rewriteATForHera(urlArray[2]);
	 chapitre2 = rewriteATForHera(urlArray[3]);
	 chapitre3 = rewriteATForHera(urlArray[4]);
	 page_name_light = rewriteATForHera(urlArray[5]);
	 page_name_hera = chapitre1 + "::" + chapitre2 + "::" + chapitre3 + "::" + page_name_light
} 
      if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: IDSiteLevels
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: user_id_hera
      });
                ATTag.dispatch();
            }
        };
        (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/559311/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })();
    }
    }
}}, 5000);





// Tag d'automatick tracking download pour HERA
window.addEventListener("load", function() {
  var ATconfig = new Object();
  ATconfig.site = tC.internalvars.siteLevel1;
  if (typeof ATInternet.Tracker !== "undefined") {
    var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
    if (typeof jQuery != 'undefined') {
      jQuery(document).ready(function($) {
        $.expr[':'].regex = function(e, i, m) {
          var mP = m[3].split(','),
            l = /^(data|css):/,
            a = {
              method: mP[0].match(l) ? mP[0].split(':')[0] : 'attr',
              property: mP.shift().replace(l, '')
            },
            r = new RegExp(mP.join('').replace(/^\s+|\s+$/g, ''), 'ig');
          return r.test($(e)[a.method](a.property));
        };
        $('a:regex(href,^.*\\.(zip|mp\d+|mpe?g|pdf|docx?|pptx?|xlsx?|jpe?g|png|gif|tiff?)$)').bind('click', function(e) {
          // Use " this.href.replace(/^.*\/\//, '') " to pass the link in parameter
var href_gathered = this.href.replace(/^.*\/\//, '');
var fileAdmin = "fileadmin";
if (href_gathered.includes(fileAdmin)) {

	var href_splitted = href_gathered.split( '/' , 6);
	var href_splitted_docName = href_splitted[5];
  var automatic_tracking_download = href_splitted_docName;
}

 else {
 
  automatic_tracking_download = this.href.replace(/^.*\/\//, '')
  
     }
     

          if (tc_vars["page_cat3"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              chapter2: tc_vars["page_cat2"],
              chapter3: tc_vars["page_cat3"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else if (tc_vars["page_cat2"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              chapter2: tc_vars["page_cat2"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else if (tc_vars["page_cat1"]) {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              chapter1: tc_vars["page_cat1"],
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          } else {
            return ATTag.click.send({
              elem: this,
              name: automatic_tracking_download,
              level2: tc_vars["env_subsite"],
              type: 'action'
            });
          }

});
      });
    }
  }
})



// Gestion de la date pour SimSite sur la balide WEB_CONNEXION_LAST_DT
if (tC.internalvars.user_connected_SimSite === 1) {
var currentdate = new Date();
var realCurrentDateTime = currentdate.getDate() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear();
}


// Fonction de remplacement des caractères spéciaux + mise en minuscules
replaceCarSpec = function (t) {
  var TabCarSpec = {"à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","è":"e","é":"e","ê":"e","ë":"e","ç":"c","ì":"i","í":"i","î":"i","ï":"i","ù":"u","ú":"u","û":"u","ü":"u","ÿ":"y","ñ":"n"," ":"-","'":"-","\"":"-","+":"-","#":"~","_":"-"}; 
var reg = /[àáâãäåòóôõöøèéêëçìíîïùúûüÿñ '"+#_]/gi ;
var toi = t.replace(reg,function() {
      return TabCarSpec[arguments[0].toLowerCase()];
  }).toLowerCase().replace(/^[-]*(.+?)[-]*$/, '$1');

return toi === "-" ? "" : toi;
}

// Fonction de  nettoyage et d'optimisation des objets AT Internet
function ATCleanHit(obj) {
var propNames = Object.getOwnPropertyNames(obj);
for (var i = 0; i < propNames.length; i++) {
  var propName = propNames[i];

// Standardisation des propriétés valorisées dans AT Internet
obj[propName] = obj[propName] || obj[propName] === false ? String(obj[propName]) : "";

if (!propName.match(/^form_id|page_technicalURL|page_currenturl$/i))
  obj[propName] = replaceCarSpec(obj[propName]);

  // Suppression des propriétés non valorisées dans AT Internet
  if (obj[propName] === "")
    delete obj[propName];
}
}



// Fonction gestion valorisation DELTA
// Permet de set les propriétés DELTA non persistantes et persistantes
function ATSetPropList (list, persistance) {
  for ( var key in list ) {
      var keyName = key ;
      var keyValue = list[key];
      
  if (typeof window.ATTag !== "undefined")
    window.ATTag.setProp ( keyName, keyValue, persistance)
  }
}

ATCleanHit( deltaPropNonPersistent = {
  "variable1": "toto",
"variable2": "tata",
    "variable3": "tutu",
});

  /** Appel de la fonction côté statique pour set les props */
  ATSetPropList( deltaPropNonPersistent, false);


// Gestion consentement Kameleoon
try
{
	if (typeof kameleoonQueue !== "undefined"){
		window.tCKAnalyticsPurposeId = #PURPOSE#;
		// Check du consentement sur le page_load
		if (tC.internalvars.user_consent.split('-').indexOf(tCKAnalyticsPurposeId) !== -1){
			window.kameleoonQueue = window.kameleoonQueue || [];
			kameleoonQueue.push(['Kameleoon.API.Core.enableLegalConsent']);
			console.log("Kameleoon status = enableLegalConsent");
		}
		else
		{
			window.kameleoonQueue = window.kameleoonQueue || [];
			kameleoonQueue.push(['Kameleoon.API.Core.disableLegalConsent']);
			console.log("Kameleoon status = disableLegalConsent");
		}
		// Check du consentement suite à une interaction avec la popin
		if (typeof window.cact !== "undefined" && typeof window.Kameleoon !== "undefined"){
			window.cact('consent.onUpdate', function (consent)
			{
				consent = consent.consent;
				if (consent.categories && consent.categories[tCKAnalyticsPurposeId].status === "on")
				{
					window.kameleoonQueue = window.kameleoonQueue || [];
					kameleoonQueue.push(['Kameleoon.API.Core.enableLegalConsent']);
					console.log("Kameleoon status = enableLegalConsent");
				}
				else if (consent.categories && (consent.categories[tCKAnalyticsPurposeId].status === "off" || consent.categories[tCKAnalyticsPurposeId].status === "unset"))
				{
					localStorage.removeItem("kameleoonData"); 
					window.kameleoonQueue = window.kameleoonQueue || [];
					kameleoonQueue.push(['Kameleoon.API.Core.disableLegalConsent']);
					console.log("Kameleoon status = disableLegalConsent");
				}
			});
		}
	}
}
catch (e)
{
	console.log("Exception Kameleoon Consent : " + e);
}



//Stockage des click IDs
if (typeof tmsClickIdStorage === "undefined"){
    window.tmsClickIdStorage =
    {
        COOKIE_NAME: 'tc_clicks',
		COOKIE_DURATION: 30,
		partners: [
			"gclid", // Google Ads
			"msclkid", // Bing Ads
			"fbclid", // Facebook Ads
			"awc" // Awin
		],
        value: null,
		getClickIdFromUrl: function (q)
		{
			var a = document.location.href.match(new RegExp(q + "=([^&#]+)"));
			return a ? a[1] : false;
		},
		getClickId: function (p)
		{
			return this.value[p] ? this.value[p] : "";
		},
		save: function ()
        {
            tC.setCookie(this.COOKIE_NAME, btoa(JSON.stringify(this.value)), this.COOKIE_DURATION);
        },
		init: function ()
        {
            try
			{
				this.value = JSON.parse(atob(tC.getCookie(this.COOKIE_NAME)) || '{}');
			}
			catch (e)
			{}
			for (var i = 0; i < this.partners.length; i++)
			{
				var partner = this.partners[i];
				var clickId = this.getClickIdFromUrl(partner);
				if (clickId)
					this.value[partner] = clickId;
			}
			this.save();
        }
    };
    tmsClickIdStorage.init();
}



// Gestion des paramètres à ajouter dans l'URL des iframes SalesForce :  Paramètres de campagnes media (xtor) ; AT Internet UserId
var base64_decode = function(data){
 if(data.toString()=="null") return false; var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,   ac = 0, dec = '',   tmp_arr = [];  if (!data){
 return data;  }  data += '';  do {   h1 = b64.indexOf(data.charAt(i++));    h2 = b64.indexOf(data.charAt(i++)); h3 = b64.indexOf(data.charAt(i++)); h4 = b64.indexOf(data.charAt(i++)); bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;    o1 = bits >> 16 & 0xff;   o2 = bits >> 8 & 0xff;    o3 = bits & 0xff;   if (h3 == 64){
   tmp_arr[ac++] = String.fromCharCode(o1);  } else if (h4 == 64){
    tmp_arr[ac++] = String.fromCharCode(o1, o2);  } else {      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);  }  } while (i < data.length);  dec = tmp_arr.join('');  return decodeURIComponent(escape(dec.replace(/\0+$/, '')));};
var base64_encode = function(data){
 if(data.toString()=="null") return false; var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,   ac = 0, enc = '',   tmp_arr = [];  if (!data){
 return data;  }  data = unescape(encodeURIComponent(data));  do {   o1 = data.charCodeAt(i++);  o2 = data.charCodeAt(i++);  o3 = data.charCodeAt(i++);  bits = o1 << 16 | o2 << 8 | o3; h1 = bits >> 18 & 0x3f;   h2 = bits >> 12 & 0x3f;   h3 = bits >> 6 & 0x3f;    h4 = bits & 0x3f;   tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);  } while (i < data.length);  enc = tmp_arr.join('');  var r = data.length % 3;  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);};
var strpadLeft = function(c, n, s)
{
    var pad = "";
    s = s + "";
    for (var i = 0; i < n; i++)
        pad += c;
    return pad.substring(0, pad.length - s.length) + s;
};
if (typeof tmsSalesForceTrackingPro === "undefined")
{
    window.tmsSalesForceTrackingPro =
    {
        MF_CKN_XTOR: 'tc_xtors_pro', // Nom du cookie où stocker les xtors + dates
        MF_ATTR_WINDOW: 30, // Combien de jours de conservation des trackings media (xtor) ?
        MF_ATTR_NBTOUCH: 10, // Combien de touches marketing (xtor) envoie-t-on dans SalesForce ?
        value: null,
        getMediaTrackingFromUrl: function ()
        {
            var getParam = function (p)
			{
				var a = document.location.href.match(new RegExp(p + "=([^&#]+)"));
				return a ? a[1] : a;
			};
			var xtor = getParam('xtor');
			if (!xtor)
			{
				var medium = getParam('at_medium');
				var campaign = getParam('at_campaign');
				if (medium || campaign)
					xtor = [medium || "", campaign || "", getParam('at_channel') || "", getParam('at_creation') || "", getParam('at_variant') || "", getParam('at_format') || ""].join('_');
			}
            return xtor;
        },
        getCampaignParameters: function ()
        {
            var toi = [];
            // On retire toutes les touches qui ont dépassé la fenêtre d'attribution définie
            for (var i = 0; i < this.value.xtor.length; i++)
            {
                var date = new Date(this.value.xtor[i].date);
                if (((new Date()) - (new Date(date))) / (1000 * 3600 * 24) > this.MF_ATTR_WINDOW)
                {
                    this.value.xtor = this.value.xtor.slice(1);
                    i--;
                }
            }
            this.save();
            // Ajout des X dernières touches
            for (var i = this.value.xtor.length - 1; i >= 0 && toi.length < this.MF_ATTR_NBTOUCH; i--)
            {
                var date = new Date(this.value.xtor[i].date);
                toi.push((i == this.value.xtor.length - 1 ? "lasttouch=" : "") + date.getUTCFullYear() + strpadLeft("0", 2, (date.getUTCMonth() + 1)) + strpadLeft("0", 2, date.getUTCDate()) + ":" + this.value.xtor[i].xtor);
            }
			return toi.join('|');
        },
        updateHiddenField: function ()
        {
            var f = document.getElementById('erproFieldCampagne'); // Récupération du champ caché SalesForce
			if (f)
				f.value = this.getCampaignParameters();
			// Le formulaire du site pro est asynchrone et on n'a aucun trigger permettant de savoir que le formulaire est affiché, on temporise donc
			else if (tc_vars.page_category_2 == "devenir-client-formulaire")
				setTimeout(function (){
tmsSalesForceTrackingPro.updateHiddenField();}, 5000);
        },
        save: function ()
        {
            tC.setCookie(this.MF_CKN_XTOR, base64_encode(JSON.stringify(this.value)), this.MF_ATTR_WINDOW);
        },
        init: function ()
        {
            var xtUrl = this.getMediaTrackingFromUrl();
            this.value = JSON.parse(base64_decode(tC.getCookie(this.MF_CKN_XTOR)) || '{"xtor":[]}');
			// xtor trouvé
			if (xtUrl)
			{
				// On vérifie que ce xtor n'est pas déjà présent et si c'est le cas, on le supprime pour éviter de l'avoir en doublon (on ne garde que le plus frais)
				for (var i = 0; i < this.value.xtor.length; i++)
				{
					if (this.value.xtor[i].xtor == xtUrl)
					{
						this.value.xtor = this.value.xtor.slice(0, i).concat(this.value.xtor.slice(i + 1));
						i--;
					}
				}
				// Ajout du xtor et sauvegarde du cookie
				this.value.xtor.push({xtor: xtUrl, date: (new Date()).toISOString()});
			}
			this.save();
            // Mise à jour de l'URL de l'iframe SalesForce
            this.updateHiddenField();
        }
    };
    tmsSalesForceTrackingPro.init();
}
// Cas des pages qui se chargent en asynchrone
else
	tmsSalesForceTrackingPro.updateHiddenField();



  // APP Server side
  https://logsXXX.xiti.com/hit.xiti?s=#ENV_SITE#&s2=#PAGE_SECTION#&p=#PAGE_NAME_CONCATENATION#&idclient=#CLIENT_ID#&at=#USER_ID#&x1=#USER_IS_LOGGED#&x2=#ENV_IS_PRIVATE#&x4=#ENV_CHANNEL#&x5=#PROFIL_TIERS#&x6=#XTOR#&x7=#CLIENT_ID#&x8=#TC_MODEL_AND_VERSION#&x9=#PROFIL_CLIENT#&x10=#BANQUE_PAR_DEFAUT#&x11=#PAYLIB_SANS_CONTACT#&x12=#ID_ABONNEMENT#&x13=#NOMBRE_ABONNEMENT#&x14=#PROVENANCE#&x15=#NB_CARACTERE_RECHERCHE#&os_group=[#TC_LOCAL_SYSNAME#]&os_version=[#TC_LOCAL_SYSVERSION#]&mfmd=#TC_LOCAL_MODEL#&lng=#TC_LOCAL_LANGUAGE#&cn=#CNX#&apvr=[#TC_LOCAL_APPVERSION#]&xto=#XTOR#&xtor=#XTOR#&stc=%7B%22globVars%22%3A%7B%22env_work%22%3A%23ENV_WORK%23%2C%22user_is_logged%22%3A%23USER_IS_LOGGED%23%2C%22env_is_private%22%3A%23ENV_IS_PRIVATE%23%2C%22env_channel%22%3A%23ENV_CHANNEL%23%2C%22provenance%22%3A%23PROVENANCE%23%2C%22TC_MODEL_AND_VERSION%22%3A%23TC_MODEL_AND_VERSION%23%2C%22nb_caractere_recherche%22%3A%23NB_CARACTERE_RECHERCHE%23%2C%22profil_tiers%22%3A%23PROFIL_TIERS%23%7D%7D&vm=#visitor_mode#&vc=#visitor_consent#&user_consent=#user_consent_cat_1#-#user_consent_cat_3#-#user_consent_cat_4#-#user_consent_cat_5#&user_profile=#PROFIL_TIERS#&env_channel=#ENV_CHANNEL#&env_work=#ENV_WORK#&env_is_private=#ENV_IS_PRIVATE#&user_is_logged=#USER_IS_LOGGED#&modele_et_version=#TC_MODEL_AND_VERSION#&page_page_precedente=#PROVENANCE#&profil_client=#PROFIL_CLIENT#&paylib_sans_contact=#PAYLIB_SANS_CONTACT#&nombre_caractere_recherche=#NB_CARACTERE_RECHERCHE#

//Previous URL
  tC.internalvars.page_previousURL = (function(){
    var a = definePreviousPage();
    
    return a && a.hasOwnProperty('url') ? a.url : "";
  })();


// Saves the different tc_vars objects received in an array
var tmsTcVarsSaver = function (e, d)
{
    tc_vars_array.push({
		event:		e ? e : "page_load",
		tc_vars:	tmsTcVarsCleaner(d)
	});
};


// Last event generated
tC.internalvars.event_lastEventName = (function ()
{
	var toi = "page_load";
	
	try
	{
		toi = tc_vars_array[tc_vars_array.length - 1].event;
	}
	catch (e)
	{}
	
	return toi;
})();


// Last event generated
  tC.internalvars.event_lastPEventData = (function ()
{
	var toi = "page_load";
	
	try
	{
		var tmp = false, i = tc_vars_array.length - 1;
		
		while (!tmp && i >= 0)
		{
			if (tc_vars_array[i].event.indexOf('page') !== -1)
				tmp = tc_vars_array[i].tc_vars;
			
			i--;
		}
		
		if (tmp)
			toi = tmp;
	}
	catch (e)
	{}
	
	return toi;
})();