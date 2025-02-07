let morse = '';
let mArr = [];
let showName = 0;


function setup() {
  createCanvas(400, 400);
  let buttonDash = createButton('dash');
  let buttonDot = createButton('dot');
  let buttonClear = createButton('clear');
  let buttonSubmit = createButton('Submit');
  let buttonNext = createButton('Next Letter');
  
  buttonDot.position(100,320);
  buttonDot.mousePressed(dotPress);
  buttonDash.position(170, 320);
  buttonDash.mousePressed(dashPress);
  buttonNext.position(250, 320);
  buttonNext.mousePressed(nextPress)
  buttonClear.position(120, 50);
  buttonClear.mousePressed(clearPress);
  buttonSubmit.position(240, 50);
  buttonSubmit.mousePressed(submitPress);
}


function draw() {
  background(220);
  textSize(25);
  fill(0,0,0)
  text('Please Enter Your Name',210, 30);
  rectMode(CENTER);
  translate(width/2, height/2);
  textSize(18)
  textAlign(CENTER,CENTER)
  text(morse, 0, 0);
  if (showName == 1){
    fill(43,255,0);
    square(0,0,200);
    fill(0,0,0);
    let name = decodeMorse(morse);
    text(name,0,0);
  }
}

function dotPress(){
  morse = morse + '•';
  append(mArr, 0);
}

function dashPress(){
  morse = morse + '-';
  append(mArr, 1);
}

function clearPress(){
  morse = '';
  mArr = [];
  showName=0;
}

function submitPress(){
  showName = 1;
}

function nextPress(){
  morse = morse + ' ';
}

function interpret(){
  return 'Blank'
}

function decodeMorse(morseCode) {
  var ref = { 
    '•-':     'a',
    '-•••':   'b',
    '-•-•':   'c',
    '-••':    'd',
    '•':      'e',
    '••-•':   'f',
    '--•':    'g',
    '••••':   'h',
    '••':     'i',
    '•---':   'j',
    '-•-':    'k',
    '•-••':   'l',
    '--':     'm',
    '-•':     'n',
    '---':    'o',
    '•--•':   'p',
    '--•-':   'q',
    '•-•':    'r',
    '•••':    's',
    '-':      't',
    '••-':    'u',
    '•••-':   'v',
    '•--':    'w',
    '-••-':   'x',
    '-•--':   'y',
    '--••':   'z',
  };

  return morseCode
        .split(' ')
        .map(
          b => ref[b]
        ).join('')
}