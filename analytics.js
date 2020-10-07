//Médias

<script language="javascript">
if (typeof uetq !== "undefined"){
    window.uetq = window.uetq || []; 
    window.uetq.push
    ({'ec':'adhesion', 'ea':'etudiant'}); 
}
<script>


<script language="javascript">
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
<script>

// Create and Send a Pixel on front with TagCo
<script type="text/javascript">
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
<script>



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
<script language="javascript">
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
<script>


// Tracking download files from front with JQuery
 <script type="text/javascript">
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
<script>


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
<script type="text/javascript">
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


<script>


// SmartTag avec les tableaux permettant d'éviter les valorisations vides sur les paramètres
<script type="text/javascript">
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


<script>



// Trigger a pageView based on HREF changes
// SmartTag HERA complet qui fonctionne parfaitement
<script language="javascript">
<!--
// For the first page being viewed
if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: tC.internalvars.page_name_via_url,
                    level2: '1'
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: tC.internalvars.user_id_hera
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
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	page_name_hera = urlArray[2];
      if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: '1'
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: tC.internalvars.user_id_hera
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
<script>


//Update HERA internalvar
var hera_hostname = document.location.host
if (hera_hostname === "mr.mgen.fr") {
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


// SmartTag HERA complet qui fonctionne parfaitement
<script language="javascript">
<!--
// For the first page being viewed
if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: tC.internalvars.page_name_via_url,
                    level2: '1'
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: tC.internalvars.user_id_hera
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
	var urlPath = window.location.pathname;
	var urlArray = urlPath.split( '/' );
	if (urlArray[2] === undefined || urlArray[2] === "" ) {
	page_name_hera = urlArray[1];
}
else if (urlArray[3] === undefined && urlArray[2] !== undefined ){
	page_name_hera = urlArray[2];
} 
else if (urlArray[4] === undefined && urlArray[3] !== undefined ) {
	page_name_hera = urlArray[3];
}
else if (urlArray[5] === undefined && urlArray[4] !== undefined ) {
	page_name_hera = urlArray[4];
}
else page_name_hera = urlArray[5];

      if (window.addEventListener){
        window.ATInternet = {
            onTrackerLoad: function(){
                var ATconfig = {};
                ATconfig.site = tC.internalvars.siteLevel1;
                var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
                ATTag.page.set({
                    name: page_name_hera,
                    level2: '1'
                });
       ATTag.customVars.set({
      site: {
        "1": tC.internalvars.company_user_hera,
        "2": tC.internalvars.direction_user_hera,
        "3": tC.internalvars.sous_direction_user_hera
        }})
            ATTag.identifiedVisitor.set({
        id: tC.internalvars.user_id_hera
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
<script>