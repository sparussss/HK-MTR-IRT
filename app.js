const VERSION = "0.1";

const COLORS = {
  KTL:"#00ab4e", TWL:"#ed1c24", ISL:"#0075c9", SIL:"#b5bd00", TKL:"#7b2e8e",
  TCL:"#f58220", DRL:"#e779a9", EAL:"#5eb6e4", TML:"#8d5b2d", AEL:"#00888a",
  LR:"#d7a400", WALK:"#7b8794"
};

const LINES = {
  KTL:{name:"觀塘綫",type:"港鐵"}, TWL:{name:"荃灣綫",type:"港鐵"}, ISL:{name:"港島綫",type:"港鐵"},
  SIL:{name:"南港島綫",type:"港鐵"}, TKL:{name:"將軍澳綫",type:"港鐵"}, TCL:{name:"東涌綫",type:"港鐵"},
  DRL:{name:"迪士尼綫",type:"港鐵"}, EAL:{name:"東鐵綫",type:"港鐵"}, TML:{name:"屯馬綫",type:"港鐵"},
  AEL:{name:"機場快綫",type:"港鐵"}
};

const CN = {
"Whampoa":"黃埔","Ho Man Tin":"何文田","Yau Ma Tei":"油麻地","Mong Kok":"旺角","Prince Edward":"太子",
"Shek Kip Mei":"石硤尾","Kowloon Tong":"九龍塘","Lok Fu":"樂富","Wong Tai Sin":"黃大仙","Diamond Hill":"鑽石山",
"Choi Hung":"彩虹","Kowloon Bay":"九龍灣","Ngau Tau Kok":"牛頭角","Kwun Tong":"觀塘","Lam Tin":"藍田",
"Yau Tong":"油塘","Tiu Keng Leng":"調景嶺","Central":"中環","Admiralty":"金鐘","Tsim Sha Tsui":"尖沙咀",
"Jordan":"佐敦","Sham Shui Po":"深水埗","Cheung Sha Wan":"長沙灣","Lai Chi Kok":"荔枝角","Mei Foo":"美孚",
"Lai King":"荔景","Kwai Fong":"葵芳","Kwai Hing":"葵興","Tai Wo Hau":"大窩口","Tsuen Wan":"荃灣",
"Kennedy Town":"堅尼地城","HKU":"香港大學","Sai Ying Pun":"西營盤","Sheung Wan":"上環","Wan Chai":"灣仔",
"Causeway Bay":"銅鑼灣","Tin Hau":"天后","Fortress Hill":"炮台山","North Point":"北角","Quarry Bay":"鰂魚涌",
"Tai Koo":"太古","Sai Wan Ho":"西灣河","Shau Kei Wan":"筲箕灣","Heng Fa Chuen":"杏花邨","Chai Wan":"柴灣",
"Ocean Park":"海洋公園","Wong Chuk Hang":"黃竹坑","Lei Tung":"利東","South Horizons":"海怡半島",
"Tseung Kwan O":"將軍澳","Hang Hau":"坑口","Po Lam":"寶琳","LOHAS Park":"康城","Hong Kong":"香港",
"Kowloon":"九龍","Olympic":"奧運","Nam Cheong":"南昌","Tsing Yi":"青衣","Sunny Bay":"欣澳","Tung Chung":"東涌",
"Disneyland Resort":"迪士尼","Exhibition Centre":"會展","Hung Hom":"紅磡","Mong Kok East":"旺角東","Tai Wai":"大圍",
"Sha Tin":"沙田","Fo Tan":"火炭","University":"大學","Tai Po Market":"大埔墟","Tai Wo":"太和","Fanling":"粉嶺",
"Sheung Shui":"上水","Lo Wu":"羅湖","Lok Ma Chau":"落馬洲","Tuen Mun":"屯門","Siu Hong":"兆康",
"Tin Shui Wai":"天水圍","Long Ping":"朗屏","Yuen Long":"元朗","Kam Sheung Road":"錦上路","Tsuen Wan West":"荃灣西",
"Austin":"柯士甸","East Tsim Sha Tsui":"尖東","To Kwa Wan":"土瓜灣","Sung Wong Toi":"宋皇臺","Kai Tak":"啟德",
"Hin Keng":"顯徑","Che Kung Temple":"車公廟","Sha Tin Wai":"沙田圍","City One":"第一城","Shek Mun":"石門",
"Tai Shui Hang":"大水坑","Heng On":"恆安","Ma On Shan":"馬鞍山","Wu Kai Sha":"烏溪沙","Airport":"機場",
"AsiaWorld-Expo":"博覽館",

"Sam Shing":"三聖","Siu Lun":"兆麟","On Ting":"安定","Town Centre":"市中心","Kin On":"建安",
"Shan King (South)":"山景（南）","Shan King (North)":"山景（北）","Ming Kum":"鳴琴","Shek Pai":"石排","San Wai":"新圍",
"Leung King":"良景","Tin King":"田景","Kin Sang":"建生","Ching Chung":"青松","Kei Lun":"麒麟",
"Tuen Mun Ferry Pier":"屯門碼頭","Siu Hei":"兆禧","Hoi Wong Road":"海皇路","Goodview Garden":"豐景園",
"Ho Tin":"河田","Choy Yee Bridge":"蔡意橋","Ngan Wai":"銀圍","Tai Hing (South)":"大興（南）",
"Tai Hing (North)":"大興（北）","Melody Garden":"美樂","Butterfly":"蝴蝶","Light Rail Depot":"輕鐵車廠",
"Lung Mun":"龍門","Tsing Shan Tsuen":"青山村","Tsing Wun":"青雲","Affluence":"澤豐","Tuen Mun Hospital":"屯門醫院",
"Lam Tei":"藍地","Nai Wai":"泥圍","Chung Uk Tsuen":"鍾屋村","Hung Shui Kiu":"洪水橋","Tong Fong Tsuen":"塘坊村",
"Ping Shan":"屏山","Shui Pin Wai":"水邊圍","Fung Nin Road":"豐年路","Hong Lok Road":"康樂路","Tai Tong Road":"大棠路",
"Pui To":"杯渡","Hoh Fuk Tong":"何福堂","San Hui":"新墟","Prime View":"景峰","Fung Tei":"鳳地","Tin Tsz":"天慈",
"Tin Wu":"天湖","Ginza":"銀座","Tin Wing":"天榮","Tin Yuet":"天悅","Tin Sau":"天秀","Wetland Park":"濕地公園",
"Tin Heng":"天恆","Tin Yat":"天逸","Tin Fu":"天富","Chung Fu":"頌富","Tin Shui":"天瑞","Locwood":"樂湖",
"Tin Yiu":"天耀","Chestwood":"翠湖","Hang Mei Tsuen":"坑尾村","Yau Oi":"友愛"
};

