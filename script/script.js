// global vars
var config = {
    "os" : "linux"
}

var radio_btn = null;
var code_block = null;

var scroll_p = [];

var share_btn = null;
var txt_dom = null;

// when all DOM elements are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // initialize hoghlight.js
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });

    radio_btn = document.querySelectorAll('.code-opt input');
    code_block = document.querySelectorAll('.code-opt');

    radio_btn.forEach((d) => {
      d.addEventListener('change', (e) => {
        config[e.target.name] = e.target.value;
        e.target.checked = true;
        radio_btn.forEach(r => {
          if ( r.value.localeCompare(config[e.target.name]) == 0)
            r.checked = true; 
          else 
            r.checked = false;
        })
        update_codeblock();
      });

    })

    // add an id to every <p> element
    // TODO: consider doing this statically using some template engine
    // TODO: apply this to images, lists, etc. as well

    p_index = 0;
    document.querySelectorAll('p').forEach(p => {
      p.id = 'p' + p_index;
      p_index+=1;
    });

    share_btn = document.getElementById('share');
    share_btn.onmouseleave = e => {
      e.target.setAttribute('data-mouse', 'false');
    };
    share_btn.onmouseenter = e => {
      e.target.setAttribute('data-mouse', 'true');
    };
    share_btn.onclick = share;


  });

function share(){
  
  // create JSON of above info
  let info = {};
  // info["txt_begin"] = txt_begin;
  // info["txt_end"] = txt_end;
  console.log(txt_dom);
  info["txt_id"] = txt_dom.id;
  
  let info_json = JSON.stringify(info);
  //console.log(info_json);
  let link = window.location.href;

  if (url.includes('#')) {
    link = link.substring(0, link.indexOf('#'));
  }
  link = link + '#' + txt_dom.id + '?info=' + info_json;

  let tmp = null;
  tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = "";
  tmp.value = link;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
} 

// create event to copy highlighted text when user releases mouse
window.addEventListener('mouseup', e => {

  let sel = window.getSelection();
  console.log(sel);
  // only perform action if selected element is a text
  // if (sel.anchorNode != 'text')
  //   return;
  
  // get the selected text 
  //let txt = sel.toString();
  //get the index of the text's dom
  //console.log(sel.anchorNode);
  //console.log((sel.anchorNode.parentNode.childNodes));//.indexOf(sel.anchorNode);
  //console.log(dom_b);
  
  //sel.anchorOffset;
  //let txt_end = sel.focusOffset;
  // get the id of the p element

  
  let txt = sel.toString(); 
  let txt_rect =  sel.anchorNode.parentNode.getBoundingClientRect();
  // if the user didn't select any text or mouse is not near the selected DOM
  // hide the share button 
  console.log(e.screenY);
  console.log( txt_rect.height);

  if (sel.isCollapsed ||
      (e.screenY - txt_rect.top) > txt_rect.height + 100){

    // don't close the button if the mouse is at the share button
    if (share_btn.getAttribute('data-mouse'))
      return;
    
    share_btn.style.display = 'none';
    return;

  }
  
  txt_dom = sel.anchorNode.parentNode;  // identify which DOM element was selected

  // place the "share" button next to the DOM
 
  let txt_y = txt_rect.top + window.scrollY;    // get the location of the DOM in the screen
  share_btn.style.top = txt_y + 'px';   //place the share button next to the DOM
  share_btn.style.display = 'block';    // show the button

});

var y = null;

window.addEventListener("load", e => {
    
    document.querySelectorAll('p').forEach(p => {
      rect = p.getBoundingClientRect();
      scroll_p.push({ "element": p, 
                      "y_offset_top": rect.top + window.scrollY,
                      "y_offset_bottom": rect.bottom + window.scrollY});
    });

    let url = window.location.href;
    // check if the url contains a link to a specific text
    if (url.includes('#')) {
      console.log("parse");
      //if so, parse the url to obtain the JSON data
      let info_index = url.search('=');
      let info_map = JSON.parse(decodeURI(url.substring(info_index+1)));

      let txt_id = info_map["txt_id"];
      //let txt_begin = info_map["txt_begin"];
      //let txt_end = info_map["txt_end"];

      //get the specified DOM
      let p_mod = document.getElementById(txt_id);
      //let old_txt = p_mod.innerHTML;
      p_mod.classList.add("highlight");
 
      //p_mod.scrollIntoView();
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      y = p_mod.getBoundingClientRect().top + window.scrollY;

      window.scrollTo(0, y);
    }

})


function update_codeblock(){
  code_block.forEach(c => {
    let option = c.querySelectorAll('input')[0].name;
    let selection = config[option];

    let pre = c.querySelectorAll('code');
    pre.forEach(p => {
      if (p.id.localeCompare(selection) == 0){
        p.classList.add("select")
      }
      else{
        p.classList.remove("select");
      }
    })
  })
}

const SCROLL_BUFFER = 200;

// window.addEventListener('scroll', e => {

//   let y = window.scrollY;
//   let window_height = document.documentElement.clientHeight;

//   scroll_p.forEach(p=>{

//     let p_y_top = p["y_offset_top"];
//     let p_y_bottom = p["y_offset_bottom"];

//     let y_bottom = y + window_height;
//     let y_top = y;

//     let p_e = p["element"];

//     //when the element is leaving the screen
//     if(p_y_bottom > y_top && p_y_bottom < y_top + SCROLL_BUFFER){
//       p_e.style.opacity = ease_in((p_y_bottom - y_top) / SCROLL_BUFFER);
//       p_e.style.transform = "translateY(" + ((1 - ease_in((p_y_bottom - y_top) / SCROLL_BUFFER)) * -100) + "px)";
//     }
//     // when the element is entering the screen
//     else if(p_y_top < y_bottom && p_y_top > y_bottom - SCROLL_BUFFER) {
//       p_e.style.opacity = ease_in((y_bottom - p_y_top) / SCROLL_BUFFER);
//       p_e.style.transform = "translateY(" + ((1 - ease_in((y_bottom - p_y_top) / SCROLL_BUFFER)) * 100) + "px)";
//     }
//     else{
//       p_e.style.opacity = 1;
//     }

//   });

// });


function ease_in(x){
  return 1 - Math.pow((1 - x), 2);
}

