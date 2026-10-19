const pool=[
['hw','Uy vazifasini bajar','Daftar yoki vazifa natijasining rasmini yubor.','📚','school','Maktab',20,25,true],
['grade','Yaxshi baho ol','Kundalik yoki nazorat ishidagi yaxshi bahoni ko‘rsat.','🏆','school','Maktab',35,40,true],
['read','15 daqiqa kitob o‘qi','Yangi bilim ol va o‘qigan sahifangni qayd et.','📖','school','Bilim',12,15,false],
['class','Sinfdoshga yordam ber','Do‘stingga dars mavzusini tushuntir.','🤝','school','Mehribonlik',18,20,false],
['project','Kichik loyiha yarat','Fan bo‘yicha rasm, model yoki taqdimot tayyorla.','🧪','school','Ijod',28,35,true],
['room','Xonangni tartibga keltir','Buyumlarni joyiga qo‘y.','🧹','home','Uy',12,15,true],
['help','Uyda yordam ber','Oilangga xavfsiz uy ishida ko‘maklash.','🏡','home','Uy',18,20,true],
['plant','O‘simlikni parvarishla','Gulga suv quy yoki o‘simlikka qaragin.','🪴','home','Uy',15,18,true],
['water','Suvni tejagin','Keraksiz paytda kranni yop.','💧','eco','Ekologiya',12,15,false],
['litter','Chiqindini xavfsiz yig‘','Qo‘lqop yoki qisqich bilan xavfsiz chiqindini yig‘ib, qutiga tashla.','🌱','eco','Ekologiya',30,35,true],
['sort','Chiqindini sarala','Qog‘oz va plastikni alohida ajrat.','♻️','eco','Ekologiya',22,25,true],
['tree','Yashil hududni asra','Gulzor yoki daraxt atrofini ozoda tut.','🌳','eco','Ekologiya',25,30,true],
['walk','10 daqiqa piyoda yur','Xavfsiz joyda sayr qil.','🚶','health','Foydali odat',10,15,false],
['sleep','Ertangi kunni tayyorla','Sumkangni tayyorlab, vaqtida dam ol.','🌙','health','Foydali odat',10,12,false],
['kind','Yaxshi so‘z ayt','Bir kishiga rahmat ayt yoki yordam ber.','💖','health','Mehribonlik',12,15,false]
].map(a=>({id:a[0],title:a[1],desc:a[2],emoji:a[3],cat:a[4],tag:a[5],tokens:a[6],xp:a[7],proof:a[8]}));
const items=[
["hoodie","Neon kurtka","Futuristik qahramon kiyimi","🧥",60,"token","Kiyim"],
["crown","Yulduzlar toji","Afsonaviy bosh kiyim","👑",100,"token","Bosh kiyim"],
["wings","Kristall qanotlar","Kamyob qanotlar","🪽",160,"token","Qanot va plash"],
["shades","Kosmik ko‘zoynak","Yangi uslub","🕶️",45,"token","Aksessuar"],
["shoes","Tezkor krossovka","Sportcha ko‘rinish","👟",75,"token","Oyoq kiyim"],
["dragon","Mini-ajdar hamroh","Sarguzashtdagi do‘st","🐉",220,"token","Hamroh"],
["helmet","Kosmik dubulg‘a","Galaktika himoyasi","🪖",135,"token","Bosh kiyim"],
["wand","Sehrli tayoqcha","Yorqin aksessuar","🪄",90,"token","Aksessuar"],
["cat","Mushukcha hamroh","Yoqimli do‘st","🐱",80,"token","Hamroh"],
["cape","Qahramon plashi","Shamolda hilpiraydi","🦸",110,"token","Qanot va plash"],
["aura","Kristall aura","Maxsus effekt","💠",12,"gem","Maxsus effekt"],
["robot","Mini robot","Aqlli yordamchi","🤖",18,"gem","Hamroh"],
["gear001","Yulduzli futbolka","Kiyim kolleksiyasidan maxsus buyum","👕",64,"token","Kiyim"],
["gear002","Galaktika sviteri","Kiyim kolleksiyasidan maxsus buyum","🧶",16,"gem","Kiyim"],
["gear003","Kamalak hudisi","Kiyim kolleksiyasidan maxsus buyum","🌈",98,"token","Kiyim"],
["gear004","Muzli ko‘ylak","Kiyim kolleksiyasidan maxsus buyum","❄️",115,"token","Kiyim"],
["gear005","Olovli kurtka","Kiyim kolleksiyasidan maxsus buyum","🔥",132,"token","Kiyim"],
["gear006","O‘rmon tunikasi","Kiyim kolleksiyasidan maxsus buyum","🌿",149,"token","Kiyim"],
["gear007","Kosmik kostyum","Kiyim kolleksiyasidan maxsus buyum","🧑‍🚀",166,"token","Kiyim"],
["gear008","Pixel futbolka","Kiyim kolleksiyasidan maxsus buyum","👾",183,"token","Kiyim"],
["gear009","Ajdar zirhi","Kiyim kolleksiyasidan maxsus buyum","🐉",200,"token","Kiyim"],
["gear010","Bulutli palto","Kiyim kolleksiyasidan maxsus buyum","☁️",42,"token","Kiyim"],
["gear011","Kristall ko‘ylak","Kiyim kolleksiyasidan maxsus buyum","💎",59,"token","Kiyim"],
["gear012","Sport formasi","Kiyim kolleksiyasidan maxsus buyum","🥋",76,"token","Kiyim"],
["gear013","Qahramon kombinezoni","Kiyim kolleksiyasidan maxsus buyum","🦸",93,"token","Kiyim"],
["gear014","Sirli plash","Kiyim kolleksiyasidan maxsus buyum","🧣",110,"token","Kiyim"],
["gear015","Yulduz changi kostyumi","Kiyim kolleksiyasidan maxsus buyum","✨",24,"gem","Kiyim"],
["gear016","Oy nuri libosi","Kiyim kolleksiyasidan maxsus buyum","🌙",144,"token","Kiyim"],
["gear017","Quyosh libosi","Kiyim kolleksiyasidan maxsus buyum","☀️",161,"token","Kiyim"],
["gear018","Raqamli zirh","Kiyim kolleksiyasidan maxsus buyum","🛡️",178,"token","Kiyim"],
["gear019","Bahor libosi","Kiyim kolleksiyasidan maxsus buyum","🌸",195,"token","Kiyim"],
["gear020","Sehrgar shlyapasi","Bosh kiyim kolleksiyasidan maxsus buyum","🧙",37,"token","Bosh kiyim"],
["gear021","Ajdar shoxlari","Bosh kiyim kolleksiyasidan maxsus buyum","🐲",54,"token","Bosh kiyim"],
["gear022","Kamalak kepka","Bosh kiyim kolleksiyasidan maxsus buyum","🧢",71,"token","Bosh kiyim"],
["gear023","Qishki qalpoq","Bosh kiyim kolleksiyasidan maxsus buyum","🧤",88,"token","Bosh kiyim"],
["gear024","Oltin toj","Bosh kiyim kolleksiyasidan maxsus buyum","👑",105,"token","Bosh kiyim"],
["gear025","Mushuk quloqlari","Bosh kiyim kolleksiyasidan maxsus buyum","🐱",122,"token","Bosh kiyim"],
["gear026","Robot antennasi","Bosh kiyim kolleksiyasidan maxsus buyum","🤖",139,"token","Bosh kiyim"],
["gear027","Oy tojisi","Bosh kiyim kolleksiyasidan maxsus buyum","🌙",156,"token","Bosh kiyim"],
["gear028","Gulchambar","Bosh kiyim kolleksiyasidan maxsus buyum","🌼",14,"gem","Bosh kiyim"],
["gear029","Pirata bandanasi","Bosh kiyim kolleksiyasidan maxsus buyum","🏴‍☠️",190,"token","Bosh kiyim"],
["gear030","Sport kepkasi","Bosh kiyim kolleksiyasidan maxsus buyum","🧢",207,"token","Bosh kiyim"],
["gear031","Kristall diadema","Bosh kiyim kolleksiyasidan maxsus buyum","💎",49,"token","Bosh kiyim"],
["gear032","Qahramon niqobi","Bosh kiyim kolleksiyasidan maxsus buyum","🥷",66,"token","Bosh kiyim"],
["gear033","Bulut etiklari","Oyoq kiyim kolleksiyasidan maxsus buyum","☁️",83,"token","Oyoq kiyim"],
["gear034","Olov krossovkasi","Oyoq kiyim kolleksiyasidan maxsus buyum","🔥",100,"token","Oyoq kiyim"],
["gear035","Muz etiklari","Oyoq kiyim kolleksiyasidan maxsus buyum","❄️",117,"token","Oyoq kiyim"],
["gear036","Kosmik botinka","Oyoq kiyim kolleksiyasidan maxsus buyum","🥾",134,"token","Oyoq kiyim"],
["gear037","Kamalak tuflisi","Oyoq kiyim kolleksiyasidan maxsus buyum","🌈",151,"token","Oyoq kiyim"],
["gear038","Robot oyoq kiyimi","Oyoq kiyim kolleksiyasidan maxsus buyum","🤖",168,"token","Oyoq kiyim"],
["gear039","Yashil yugurish oyoq kiyimi","Oyoq kiyim kolleksiyasidan maxsus buyum","🌱",185,"token","Oyoq kiyim"],
["gear040","Yulduz etiklari","Oyoq kiyim kolleksiyasidan maxsus buyum","⭐",202,"token","Oyoq kiyim"],
["gear041","Sehrgar tuflisi","Oyoq kiyim kolleksiyasidan maxsus buyum","🥿",22,"gem","Oyoq kiyim"],
["gear042","Yulduzli sumka","Aksessuar kolleksiyasidan maxsus buyum","🎒",61,"token","Aksessuar"],
["gear043","Kristall bilaguzuk","Aksessuar kolleksiyasidan maxsus buyum","📿",78,"token","Aksessuar"],
["gear044","Oy marjoni","Aksessuar kolleksiyasidan maxsus buyum","🌙",95,"token","Aksessuar"],
["gear045","Oltin qalqon","Aksessuar kolleksiyasidan maxsus buyum","🛡️",112,"token","Aksessuar"],
["gear046","Sehrli kitob","Aksessuar kolleksiyasidan maxsus buyum","📘",129,"token","Aksessuar"],
["gear047","Quyosh ko‘zoynagi","Aksessuar kolleksiyasidan maxsus buyum","😎",146,"token","Aksessuar"],
["gear048","Mini ryukzak","Aksessuar kolleksiyasidan maxsus buyum","🎒",163,"token","Aksessuar"],
["gear049","Yorqin mikrofon","Aksessuar kolleksiyasidan maxsus buyum","🎤",180,"token","Aksessuar"],
["gear050","Muz kristalli","Aksessuar kolleksiyasidan maxsus buyum","🧊",197,"token","Aksessuar"],
["gear051","Olov belgisi","Aksessuar kolleksiyasidan maxsus buyum","🔥",39,"token","Aksessuar"],
["gear052","Kamalak kamari","Aksessuar kolleksiyasidan maxsus buyum","🌈",56,"token","Aksessuar"],
["gear053","Raqamli soat","Aksessuar kolleksiyasidan maxsus buyum","⌚",73,"token","Aksessuar"],
["gear054","Yulduzli shar","Aksessuar kolleksiyasidan maxsus buyum","🔮",12,"gem","Aksessuar"],
["gear055","Kamalak qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","🌈",107,"token","Qanot va plash"],
["gear056","Olov qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","🔥",124,"token","Qanot va plash"],
["gear057","Muz qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","❄️",141,"token","Qanot va plash"],
["gear058","Kapalak qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","🦋",158,"token","Qanot va plash"],
["gear059","Farishta qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","🪽",175,"token","Qanot va plash"],
["gear060","Tungi plash","Qanot va plash kolleksiyasidan maxsus buyum","🌑",192,"token","Qanot va plash"],
["gear061","Yulduz plashi","Qanot va plash kolleksiyasidan maxsus buyum","✨",209,"token","Qanot va plash"],
["gear062","Ajdar qanotlari","Qanot va plash kolleksiyasidan maxsus buyum","🐉",51,"token","Qanot va plash"],
["gear063","Sehrli tulki","Hamroh kolleksiyasidan maxsus buyum","🦊",68,"token","Hamroh"],
["gear064","Kosmik quyon","Hamroh kolleksiyasidan maxsus buyum","🐰",85,"token","Hamroh"],
["gear065","Kichik dinozavr","Hamroh kolleksiyasidan maxsus buyum","🦕",102,"token","Hamroh"],
["gear066","Uchuvchi baliq","Hamroh kolleksiyasidan maxsus buyum","🐠",119,"token","Hamroh"],
["gear067","Bulut qo‘zichoq","Hamroh kolleksiyasidan maxsus buyum","🐑",20,"gem","Hamroh"],
["gear068","Yulduzli boyqush","Hamroh kolleksiyasidan maxsus buyum","🦉",153,"token","Hamroh"],
["gear069","Rangli to‘tiqush","Hamroh kolleksiyasidan maxsus buyum","🦜",170,"token","Hamroh"],
["gear070","Yulduz izi","Maxsus effekt kolleksiyasidan maxsus buyum","✨",187,"token","Maxsus effekt"],
["gear071","Kamalak halqasi","Maxsus effekt kolleksiyasidan maxsus buyum","🌈",204,"token","Maxsus effekt"],
["gear072","Olov zarralari","Maxsus effekt kolleksiyasidan maxsus buyum","🔥",46,"token","Maxsus effekt"],
["gear073","Muz parchalari","Maxsus effekt kolleksiyasidan maxsus buyum","❄️",63,"token","Maxsus effekt"],
["gear074","Sehrli yaltirash","Maxsus effekt kolleksiyasidan maxsus buyum","💫",80,"token","Maxsus effekt"],
["gear075","Oy nuri qalqoni","Maxsus effekt kolleksiyasidan maxsus buyum","🌙",97,"token","Maxsus effekt"],
["gear076","Quyosh chaqnashi","Maxsus effekt kolleksiyasidan maxsus buyum","☀️",114,"token","Maxsus effekt"],
["gear077","Yashil tabiat aurasi","Maxsus effekt kolleksiyasidan maxsus buyum","🍃",131,"token","Maxsus effekt"],
["gear078","Galaktika portali","Maxsus effekt kolleksiyasidan maxsus buyum","🌀",148,"token","Maxsus effekt"],
["gear079","Afsonaviy ajdar kostyumi","Noyob libos kolleksiyasidan maxsus buyum","🐉",165,"token","Noyob libos"],
["gear080","Galaktika imperatori","Noyob libos kolleksiyasidan maxsus buyum","🌌",10,"gem","Noyob libos"],
["gear081","Zumrad qahramon","Noyob libos kolleksiyasidan maxsus buyum","💚",199,"token","Noyob libos"],
["gear082","Oltin yulduz libosi","Noyob libos kolleksiyasidan maxsus buyum","🌟",41,"token","Noyob libos"],
["gear083","Muz malikasi kostyumi","Noyob libos kolleksiyasidan maxsus buyum","❄️",58,"token","Noyob libos"],
["gear084","Quyosh qo‘riqchisi","Noyob libos kolleksiyasidan maxsus buyum","☀️",75,"token","Noyob libos"],
["gear085","Oy sayyohi","Noyob libos kolleksiyasidan maxsus buyum","🌙",92,"token","Noyob libos"],
["gear086","Pixel afsonasi","Noyob libos kolleksiyasidan maxsus buyum","👾",109,"token","Noyob libos"],
["gear087","Kamalak afsonasi","Noyob libos kolleksiyasidan maxsus buyum","🌈",126,"token","Noyob libos"],
["gear088","Kristall ritsar","Noyob libos kolleksiyasidan maxsus buyum","💎",143,"token","Noyob libos"],
["gear101","Afsonaviy buyum 101","Cheklangan sarguzasht kolleksiyasi","💎",150,"token","Noyob libos"],
["gear102","Afsonaviy buyum 102","Cheklangan sarguzasht kolleksiyasi","🪄",170,"token","Noyob libos"],
["gear103","Afsonaviy buyum 103","Cheklangan sarguzasht kolleksiyasi","🦄",190,"token","Noyob libos"],
["gear104","Afsonaviy buyum 104","Cheklangan sarguzasht kolleksiyasi","🛡️",50,"token","Noyob libos"],
["gear105","Afsonaviy buyum 105","Cheklangan sarguzasht kolleksiyasi","🌟",70,"token","Noyob libos"],
["gear106","Afsonaviy buyum 106","Cheklangan sarguzasht kolleksiyasi","💎",90,"token","Noyob libos"],
["gear107","Afsonaviy buyum 107","Cheklangan sarguzasht kolleksiyasi","🪄",110,"token","Noyob libos"],
["gear108","Afsonaviy buyum 108","Cheklangan sarguzasht kolleksiyasi","🦄",130,"token","Noyob libos"],
["gear109","Afsonaviy buyum 109","Cheklangan sarguzasht kolleksiyasi","🛡️",150,"token","Noyob libos"],
["gear110","Afsonaviy buyum 110","Cheklangan sarguzasht kolleksiyasi","🌟",170,"token","Noyob libos"]
];
const promoCodes=Array.from({length:50},(_,i)=>({code:`TT-ANIME-${String(i+1).padStart(2,'0')}`,reward:50+(i%5)*25}));
const fresh={tokens:120,gems:8,xp:0,level:1,good:0,leaves:0,water:0,books:0,hearts:0,stars:0,done:[],owned:[],submissions:[],redeemedCodes:[],day:''};let s;try{s={...fresh,...JSON.parse(localStorage.getItem('tt3d')||'{}')}}catch(e){s={...fresh}}
function key(){let d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}function daily(){let a=[...pool],seed=key().split('').reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7),out=[];while(a.length&&out.length<9){seed=(seed*1664525+1013904223)>>>0;out.push(a.splice(seed%a.length,1)[0])}return out}let today=daily(),filter='all',image=null;
function save(){localStorage.setItem('tt3d',JSON.stringify(s));stats()}function stats(){['tokens','tokenStat'].forEach(id=>{let e=document.getElementById(id);if(e)e.textContent=s.tokens});document.getElementById('level').textContent=s.level;document.getElementById('heroLevel').textContent=s.level;document.getElementById('lvlStat').textContent=s.level;document.getElementById('good').textContent=s.good;document.getElementById('gems').textContent=s.gems;document.getElementById('xptext').textContent=s.xp+' XP / '+s.level*100;document.getElementById('xpbar').style.width=Math.min(100,s.xp/(s.level*100)*100)+'%';document.getElementById('owned').textContent=s.owned.length}
function card(t){let done=s.done.includes(t.id);return `<article class="task"><div class="tasktop"><span class="emoji">${t.emoji}</span><span class="reward">🪙 +${t.tokens} · ⚡ ${t.xp}</span></div><h3>${t.title}</h3><p>${t.desc}</p><span class="tag">${t.tag}</span><div class="taskfoot"><small>${done?'✓ Bajarildi':t.proof?'📸 Dalil kerak':'⚡ Tezkor missiya'}</small><button class="smallbtn" ${done?'disabled':''} onclick="mission('${t.id}')">${done?'Bajarildi':t.proof?'Rasm yubor':'Bajarish'}</button></div></article>`}
function renderTasks(){document.getElementById('homeTasks').innerHTML=today.slice(0,3).map(card).join('');document.getElementById('allTasks').innerHTML=today.filter(t=>filter==='all'||t.cat===filter).map(card).join('');document.getElementById('proofTask').innerHTML=today.filter(t=>t.proof).map(t=>`<option value="${t.id}">${t.emoji} ${t.title} — ${t.tokens} token</option>`).join('')}
function resources(){let data=[['🪙','Token',s.tokens,'Do‘kon valyutasi'],['💎','Kristall',s.gems,'Kamyob valyuta'],['⚡','Tajriba XP',s.xp,'Level oshiradi'],['🍃','Yashil barg',s.leaves,'Ekologiya'],['💧','Suv tomchisi',s.water,'Tabiat resursi'],['📘','Bilim kitobi',s.books,'Maktab yutuqlari'],['💗','Mehr yuragi',s.hearts,'Yaxshi ishlar'],['🌟','Yulduz',s.stars,'Yutuq nishoni']];document.getElementById('resourceGrid').innerHTML=data.map(r=>`<div class="res"><span>${r[0]}</span><b>${r[2]}</b><small>${r[1]} · ${r[3]}</small></div>`).join('');let c=[['🍃','Yashil barg','Ekologik missiyalar'],['💧','Suv tomchisi','Suvni tejash'],['📘','Bilim kitobi','Maktab missiyalari'],['🌟','Yulduz nishoni','Kunlik yutuqlar'],['💗','Mehr yuragi','Yordam va mehr'],['🔮','Sehr kristalli','Kamyob topilmalar'],['🌈','Kamalak belgisi','Kunlik sovg‘alar'],['🪵','Yog‘och nishoni','Tabiat missiyalari'],['🪨','Tosh parchasi','Maxsus missiyalar']];document.getElementById('catalog').innerHTML=c.map(x=>`<div class="cat"><span>${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small></div></div>`).join('')}
function shop(){let cats=['Hammasi',...new Set(items.map(i=>i[6]))];let bar=document.getElementById('shopFilters');if(bar&&!bar.dataset.ready){bar.innerHTML=cats.map((c,n)=>`<button class="${n===0?'selected':''}" onclick="shopFilter('${c.replace(/'/g,"\\'")}',this)">${c}</button>`).join('');bar.dataset.ready='1'}let shown=shopCategory==='Hammasi'?items:items.filter(i=>i[6]===shopCategory);document.getElementById('shopGrid').innerHTML=shown.map(i=>{let own=s.owned.includes(i[0]),gem=i[5]==='gem';return `<article class="item 3d-item"><div class="art"><span class="item-model">${i[3]}</span><span class="art-shine"></span></div><div class="iteminfo"><span class="tag">${i[6]}</span><h3>${i[1]}</h3><p>${i[2]}</p><div class="item-actions"><button class="buy ${own?'owned':''}" ${own?'disabled':''} onclick="buy('${i[0]}')">${own?'✓ Ochilgan':gem?`💎 ${i[4]} kristall`:`🪙 ${i[4]} token`}</button><button class="tryon" onclick="tryOn('${i[0]}')">👕 Kiyib ko‘rish</button></div></div></article>`}).join('')}
function subs(){document.getElementById('submissions').innerHTML=s.submissions.length?s.submissions.slice().reverse().map(x=>`<div class="cat">${x.img?`<img style="width:50px;height:50px;object-fit:cover;border-radius:9px" src="${x.img}">`:'📸'}<div><b>${x.title}</b><small>${x.date} · ⏳ Tekshiruvda</small></div></div>`).join(''):'<p class="muted">Hali dalil yuborilmadi.</p>'}
function toast(t){let e=document.getElementById('toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2400)}function showPage(p){document.querySelectorAll('.page').forEach(e=>e.classList.add('hidden'));document.getElementById(p).classList.remove('hidden');document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===p));window.scrollTo({top:0,behavior:'smooth'})}document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>showPage(b.dataset.page));document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('selected',x===b));renderTasks()});
function award(t){s.done.push(t.id);s.tokens+=t.tokens;s.good++;s.xp+=t.xp;if(t.cat==='eco'){s.leaves+=2;s.water++}if(t.cat==='school')s.books++;if(['home','health'].includes(t.cat))s.hearts++;s.stars++;while(s.xp>=s.level*100){s.xp-=s.level*100;s.level++;s.gems+=2;toast('LEVEL UP! +2 kristall!')}save();renderTasks();resources();toast(`Ajoyib! +${t.tokens} token, +${t.xp} XP!`)}
function mission(id){let t=today.find(x=>x.id===id);if(!t)return;if(s.done.includes(id)){toast('Bu missiya bajarilgan.');return}if(t.proof){document.getElementById('proofTask').value=id;showPage('proof');toast('Rasmli dalil yubor. Tasdiqdan keyin mukofot beriladi.')}else award(t)}
let shopCategory='Hammasi';function shopFilter(c,b){shopCategory=c;document.querySelectorAll('#shopFilters button').forEach(x=>x.classList.toggle('selected',x===b));shop()}function tryOn(id){let i=items.find(x=>x[0]===id);if(!i)return;document.getElementById('outfit').textContent=i[3];document.getElementById('outfitName').textContent=i[1];let body=document.getElementById('outfit');body.dataset.item=id;body.style.background=outfitColor(id);document.querySelector('.miniHero').classList.add('wearing');toast('Kiyib ko‘rish: '+i[1])}function outfitColor(id){let n=(parseInt(String(id).replace(/\D/g,''),10)||7)%6;return ['linear-gradient(135deg,#ff8ac7,#7c5cff 65%,#343e91)','linear-gradient(135deg,#7dffd6,#28a6ad 65%,#405fe2)','linear-gradient(135deg,#ffe58d,#ff8c68 65%,#b64e7b)','linear-gradient(135deg,#c6a4ff,#6584ff 65%,#31407c)','linear-gradient(135deg,#a9f1ff,#7c8aff 65%,#5b4da6)','linear-gradient(135deg,#ffb5a7,#e95f8c 65%,#853a76)'][n]}function buy(id){let i=items.find(x=>x[0]===id);if(!i||s.owned.includes(id))return;let gem=i[5]==='gem',currency=gem?'gems':'tokens';if(s[currency]<i[4]){toast(gem?'Kristall yetarli emas!':'Token yetarli emas! Missiya bajar.');return}s[currency]-=i[4];s.owned.push(id);tryOn(id);save();shop();resources();toast('Qahramoning uchun yangi buyum ochildi!')}
function renderPromo(){let grid=document.getElementById('promoGrid');if(!grid)return;grid.innerHTML=promoCodes.map(p=>{let used=(s.redeemedCodes||[]).includes(p.code);return `<article class="promo-code ${used?'promo-used':''}"><div class="promo-code-top"><span>🎟️</span><b>+${p.reward} token</b></div><code>${p.code}</code><button class="promo-copy" ${used?'disabled':''} onclick="${used?"":`copyPromo('${p.code}')`}">${used?'✓ Ishlatilgan':'Nusxa olish'}</button></article>`}).join('');document.getElementById('promoMessage').textContent=`${50-(s.redeemedCodes||[]).length} ta kod hali ishlatilmagan`;}
function redeemPromo(){let input=document.getElementById('promoInput'),msg=document.getElementById('promoMessage'),code=input.value.trim().toUpperCase().replace(/\s+/g,'');let p=promoCodes.find(x=>x.code===code);if(!code){msg.textContent='Avval promokodni kiriting.';return}if(!p){msg.textContent='Bunday promokod topilmadi.';toast('Promokod noto‘g‘ri!');return}if((s.redeemedCodes||[]).includes(code)){msg.textContent='Bu kod avval ishlatilgan.';toast('Bu koddan allaqachon foydalangansiz.');return}s.redeemedCodes=s.redeemedCodes||[];s.redeemedCodes.push(code);s.tokens+=p.reward;save();resources();renderPromo();input.value='';msg.textContent=`Muvaffaqiyat! +${p.reward} token olindi.`;toast(`🎉 +${p.reward} token!`)}
function copyPromo(code){let t=document.createElement('textarea');t.value=code;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();try{document.execCommand('copy');toast(code+' nusxalandi')}catch(e){toast('Kod: '+code)}t.remove()}
document.getElementById('redeemPromo').onclick=redeemPromo;document.getElementById('promoInput').addEventListener('keydown',e=>{if(e.key==='Enter')redeemPromo()});
document.getElementById('file').onchange=e=>{let f=e.target.files[0];if(!f)return;if(!f.type.startsWith('image/'))return toast('Rasm tanla');if(f.size>5*1024*1024){e.target.value='';return toast('Rasm 5 MB dan kichik bo‘lsin')}let r=new FileReader();r.onload=()=>{image=r.result;document.getElementById('preview').src=image;document.getElementById('previewBox').classList.remove('hidden');document.getElementById('drop').classList.add('hidden')};r.readAsDataURL(f)};
document.getElementById('remove').onclick=()=>{image=null;document.getElementById('file').value='';document.getElementById('previewBox').classList.add('hidden');document.getElementById('drop').classList.remove('hidden')};
document.getElementById('submit').onclick=()=>{let id=document.getElementById('proofTask').value,t=today.find(x=>x.id===id);if(!image)return toast('Avval rasm tanla');if(!t)return toast('Rasmli missiya yo‘q');if(s.done.includes(id))return toast('Bu missiya bajarilgan');s.submissions.push({title:t.title,date:new Date().toLocaleDateString('uz-UZ'),img:image,note:document.getElementById('note').value});save();subs();image=null;document.getElementById('file').value='';document.getElementById('previewBox').classList.add('hidden');document.getElementById('drop').classList.remove('hidden');document.getElementById('note').value='';toast('Dalil yuborildi — demo rejimida tekshiruvda!')};
function tick(){let n=new Date(),next=new Date();next.setHours(24,0,0,0);let ms=next-n;document.getElementById('timer').textContent=`Yangi missiya: ${String(Math.floor(ms/36e5)).padStart(2,'0')}:${String(Math.floor(ms%36e5/6e4)).padStart(2,'0')}:${String(Math.floor(ms%6e4/1000)).padStart(2,'0')}`;document.getElementById('dateLabel').textContent=n.toLocaleDateString('uz-UZ');if(s.day!==key()){s.day=key();s.done=[];today=daily();save();renderTasks();toast('Yangi kun! Missiyalar yangilandi.')}}if(s.day!==key()){s.day=key();s.done=[];today=daily();save()}stats();renderTasks();resources();shop();subs();renderPromo();tick();setInterval(tick,1000);

// Mini o'yinlar
let coinInterval=null, coinRemaining=15, coinPoints=0, coinActive=false, memoryValues=[], memoryOpen=[], memoryMatched=[];
function renderCoinArena(){const a=document.getElementById('coinArena');if(!a)return;if(!coinActive){a.innerHTML='<span>🎯 Boshlashni bosing!</span>';return}a.innerHTML='<button class="floating-coin" style="left:'+ (8+Math.random()*76)+'%;top:'+ (8+Math.random()*68)+'%" aria-label="Tokenni tut">🪙</button>';a.querySelector('button').onclick=()=>{if(!coinActive)return;coinPoints++;document.getElementById('coinScore').textContent=coinPoints;renderCoinArena()}}
function startCoinGame(){if(coinInterval)clearInterval(coinInterval);coinRemaining=15;coinPoints=0;coinActive=true;document.getElementById('coinTime').textContent=coinRemaining;document.getElementById('coinScore').textContent=coinPoints;document.getElementById('coinMessage').textContent='Tez bosing!';renderCoinArena();coinInterval=setInterval(()=>{coinRemaining--;document.getElementById('coinTime').textContent=coinRemaining;if(coinRemaining<=0){clearInterval(coinInterval);coinInterval=null;coinActive=false;document.getElementById('coinArena').innerHTML='<span>⏱️ O‘yin tugadi!</span>';let reward=Math.floor(coinPoints/10)*10;if(reward>0){s.tokens+=reward;save();resources();document.getElementById('coinMessage').textContent='Ajoyib! +'+reward+' token oldingiz.';toast('Mini o‘yin: +'+reward+' token!')}else document.getElementById('coinMessage').textContent='Yana urinib ko‘ring! Har 10 ochko uchun +10 token.'}},1000)}
function startMemory(){memoryValues=['🐱','🐱','🌟','🌟','🍀','🍀','🚀','🚀'].sort(()=>Math.random()-.5);memoryOpen=[];memoryMatched=[];document.getElementById('memoryPairs').textContent='0';document.getElementById('memoryMessage').textContent='Juftliklarni toping!';renderMemory()}
function renderMemory(){const b=document.getElementById('memoryBoard');if(!b)return;b.innerHTML=memoryValues.map((v,i)=>'<button class="memory-tile '+(memoryOpen.includes(i)||memoryMatched.includes(i)?'revealed':'')+'" data-i="'+i+'">'+(memoryOpen.includes(i)||memoryMatched.includes(i)?v:'❔')+'</button>').join('');b.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{let i=Number(btn.dataset.i);if(memoryOpen.length===2||memoryOpen.includes(i)||memoryMatched.includes(i))return;memoryOpen.push(i);renderMemory();if(memoryOpen.length===2){if(memoryValues[memoryOpen[0]]===memoryValues[memoryOpen[1]]){memoryMatched.push(...memoryOpen);memoryOpen=[];document.getElementById('memoryPairs').textContent=memoryMatched.length/2;renderMemory();if(memoryMatched.length===8){s.tokens+=20;save();resources();document.getElementById('memoryMessage').textContent='Zo‘r! Barcha juftliklar topildi: +20 token!';toast('Xotira o‘yini: +20 token!')}}else setTimeout(()=>{memoryOpen=[];renderMemory()},700)}})}
document.getElementById('coinStart')?.addEventListener('click',startCoinGame);document.getElementById('memoryStart')?.addEventListener('click',startMemory);startMemory();