const graph = new Map();
const stationMeta = new Map();

function cn(en){ return CN[en] || en; }
function ensureNode(en, mode){
  if(!graph.has(en)) graph.set(en, []);
  const m = stationMeta.get(en) || {en, cn:cn(en), modes:new Set()};
  if(mode) m.modes.add(mode);
  stationMeta.set(en,m);
}
function addEdge(a,b,info,cost=1){
  ensureNode(a,info.mode); ensureNode(b,info.mode);
  graph.get(a).push({to:b,cost,...info});
}
function addBi(a,b,info,cost=1){
  addEdge(a,b,info,cost); addEdge(b,a,{...info,destination:info.reverseDestination || info.destination},cost);
}

function addHeavy(lineKey, seq){
  seq.forEach(s=>ensureNode(s,"MTR"));
  for(let i=0;i<seq.length-1;i++){
    const a=seq[i], b=seq[i+1];
    addEdge(a,b,{lineKey, lineName:LINES[lineKey].name, mode:"MTR", destination:cn(seq[seq.length-1])},1);
    addEdge(b,a,{lineKey, lineName:LINES[lineKey].name, mode:"MTR", destination:cn(seq[0])},1);
  }
}

addHeavy("KTL",["Whampoa","Ho Man Tin","Yau Ma Tei","Mong Kok","Prince Edward","Shek Kip Mei","Kowloon Tong","Lok Fu","Wong Tai Sin","Diamond Hill","Choi Hung","Kowloon Bay","Ngau Tau Kok","Kwun Tong","Lam Tin","Yau Tong","Tiu Keng Leng"]);
addHeavy("TWL",["Central","Admiralty","Tsim Sha Tsui","Jordan","Yau Ma Tei","Mong Kok","Prince Edward","Sham Shui Po","Cheung Sha Wan","Lai Chi Kok","Mei Foo","Lai King","Kwai Fong","Kwai Hing","Tai Wo Hau","Tsuen Wan"]);
addHeavy("ISL",["Kennedy Town","HKU","Sai Ying Pun","Sheung Wan","Central","Admiralty","Wan Chai","Causeway Bay","Tin Hau","Fortress Hill","North Point","Quarry Bay","Tai Koo","Sai Wan Ho","Shau Kei Wan","Heng Fa Chuen","Chai Wan"]);
addHeavy("SIL",["Admiralty","Ocean Park","Wong Chuk Hang","Lei Tung","South Horizons"]);
addHeavy("TKL",["North Point","Quarry Bay","Yau Tong","Tiu Keng Leng","Tseung Kwan O","Hang Hau","Po Lam"]);
addHeavy("TKL",["North Point","Quarry Bay","Yau Tong","Tiu Keng Leng","Tseung Kwan O","LOHAS Park"]);
addHeavy("TCL",["Hong Kong","Kowloon","Olympic","Nam Cheong","Lai King","Tsing Yi","Sunny Bay","Tung Chung"]);
addHeavy("DRL",["Sunny Bay","Disneyland Resort"]);
addHeavy("EAL",["Admiralty","Exhibition Centre","Hung Hom","Mong Kok East","Kowloon Tong","Tai Wai","Sha Tin","Fo Tan","University","Tai Po Market","Tai Wo","Fanling","Sheung Shui","Lo Wu"]);
addHeavy("EAL",["Admiralty","Exhibition Centre","Hung Hom","Mong Kok East","Kowloon Tong","Tai Wai","Sha Tin","Fo Tan","University","Tai Po Market","Tai Wo","Fanling","Sheung Shui","Lok Ma Chau"]);
addHeavy("TML",["Tuen Mun","Siu Hong","Tin Shui Wai","Long Ping","Yuen Long","Kam Sheung Road","Tsuen Wan West","Mei Foo","Nam Cheong","Austin","East Tsim Sha Tsui","Hung Hom","Ho Man Tin","To Kwa Wan","Sung Wong Toi","Kai Tak","Diamond Hill","Hin Keng","Tai Wai","Che Kung Temple","Sha Tin Wai","City One","Shek Mun","Tai Shui Hang","Heng On","Ma On Shan","Wu Kai Sha"]);
addHeavy("AEL",["Hong Kong","Kowloon","Tsing Yi","Airport","AsiaWorld-Expo"]);

