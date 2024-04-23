const selectSVG = (id) => {
    const el = document.getElementById(id);
    return new SVGElement(el);
  };
  
  const createSVG = (type) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", type);
    return new SVGElement(el);
  };
  
  class SVGElement {
    constructor(element) {
      this.element = element;
    }
  
    set(attributeName, value) {
      this.element.setAttribute(attributeName, value);
    }
  
    style(property, value) {
      this.element.style[property] = value;
    }
  }
  
  const colors = [
    { main: "#FBDB4A", shades: ["#FAE073", "#FCE790", "#FADD65", "#E4C650"] },
    { main: "#F3934A", shades: ["#F7B989", "#F9CDAA", "#DD8644", "#F39C59"] },
    { main: "#EB547D", shades: ["#EE7293", "#F191AB", "#D64D72", "#C04567"] },
    { main: "#9F6AA7", shades: ["#B084B6", "#C19FC7", "#916198", "#82588A"] },
    { main: "#5476B3", shades: ["#6382B9", "#829BC7", "#4D6CA3", "#3E5782"] },
    { main: "#2BB19B", shades: ["#4DBFAD", "#73CDBF", "#27A18D", "#1F8171"] },
    { main: "#70B984", shades: ["#7FBE90", "#98CBA6", "#68A87A", "#5E976E"] }
  ];
  const svg = selectSVG("svg");
  const text = document.getElementById("text");
  const offscreenText = document.getElementById("offscreen-text");
  const input = document.getElementById("input");
  let width = window.innerWidth;
  let height = window.innerHeight;
  let textSize = 0;
  let textCenter = 0;
  const letters = [];
  let prompt = ["0", "2", "s", "D", "a", "r", "l", "i", "n", "g"];
  let runPrompt = true;
  sentences=[
    "曾经是，以后也会是",
    "Dijkstra",
    "归并排序是稳定的",
    "C++,1s可以算10^8次",
    "const int N=1e5+10发生了类型转化",
    "pair优先左端点排序",
    "浮点数的0,typedef offset 1e-7;",
    "vector<int>&B,速度很快",
    "ios::sync_with_stdio(false)",
    "一次申请足够空间",
    "精度要求保留6位 就取10^-8",
    "今天听歌了吗",
    "我不疯谁疯",
    "s[N];cin>>(s+1);",
    "取模?unsigned long long:int",
    "输出有负数 溢出了",
    "typedef，声明别名不是变量",
    "Hello world",
    "mod N可取 0~N-1",
    "Clsr (Aash Mehta Flip)",
    "64MB,1600万Int",
    "什么叫做终端?",
    "Love",
    "Umaru",
    "Kiss,么么",
    "喜欢睡大觉",
    "有人吗?很孤独",
    "DP",
    "状态转移+状态计算",
    "Acwing",
    "GeekTime",
    "GeekBang",
    "贪心重在证明",
    "unordered_map",
    "vector<int>",
    "C++默认向零取整",
    "儿时的夏日",
    "想给妈妈打电话了",
    "Shy Girl",
    "feat:fix",
    "心跳",
    "我的人生来到的不愉快的地方",
    "喜欢你!",
    "人类求解的过程就是DFS",
    "BFS一定是最短的",
    "DFS一定有答案",
    "相交之后不再会相交",
    "算法的本质是数学",
    "学习一定要做总结",
    "i<1<<m",
    "亦或和先手必胜",
    "用空间换来时间",
    "有些答案永远不会输出",
    "单调",
    "stl会比数组模拟慢",
    "内容协商",
    "测试覆盖率",
    "持续集成",
    "阮一峰",
    "暴力,优化",
    "Trie",
    "Webpack",
    "Nodejs",
    "Git",
    "一个字符用%s,空格",
    "变量提升",
    "恐怖源于",
    "堆Down,Up",
    "中键可以拖动",
    "右键,字符按下",
    "Win+E,浏览器",
    "calc,计算器",
    "MyKeyMap",
    "NPM",
    "GitHub",
    "资源集市GitHub",
    "Koa",
    "精简",
    






    



  ]
  const Promptinit=()=>{
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const selectedSentence = sentences[randomIndex];

// 将选定的句子转换为 prompt 数组形式
    prompt = selectedSentence.split('').filter(char => char.trim() !== '');
    console.log(prompt)
  }

  const resizePage = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    svg.set("height", height);
    svg.set("width", width);
    svg.set("viewBox", `0 0 ${width} ${height}`);
    resizeLetters();
  };
  
  const resizeLetters = () => {
    // textSize = width / (letters.length + 2);
    textSize=46;
    if (textSize > 100) textSize = 100;
    text.style.fontSize = `${textSize}px`;
    text.style.height = `${textSize}px`;
    text.style.lineHeight = `${textSize}px`;
    offscreenText.style.fontSize = `${textSize}px`;
    const textRect = text.getBoundingClientRect();
    textCenter = textRect.top + textRect.height / 2;
    positionLetters();
  };
  
  const positionLetters = () => {
    letters.forEach((letter) => {
      const timing = letter.shift ? 0.1 : 0;
      TweenLite.to(letter.onScreen, timing, {
        x: letter.offScreen.offsetLeft + "px",
        ease: Power3.easeInOut
      });
      letter.shift = true;
    });
  };
  
  const animateLetterIn = (letter) => {
    const yOffset = (0.5 + Math.random() * 0.5) * textSize;
    TweenLite.fromTo(letter, 0.4, { scale: 0 }, { scale: 1, ease: Back.easeOut });
    TweenLite.fromTo(
      letter,
      0.4,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeOut }
    );
    TweenLite.to(letter, 0.2, { y: -yOffset, ease: Power3.easeInOut });
    TweenLite.to(letter, 0.2, { y: 0, ease: Power3.easeInOut, delay: 0.2 });
    const rotation = -50 + Math.random() * 100;
    TweenLite.to(letter, 0.2, { rotation: rotation, ease: Power3.easeInOut });
    TweenLite.to(letter, 0.2, {
      rotation: 0,
      ease: Power3.easeInOut,
      delay: 0.2
    });
  };
  
  const addDecor = (letter, color) => {
    setTimeout(() => {
      var rect = letter.getBoundingClientRect();
      const x0 = letter.offsetLeft + letter.offsetWidth / 2;
      const y0 = textCenter - textSize * 0.5;
      const shade = color.shades[Math.floor(Math.random() * 4)];
      for (var i = 0; i < 8; i++) addTri(x0, y0, shade);
      for (var i = 0; i < 8; i++) addCirc(x0, y0);
    }, 150);
  };
  
  const addTri = (x0, y0, shade) => {
    const tri = createSVG("polygon");
    const a = Math.random();
    const a2 = a + (-0.2 + Math.random() * 0.4);
    const r = textSize * 0.52;
    const r2 = r + textSize * Math.random() * 0.2;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
    const triSize = textSize * 0.1;
    const scale = 0.3 + Math.random() * 0.7;
    const offset = triSize * scale;
    tri.set("points", `0,0 ${triSize * 2},0 ${triSize},${triSize * 2}`);
    tri.style("fill", shade);
    svg.element.appendChild(tri.element);
    TweenLite.fromTo(
      tri.element,
      0.6,
      {
        rotation: Math.random() * 360,
        scale: scale,
        x: x - offset,
        y: y - offset,
        opacity: 1
      },
      {
        x: x2 - offset,
        y: y2 - offset,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: () => {
          svg.element.removeChild(tri.element);
        }
      }
    );
  };
  
  const addCirc = (x0, y0) => {
    const circ = createSVG("circle");
    const a = Math.random();
    const r = textSize * 0.52;
    const r2 = r + textSize;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
    const circSize = textSize * 0.05 * Math.random();
    circ.set("r", circSize);
    circ.style("fill", "#eee");
    svg.element.appendChild(circ.element);
    TweenLite.fromTo(
      circ.element,
      0.6,
      { x: x - circSize, y: y - circSize, opacity: 1 },
      {
        x: x2 - circSize,
        y: y2 - circSize,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: () => {
          svg.element.removeChild(circ.element);
        }
      }
    );
  };
  
  const addLetter = (char, i) => {
    const letter = document.createElement("span");
    const oLetter = document.createElement("span");
    letter.innerHTML = char;
    oLetter.innerHTML = char;
    text.appendChild(letter);
    const color = colors[i % colors.length];
    letter.style.color = color.main;
    offscreenText.appendChild(oLetter);
    letters[i] = { offScreen: oLetter, onScreen: letter, char: char };
    animateLetterIn(letter);
    addDecor(oLetter, color);
  };
  
  const addLetters = (value) => {
    value.forEach((char, i) => {
      if (letters[i] && letters[i].char !== char) {
        letters[i].onScreen.innerHTML = char;
        letters[i].offScreen.innerHTML = char;
        letters[i].char = char;
      }
      if (letters[i] === undefined) {
        addLetter(char, i);
      }
    });
  };
  
  const animateLetterOut = (letter, i) => {
    TweenLite.to(letter.onScreen, 0.1, {
      scale: 0,
      opacity: 0,
      ease: Power2.easeIn,
      onComplete: () => {
        console.log("removing");
        console.log(letter);
        offscreenText.removeChild(letter.offScreen);
        text.removeChild(letter.onScreen);
        positionLetters();
      }
    });
    letters.splice(i, 1);
  };
  
  const removeLetters = (value) => {
    for (let i = letters.length - 1; i >= 0; i--) {
      const letter = letters[i];
      if (value[i] === undefined) {
        animateLetterOut(letter, i);
      }
    }
  };
  
  const onInputChange = () => {
    const value = input.value === "" ? [] : input.value.split("");
    addLetters(value);
    removeLetters(value);
    resizeLetters();
  };
  
  const keyup = (e) => {
    if (runPrompt) {
      input.value = "";
      runPrompt = false;
      console.log("key up is actived");
    }
    onInputChange();
  };
  
  const addPrompt = (i) => {
    setTimeout(() => {
      if (runPrompt && prompt[i]) {
        input.value = input.value + prompt[i];
        onInputChange();
        addPrompt(i + 1);
      }
    }, 300);
  };
  
  Promptinit();
  resizePage();
  window.addEventListener("resize", resizePage);
  input.addEventListener("keyup", keyup);
  input.focus();
  addPrompt(0);

  