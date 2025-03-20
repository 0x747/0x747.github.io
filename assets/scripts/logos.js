/**
 * red d
 * green d
 * black 
 * white d
 * yellow  d
 * blue d
 * orange d
 * purple d
 */

const colorMapping = {
  windows: 'blue',
  apple: 'orange',
  android: 'green',
  linux: 'yellow'
}

const windows = 
`<b><span style="color: var(--red)">##########</span> <span style="color: var(--green)">##########</span>
<span style="color: var(--red)">##########</span> <span style="color: var(--green)">##########</span>
<span style="color: var(--red)">##########</span> <span style="color: var(--green)">##########</span>
<span style="color: var(--red)">##########</span> <span style="color: var(--green)">##########</span>
<span style="color: var(--red)">##########</span> <span style="color: var(--green)">##########</span>
<span style="color: var(--blue)">##########</span> <span style="color: var(--yellow)">##########</span>
<span style="color: var(--blue)">##########</span> <span style="color: var(--yellow)">##########</span>
<span style="color: var(--blue)">##########</span> <span style="color: var(--yellow)">##########</span>
<span style="color: var(--blue)">##########</span> <span style="color: var(--yellow)">##########</span>
<span style="color: var(--blue)">##########</span> <span style="color: var(--yellow)">##########</span></b>
`;

const linux = 
`        <b><span style="color: var(--black)">####</span>
       <span style="color: var(--black)">#######</span>       
       <span style="color: var(--black)">##</span><span style="color: var(--white)">O</span><span style="color: var(--black)">#</span><span style="color: var(--white)">O</span><span style="color: var(--black)">##</span>
       <span style="color: var(--black)">#</span><span style="color: var(--yellow)">#####</span><span style="color: var(--black)">#</span>
     <span style="color: var(--black)">##</span><span style="color: var(--white)">##</span><span style="color: var(--yellow)">###</span><span style="color: var(--white)">##</span><span style="color: var(--black)">##</span>
    <span style="color: var(--black)">##</span><span style="color: var(--white)">#########</span><span style="color: var(--black)">##</span>
   <span style="color: var(--black)">#</span><span style="color: var(--white)">############</span><span style="color: var(--black)">##</span>
   <span style="color: var(--black)">#</span><span style="color: var(--white)">############</span><span style="color: var(--black)">###</span>
  <span style="color: var(--yellow)">##</span><span style="color: var(--black)">#</span><span style="color: var(--white)">###########</span><span style="color: var(--black)">##</span><span style="color: var(--yellow)">#</span>
<span style="color: var(--yellow)">######</span><span style="color: var(--black)">#</span><span style="color: var(--white)">#######</span><span style="color: var(--black)">#</span><span style="color: var(--yellow)">######</span>
<span style="color: var(--yellow)">#######</span><span style="color: var(--black)">#</span><span style="color: var(--white)">#####</span><span style="color: var(--black)">#</span><span style="color: var(--yellow)">#######</span>
  <span style="color: var(--yellow)">#####</span><span style="color: var(--black)">#######</span><span style="color: var(--yellow)">#####</span></b>
`.replaceAll("#", "m");

const apple =
`<b><span style="color: var(--green)">                  .o.
                ,xNM.
               .NM0,
      .;lodo:' lollodol;.
    cKMMMMMMMNWMMMMMMMMMM0:</span>
  <span style="color: var(--orange)">,KMMMMMMMMMMMMMMMMMMMM.'
 .XMMMMMMMMMMMMMMMMMMMM'</span>
 <span style="color: var(--red)">MMMMMMMMMMMMMMMMMMMMM.
 kMMMMMMMMMMMMMMMMMMMM.</span>
 <span style="color: var(--purple)">'XMMMMMMMMMMMMMMMMMMMk.
  'XMMMMMMMMMMMMMMMMMMMMK.</span>
   <span style="color: var(--blue)">'kMMMMMMMMMMMMMMMMMMMMN;
    ';KMMMMMMMWXXWMMMMMMMk.
      '.cooc;'    ';coo:;'</span></b>
`;


const applebig =
`<span style="color: var(--green)">                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,      
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:</span>
  <span style="color: var(--yellow)">KMMMMMMMMMMMMMMMMMMMMMMM'
 XMMMMMMMMMMMMMMMMMMMMMM'</span>
 <span style="color: var(--red)">MMMMMMMMMMMMMMMMMMMMMMM.
 MMMMMMMMMMMMMMMMMMMMMMM.
 kMMMMMMMMMMMMMMMMMMMMMMM.</span>
  <span style="color: var(--purple)">XMMMMMMMMMMMMMMMMMMMMMMMM.
   XMMMMMMMMMMMMMMMMMMMMMMMMK</span>
    <span style="color: var(--blue)">kMMMMMMMMMMMMMMMMMMMMMMd
     ;KMMMMMMMWXXWMMMMMMMk.
       .cooc,.    .,coo:.</span>
`;

const android = 
`<b style="color: var(--green)">        o        o
       .+hydNNdyh+.
      +mMMMMMMMMMMm+
     +dMM<span style="color: var(--white)">0</span>MMMMMM<span style="color: var(--white)">0</span>MMd+
     MMMMMMMMMMMMMMMM
 .m. yyyyyyyyyyyyyyyy .m.
.mMm MMMMMMMMMMMMMMMM mMm:
:MMM MMMMMMMMMMMMMMMM MMM:
:MMM MMMMMMMMMMMMMMMM MMM:
:MMM MMMMMMMMMMMMMMMM MMM:
-MMM MMMMMMMMMMMMMMMM MMM-
 +y+ MMMMMMMMMMMMMMMM +y+
     mMMMMMMMMMMMMMMm
     *++MMMh++hMMM++*
        MMMo  oMMM
        MMMo  oMMM
        oNM-  -MNs</b>
`;