function addLRTDirection(route, seq, destination){
  seq.forEach(s=>ensureNode(s,"LRT"));
  for(let i=0;i<seq.length-1;i++){
    addEdge(seq[i],seq[i+1],{lineKey:"LR"+route,lineName:"輕鐵 "+route,mode:"LRT",route,destination:destination},1);
  }
}
function addLRTBoth(route, seq){
  addLRTDirection(route,seq,cn(seq[seq.length-1]));
  addLRTDirection(route,[...seq].reverse(),cn(seq[0]));
}

// 505 has direction-specific one-way stops around Shan King / Ming Kum.
addLRTDirection("505",["Sam Shing","Siu Lun","On Ting","Town Centre","Tuen Mun","Kin On","Shan King (South)","Shan King (North)","Shek Pai","San Wai","Leung King","Tin King","Kin Sang","Ching Chung","Kei Lun","Siu Hong"],"兆康");
addLRTDirection("505",["Siu Hong","Kei Lun","Ching Chung","Kin Sang","Tin King","Leung King","San Wai","Shek Pai","Ming Kum","Kin On","Tuen Mun","Town Centre","On Ting","Siu Lun","Sam Shing"],"三聖");

addLRTDirection("507",["Tuen Mun Ferry Pier","Siu Hei","Hoi Wong Road","Goodview Garden","Siu Lun","On Ting","Town Centre","Tuen Mun","Ho Tin","Choy Yee Bridge","Ngan Wai","Tai Hing (South)","Tai Hing (North)","San Wai","Leung King","Tin King"],"田景");
addLRTDirection("507",["Tin King","Leung King","San Wai","Tai Hing (North)","Tai Hing (South)","Ngan Wai","Choy Yee Bridge","Ho Tin","Tuen Mun","Town Centre","On Ting","Siu Lun","Goodview Garden","Hoi Wong Road","Siu Hei","Tuen Mun Ferry Pier"],"屯門碼頭");

addLRTBoth("610",["Tuen Mun Ferry Pier","Melody Garden","Butterfly","Light Rail Depot","Lung Mun","Tsing Shan Tsuen","Tsing Wun","Ming Kum","Shek Pai","Tai Hing (North)","Tai Hing (South)","Ngan Wai","Affluence","Tuen Mun Hospital","Siu Hong","Lam Tei","Nai Wai","Chung Uk Tsuen","Hung Shui Kiu","Tong Fong Tsuen","Ping Shan","Shui Pin Wai","Fung Nin Road","Hong Lok Road","Tai Tong Road","Yuen Long"]);
addLRTBoth("614",["Tuen Mun Ferry Pier","Siu Hei","Hoi Wong Road","Goodview Garden","Siu Lun","On Ting","Town Centre","Pui To","Hoh Fuk Tong","San Hui","Prime View","Fung Tei","Siu Hong","Lam Tei","Nai Wai","Chung Uk Tsuen","Hung Shui Kiu","Tong Fong Tsuen","Ping Shan","Shui Pin Wai","Fung Nin Road","Hong Lok Road","Tai Tong Road","Yuen Long"]);
addLRTBoth("614P",["Tuen Mun Ferry Pier","Siu Hei","Hoi Wong Road","Goodview Garden","Siu Lun","On Ting","Town Centre","Pui To","Hoh Fuk Tong","San Hui","Prime View","Fung Tei","Siu Hong"]);
addLRTBoth("615",["Tuen Mun Ferry Pier","Melody Garden","Butterfly","Light Rail Depot","Lung Mun","Tsing Shan Tsuen","Tsing Wun","Ming Kum","Shek Pai","San Wai","Leung King","Tin King","Kin Sang","Ching Chung","Siu Hong","Lam Tei","Nai Wai","Chung Uk Tsuen","Hung Shui Kiu","Tong Fong Tsuen","Ping Shan","Shui Pin Wai","Fung Nin Road","Hong Lok Road","Tai Tong Road","Yuen Long"]);
addLRTBoth("615P",["Tuen Mun Ferry Pier","Melody Garden","Butterfly","Light Rail Depot","Lung Mun","Tsing Shan Tsuen","Tsing Wun","Ming Kum","Shek Pai","San Wai","Leung King","Tin King","Kin Sang","Ching Chung","Kei Lun","Siu Hong"]);

addLRTDirection("705",["Tin Shui Wai","Tin Tsz","Tin Wu","Ginza","Tin Wing","Tin Yuet","Tin Sau","Wetland Park","Tin Heng","Tin Yat","Tin Fu","Chung Fu","Tin Shui","Locwood","Tin Yiu","Tin Shui Wai"],"天水圍（循環綫）");
addLRTDirection("706",["Tin Shui Wai","Tin Yiu","Locwood","Tin Shui","Chung Fu","Tin Fu","Tin Yat","Tin Heng","Wetland Park","Tin Sau","Tin Yuet","Tin Wing","Ginza","Tin Wu","Tin Tsz","Tin Shui Wai"],"天水圍（循環綫）");

addLRTBoth("751",["Yau Oi","On Ting","Town Centre","Tuen Mun","Ho Tin","Choy Yee Bridge","Affluence","Tuen Mun Hospital","Siu Hong","Lam Tei","Nai Wai","Chung Uk Tsuen","Hung Shui Kiu","Hang Mei Tsuen","Tin Shui Wai","Tin Tsz","Tin Wu","Ginza","Tin Wing","Chestwood","Chung Fu","Tin Fu","Tin Yat"]);
addLRTBoth("761P",["Yuen Long","Tai Tong Road","Hong Lok Road","Fung Nin Road","Shui Pin Wai","Ping Shan","Tong Fong Tsuen","Hang Mei Tsuen","Tin Yiu","Locwood","Tin Shui","Chung Fu","Tin Fu","Tin Yat"]);

// Paid-area pedestrian interchanges that use different station names.
ensureNode("Tsim Sha Tsui","MTR"); ensureNode("East Tsim Sha Tsui","MTR");
addEdge("Tsim Sha Tsui","East Tsim Sha Tsui",{lineKey:"WALK",lineName:"步行轉乘",mode:"WALK",destination:"尖東"},2);
addEdge("East Tsim Sha Tsui","Tsim Sha Tsui",{lineKey:"WALK",lineName:"步行轉乘",mode:"WALK",destination:"尖沙咀"},2);
ensureNode("Central","MTR"); ensureNode("Hong Kong","MTR");
addEdge("Central","Hong Kong",{lineKey:"WALK",lineName:"步行轉乘",mode:"WALK",destination:"香港站"},2);
addEdge("Hong Kong","Central",{lineKey:"WALK",lineName:"步行轉乘",mode:"WALK",destination:"中環站"},2);

function stateKey(node,line){ return node+"|||"+(line||""); }

function planRoute(start, goal){
  if(start===goal) return {edges:[],cost:0};
  const dist = new Map();
  const prev = new Map();
  const queue = [];
  const startKey = stateKey(start,"");
  dist.set(startKey,0);
  queue.push({node:start,line:"",cost:0,key:startKey});

  while(queue.length){
    queue.sort((a,b)=>a.cost-b.cost);
    const cur=queue.shift();
    if(cur.cost!==dist.get(cur.key)) continue;
    if(cur.node===goal){
      const edges=[];
      let k=cur.key;
      while(prev.has(k)){
        const p=prev.get(k);
        edges.push(p.edge);
        k=p.prevKey;
      }
      edges.reverse();
      return {edges,cost:cur.cost};
    }

    for(const edge of (graph.get(cur.node)||[])){
      const nextLine = edge.lineKey==="WALK" ? "" : edge.lineKey;
      const transferPenalty = (cur.line && nextLine && cur.line!==nextLine) ? 3 : 0;
      const walkPenalty = edge.lineKey==="WALK" ? 1 : 0;
      const ncost = cur.cost + edge.cost + transferPenalty + walkPenalty;
      const nk = stateKey(edge.to,nextLine);
      if(ncost < (dist.get(nk) ?? Infinity)){
        dist.set(nk,ncost);
        prev.set(nk,{prevKey:cur.key,edge:{...edge,from:cur.node}});
        queue.push({node:edge.to,line:nextLine,cost:ncost,key:nk});
      }
    }
  }
  return null;
}

function groupEdges(edges){
  if(!edges.length) return [];
  const groups=[];
  for(const e of edges){
    const last=groups[groups.length-1];
    const signature=e.lineKey+"|"+(e.destination||"");
    if(last && last.signature===signature && last.to===e.from){
      last.to=e.to; last.count++;
    }else{
      groups.push({
        signature,lineKey:e.lineKey,lineName:e.lineName,mode:e.mode,route:e.route,
        destination:e.destination,from:e.from,to:e.to,count:1
      });
    }
  }
  return groups;
}

function modeLabel(meta){
  const modes=[...meta.modes];
  if(modes.includes("MTR") && modes.includes("LRT")) return "港鐵／輕鐵";
  if(modes.includes("LRT")) return "輕鐵";
  return "港鐵";
}

function populateSelects(){
  const list=[...stationMeta.values()].sort((a,b)=>a.cn.localeCompare(b.cn,"zh-HK"));
  const html=['<option value="">請選擇車站</option>'].concat(
    list.map(s=>`<option value="${s.en}">${s.cn}　·　${modeLabel(s)}</option>`)
  ).join("");
  fromSelect.innerHTML=html; toSelect.innerHTML=html;
}

function colorFor(lineKey){
  if(lineKey==="WALK") return COLORS.WALK;
  if(lineKey.startsWith("LR")) return COLORS.LR;
  return COLORS[lineKey] || "#64748b";
}

function render(start,goal,result){
  resultSection.classList.remove("hidden");
  resultTitle.textContent=`${cn(start)} → ${cn(goal)}`;
  stopCount.textContent=result.edges.length;

  if(!result.edges.length){
    routeSteps.innerHTML=`<div class="step"><div class="dot" style="color:#0c2340"></div><div class="step-card"><div class="step-title">你已經喺 ${cn(start)}</div></div></div>`;
    return;
  }
  const groups=groupEdges(result.edges);
  routeSteps.innerHTML=groups.map((g,idx)=>{
    const color=colorFor(g.lineKey);
    if(g.lineKey==="WALK"){
      return `<div class="step walk">
        <div class="dot" style="color:${color}"></div>
        <div class="step-card">
          <div class="step-title">步行轉乘：${cn(g.from)} → ${cn(g.to)}</div>
          <div class="step-sub">跟站內指示步行前往另一車站／月台區域。</div>
        </div>
      </div>`;
    }
    const badge=g.mode==="LRT" ? `輕鐵 ${g.route}` : g.lineName;
    const towards=g.destination ? `往 ${g.destination} 方向` : "";
    const transferText=idx===0 ? "上車" : "轉乘";
    return `<div class="step">
      <div class="dot" style="color:${color}"></div>
      <div class="step-card">
        <div class="step-title"><span class="badge">${badge}</span>${transferText}・${towards}</div>
        <div class="step-sub">${cn(g.from)} → ${cn(g.to)} ・ ${g.count} 站</div>
      </div>
    </div>`;
  }).join("");
  resultSection.scrollIntoView({behavior:"smooth",block:"start"});
}

function saveHistory(start,goal){
  const key="hkRailHistory";
  let arr=JSON.parse(localStorage.getItem(key)||"[]");
  arr=arr.filter(x=>!(x.start===start&&x.goal===goal));
  arr.unshift({start,goal,t:Date.now()});
  arr=arr.slice(0,6);
  localStorage.setItem(key,JSON.stringify(arr));
  renderHistory();
}
function renderHistory(){
  const arr=JSON.parse(localStorage.getItem("hkRailHistory")||"[]");
  if(!arr.length){ historyList.className="history-list empty"; historyList.textContent="未有紀錄"; return; }
  historyList.className="history-list";
  historyList.innerHTML=arr.map((x,i)=>`<div class="history-item">
    <button type="button" data-h="${i}">${cn(x.start)} → ${cn(x.goal)}</button>
    <small>${new Date(x.t).toLocaleDateString("zh-HK")}</small>
  </div>`).join("");
  historyList.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
    const x=arr[Number(btn.dataset.h)];
    fromSelect.value=x.start; toSelect.value=x.goal; doPlan();
  }));
}

function doPlan(){
  const start=fromSelect.value, goal=toSelect.value;
  if(!start || !goal){ alert("請先選擇起點同終點。"); return; }
  const result=planRoute(start,goal);
  if(!result){ alert("暫時搵唔到可用路線。"); return; }
  render(start,goal,result); saveHistory(start,goal);
}

const fromSelect=document.getElementById("fromSelect");
const toSelect=document.getElementById("toSelect");
const planBtn=document.getElementById("planBtn");
const clearBtn=document.getElementById("clearBtn");
const swapBtn=document.getElementById("swapBtn");
const resultSection=document.getElementById("resultSection");
const resultTitle=document.getElementById("resultTitle");
const stopCount=document.getElementById("stopCount");
const routeSteps=document.getElementById("routeSteps");
const historyList=document.getElementById("historyList");
const clearHistoryBtn=document.getElementById("clearHistoryBtn");
const installBtn=document.getElementById("installBtn");

populateSelects(); renderHistory();

planBtn.addEventListener("click",doPlan);
swapBtn.addEventListener("click",()=>{ const a=fromSelect.value; fromSelect.value=toSelect.value; toSelect.value=a; });
clearBtn.addEventListener("click",()=>{ fromSelect.value=""; toSelect.value=""; resultSection.classList.add("hidden"); });
clearHistoryBtn.addEventListener("click",()=>{ localStorage.removeItem("hkRailHistory"); renderHistory(); });

document.querySelectorAll(".quick button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const f=[...stationMeta.values()].find(s=>s.cn===btn.dataset.from);
    const t=[...stationMeta.values()].find(s=>s.cn===btn.dataset.to);
    if(f&&t){fromSelect.value=f.en;toSelect.value=t.en;doPlan();}
  });
});

let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",(e)=>{
  e.preventDefault(); deferredPrompt=e; installBtn.classList.remove("hidden");
});
installBtn.addEventListener("click",async()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null; installBtn.classList.add("hidden");
});

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}
