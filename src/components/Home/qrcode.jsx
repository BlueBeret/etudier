export default function Qrcode({theme}) {
    const themeColor = {
        "khs-default": "#000000",
        "khs-neon": "#FFFF00",
        "khs-etudier": "#283618"
    }
    const css = `.background-color {
                        fill: transparent;
                    }

                    .dot-color {
                        fill: ${themeColor[theme]};
                    }

                    .corners-square-color-0-0 {
                        fill: ${themeColor[theme]};
                    }

                    .corners-dot-color-0-0 {
                        fill: ${themeColor[theme]};
                    }

                    .corners-square-color-1-0 {
                        fill: ${themeColor[theme]};
                    }

                    .corners-dot-color-1-0 {
                        fill: ${themeColor[theme]};
                    }

                    .corners-square-color-0-1 {
                        fill: ${themeColor[theme]};
                    }

                    .corners-dot-color-0-1 {
                        fill: ${themeColor[theme]};
                    }`
    return <svg id="svgQrWrapper" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" style={{
            width: "75px",
            height: "75px",
            backgroundColor: "transparent"
        }} ><svg>
        <g transform="translate(9, 9)scale(0.95)" fill="none"><svg width="300" height="300">
                <style>
                   {css} 
                </style>
                <defs />
                <g className="dot-color" style={{
                    fill: themeColor[theme]
                }}>
                    <circle cx="10" cy="120" r="5" transform="rotate(0,10,120)" />
                    <circle cx="10" cy="130" r="5" transform="rotate(0,10,130)" />
                    <circle cx="10" cy="190" r="5" transform="rotate(0,10,190)" />
                    <circle cx="10" cy="200" r="5" transform="rotate(0,10,200)" />
                    <circle cx="20" cy="120" r="5" transform="rotate(0,20,120)" />
                    <circle cx="20" cy="130" r="5" transform="rotate(0,20,130)" />
                    <circle cx="20" cy="170" r="5" transform="rotate(0,20,170)" />
                    <circle cx="20" cy="190" r="5" transform="rotate(0,20,190)" />
                    <circle cx="20" cy="200" r="5" transform="rotate(0,20,200)" />
                    <circle cx="30" cy="100" r="5" transform="rotate(0,30,100)" />
                    <circle cx="30" cy="110" r="5" transform="rotate(0,30,110)" />
                    <circle cx="30" cy="120" r="5" transform="rotate(0,30,120)" />
                    <circle cx="30" cy="140" r="5" transform="rotate(0,30,140)" />
                    <circle cx="30" cy="150" r="5" transform="rotate(0,30,150)" />
                    <circle cx="30" cy="180" r="5" transform="rotate(0,30,180)" />
                    <circle cx="40" cy="90" r="5" transform="rotate(0,40,90)" />
                    <circle cx="40" cy="100" r="5" transform="rotate(0,40,100)" />
                    <circle cx="40" cy="110" r="5" transform="rotate(0,40,110)" />
                    <circle cx="40" cy="170" r="5" transform="rotate(0,40,170)" />
                    <circle cx="40" cy="180" r="5" transform="rotate(0,40,180)" />
                    <circle cx="40" cy="190" r="5" transform="rotate(0,40,190)" />
                    <circle cx="40" cy="200" r="5" transform="rotate(0,40,200)" />
                    <circle cx="50" cy="100" r="5" transform="rotate(0,50,100)" />
                    <circle cx="50" cy="120" r="5" transform="rotate(0,50,120)" />
                    <circle cx="50" cy="140" r="5" transform="rotate(0,50,140)" />
                    <circle cx="50" cy="160" r="5" transform="rotate(0,50,160)" />
                    <circle cx="50" cy="180" r="5" transform="rotate(0,50,180)" />
                    <circle cx="50" cy="210" r="5" transform="rotate(0,50,210)" />
                    <circle cx="60" cy="90" r="5" transform="rotate(0,60,90)" />
                    <circle cx="60" cy="110" r="5" transform="rotate(0,60,110)" />
                    <circle cx="60" cy="140" r="5" transform="rotate(0,60,140)" />
                    <circle cx="60" cy="150" r="5" transform="rotate(0,60,150)" />
                    <circle cx="60" cy="170" r="5" transform="rotate(0,60,170)" />
                    <circle cx="60" cy="210" r="5" transform="rotate(0,60,210)" />
                    <circle cx="70" cy="90" r="5" transform="rotate(0,70,90)" />
                    <circle cx="70" cy="110" r="5" transform="rotate(0,70,110)" />
                    <circle cx="70" cy="130" r="5" transform="rotate(0,70,130)" />
                    <circle cx="70" cy="150" r="5" transform="rotate(0,70,150)" />
                    <circle cx="70" cy="170" r="5" transform="rotate(0,70,170)" />
                    <circle cx="70" cy="190" r="5" transform="rotate(0,70,190)" />
                    <circle cx="70" cy="210" r="5" transform="rotate(0,70,210)" />
                    <circle cx="80" cy="90" r="5" transform="rotate(0,80,90)" />
                    <circle cx="80" cy="100" r="5" transform="rotate(0,80,100)" />
                    <circle cx="80" cy="110" r="5" transform="rotate(0,80,110)" />
                    <circle cx="80" cy="120" r="5" transform="rotate(0,80,120)" />
                    <circle cx="80" cy="130" r="5" transform="rotate(0,80,130)" />
                    <circle cx="80" cy="140" r="5" transform="rotate(0,80,140)" />
                    <circle cx="80" cy="160" r="5" transform="rotate(0,80,160)" />
                    <circle cx="80" cy="170" r="5" transform="rotate(0,80,170)" />
                    <circle cx="80" cy="190" r="5" transform="rotate(0,80,190)" />
                    <circle cx="80" cy="210" r="5" transform="rotate(0,80,210)" />
                    <circle cx="90" cy="20" r="5" transform="rotate(0,90,20)" />
                    <circle cx="90" cy="30" r="5" transform="rotate(0,90,30)" />
                    <circle cx="90" cy="70" r="5" transform="rotate(0,90,70)" />
                    <circle cx="90" cy="100" r="5" transform="rotate(0,90,100)" />
                    <circle cx="90" cy="110" r="5" transform="rotate(0,90,110)" />
                    <circle cx="90" cy="120" r="5" transform="rotate(0,90,120)" />
                    <circle cx="90" cy="140" r="5" transform="rotate(0,90,140)" />
                    <circle cx="90" cy="150" r="5" transform="rotate(0,90,150)" />
                    <circle cx="90" cy="160" r="5" transform="rotate(0,90,160)" />
                    <circle cx="90" cy="180" r="5" transform="rotate(0,90,180)" />
                    <circle cx="90" cy="190" r="5" transform="rotate(0,90,190)" />
                    <circle cx="90" cy="200" r="5" transform="rotate(0,90,200)" />
                    <circle cx="90" cy="210" r="5" transform="rotate(0,90,210)" />
                    <circle cx="90" cy="230" r="5" transform="rotate(0,90,230)" />
                    <circle cx="90" cy="240" r="5" transform="rotate(0,90,240)" />
                    <circle cx="90" cy="260" r="5" transform="rotate(0,90,260)" />
                    <circle cx="100" cy="10" r="5" transform="rotate(0,100,10)" />
                    <circle cx="100" cy="50" r="5" transform="rotate(0,100,50)" />
                    <circle cx="100" cy="60" r="5" transform="rotate(0,100,60)" />
                    <circle cx="100" cy="100" r="5" transform="rotate(0,100,100)" />
                    <circle cx="100" cy="120" r="5" transform="rotate(0,100,120)" />
                    <circle cx="100" cy="130" r="5" transform="rotate(0,100,130)" />
                    <circle cx="100" cy="150" r="5" transform="rotate(0,100,150)" />
                    <circle cx="100" cy="190" r="5" transform="rotate(0,100,190)" />
                    <circle cx="100" cy="230" r="5" transform="rotate(0,100,230)" />
                    <circle cx="100" cy="240" r="5" transform="rotate(0,100,240)" />
                    <circle cx="100" cy="260" r="5" transform="rotate(0,100,260)" />
                    <circle cx="100" cy="270" r="5" transform="rotate(0,100,270)" />
                    <circle cx="100" cy="280" r="5" transform="rotate(0,100,280)" />
                    <circle cx="100" cy="290" r="5" transform="rotate(0,100,290)" />
                    <circle cx="110" cy="30" r="5" transform="rotate(0,110,30)" />
                    <circle cx="110" cy="40" r="5" transform="rotate(0,110,40)" />
                    <circle cx="110" cy="50" r="5" transform="rotate(0,110,50)" />
                    <circle cx="110" cy="70" r="5" transform="rotate(0,110,70)" />
                    <circle cx="110" cy="100" r="5" transform="rotate(0,110,100)" />
                    <circle cx="110" cy="130" r="5" transform="rotate(0,110,130)" />
                    <circle cx="110" cy="170" r="5" transform="rotate(0,110,170)" />
                    <circle cx="110" cy="180" r="5" transform="rotate(0,110,180)" />
                    <circle cx="110" cy="190" r="5" transform="rotate(0,110,190)" />
                    <circle cx="110" cy="200" r="5" transform="rotate(0,110,200)" />
                    <circle cx="110" cy="220" r="5" transform="rotate(0,110,220)" />
                    <circle cx="110" cy="290" r="5" transform="rotate(0,110,290)" />
                    <circle cx="120" cy="20" r="5" transform="rotate(0,120,20)" />
                    <circle cx="120" cy="30" r="5" transform="rotate(0,120,30)" />
                    <circle cx="120" cy="80" r="5" transform="rotate(0,120,80)" />
                    <circle cx="120" cy="90" r="5" transform="rotate(0,120,90)" />
                    <circle cx="120" cy="110" r="5" transform="rotate(0,120,110)" />
                    <circle cx="120" cy="140" r="5" transform="rotate(0,120,140)" />
                    <circle cx="120" cy="160" r="5" transform="rotate(0,120,160)" />
                    <circle cx="120" cy="190" r="5" transform="rotate(0,120,190)" />
                    <circle cx="120" cy="200" r="5" transform="rotate(0,120,200)" />
                    <circle cx="120" cy="210" r="5" transform="rotate(0,120,210)" />
                    <circle cx="120" cy="230" r="5" transform="rotate(0,120,230)" />
                    <circle cx="120" cy="250" r="5" transform="rotate(0,120,250)" />
                    <circle cx="130" cy="30" r="5" transform="rotate(0,130,30)" />
                    <circle cx="130" cy="40" r="5" transform="rotate(0,130,40)" />
                    <circle cx="130" cy="60" r="5" transform="rotate(0,130,60)" />
                    <circle cx="130" cy="70" r="5" transform="rotate(0,130,70)" />
                    <circle cx="130" cy="90" r="5" transform="rotate(0,130,90)" />
                    <circle cx="130" cy="100" r="5" transform="rotate(0,130,100)" />
                    <circle cx="130" cy="110" r="5" transform="rotate(0,130,110)" />
                    <circle cx="130" cy="120" r="5" transform="rotate(0,130,120)" />
                    <circle cx="130" cy="140" r="5" transform="rotate(0,130,140)" />
                    <circle cx="130" cy="150" r="5" transform="rotate(0,130,150)" />
                    <circle cx="130" cy="160" r="5" transform="rotate(0,130,160)" />
                    <circle cx="130" cy="210" r="5" transform="rotate(0,130,210)" />
                    <circle cx="130" cy="220" r="5" transform="rotate(0,130,220)" />
                    <circle cx="130" cy="230" r="5" transform="rotate(0,130,230)" />
                    <circle cx="130" cy="280" r="5" transform="rotate(0,130,280)" />
                    <circle cx="140" cy="30" r="5" transform="rotate(0,140,30)" />
                    <circle cx="140" cy="60" r="5" transform="rotate(0,140,60)" />
                    <circle cx="140" cy="130" r="5" transform="rotate(0,140,130)" />
                    <circle cx="140" cy="140" r="5" transform="rotate(0,140,140)" />
                    <circle cx="140" cy="150" r="5" transform="rotate(0,140,150)" />
                    <circle cx="140" cy="170" r="5" transform="rotate(0,140,170)" />
                    <circle cx="140" cy="180" r="5" transform="rotate(0,140,180)" />
                    <circle cx="140" cy="190" r="5" transform="rotate(0,140,190)" />
                    <circle cx="140" cy="200" r="5" transform="rotate(0,140,200)" />
                    <circle cx="140" cy="210" r="5" transform="rotate(0,140,210)" />
                    <circle cx="140" cy="230" r="5" transform="rotate(0,140,230)" />
                    <circle cx="140" cy="260" r="5" transform="rotate(0,140,260)" />
                    <circle cx="140" cy="290" r="5" transform="rotate(0,140,290)" />
                    <circle cx="150" cy="70" r="5" transform="rotate(0,150,70)" />
                    <circle cx="150" cy="110" r="5" transform="rotate(0,150,110)" />
                    <circle cx="150" cy="130" r="5" transform="rotate(0,150,130)" />
                    <circle cx="150" cy="140" r="5" transform="rotate(0,150,140)" />
                    <circle cx="150" cy="160" r="5" transform="rotate(0,150,160)" />
                    <circle cx="150" cy="170" r="5" transform="rotate(0,150,170)" />
                    <circle cx="150" cy="200" r="5" transform="rotate(0,150,200)" />
                    <circle cx="150" cy="230" r="5" transform="rotate(0,150,230)" />
                    <circle cx="150" cy="260" r="5" transform="rotate(0,150,260)" />
                    <circle cx="150" cy="270" r="5" transform="rotate(0,150,270)" />
                    <circle cx="150" cy="280" r="5" transform="rotate(0,150,280)" />
                    <circle cx="150" cy="290" r="5" transform="rotate(0,150,290)" />
                    <circle cx="160" cy="10" r="5" transform="rotate(0,160,10)" />
                    <circle cx="160" cy="40" r="5" transform="rotate(0,160,40)" />
                    <circle cx="160" cy="80" r="5" transform="rotate(0,160,80)" />
                    <circle cx="160" cy="90" r="5" transform="rotate(0,160,90)" />
                    <circle cx="160" cy="150" r="5" transform="rotate(0,160,150)" />
                    <circle cx="160" cy="160" r="5" transform="rotate(0,160,160)" />
                    <circle cx="160" cy="180" r="5" transform="rotate(0,160,180)" />
                    <circle cx="160" cy="210" r="5" transform="rotate(0,160,210)" />
                    <circle cx="160" cy="220" r="5" transform="rotate(0,160,220)" />
                    <circle cx="160" cy="260" r="5" transform="rotate(0,160,260)" />
                    <circle cx="160" cy="280" r="5" transform="rotate(0,160,280)" />
                    <circle cx="170" cy="30" r="5" transform="rotate(0,170,30)" />
                    <circle cx="170" cy="40" r="5" transform="rotate(0,170,40)" />
                    <circle cx="170" cy="70" r="5" transform="rotate(0,170,70)" />
                    <circle cx="170" cy="90" r="5" transform="rotate(0,170,90)" />
                    <circle cx="170" cy="100" r="5" transform="rotate(0,170,100)" />
                    <circle cx="170" cy="140" r="5" transform="rotate(0,170,140)" />
                    <circle cx="170" cy="180" r="5" transform="rotate(0,170,180)" />
                    <circle cx="170" cy="210" r="5" transform="rotate(0,170,210)" />
                    <circle cx="170" cy="230" r="5" transform="rotate(0,170,230)" />
                    <circle cx="170" cy="240" r="5" transform="rotate(0,170,240)" />
                    <circle cx="170" cy="250" r="5" transform="rotate(0,170,250)" />
                    <circle cx="180" cy="50" r="5" transform="rotate(0,180,50)" />
                    <circle cx="180" cy="110" r="5" transform="rotate(0,180,110)" />
                    <circle cx="180" cy="130" r="5" transform="rotate(0,180,130)" />
                    <circle cx="180" cy="200" r="5" transform="rotate(0,180,200)" />
                    <circle cx="180" cy="210" r="5" transform="rotate(0,180,210)" />
                    <circle cx="180" cy="220" r="5" transform="rotate(0,180,220)" />
                    <circle cx="180" cy="230" r="5" transform="rotate(0,180,230)" />
                    <circle cx="180" cy="240" r="5" transform="rotate(0,180,240)" />
                    <circle cx="180" cy="270" r="5" transform="rotate(0,180,270)" />
                    <circle cx="180" cy="290" r="5" transform="rotate(0,180,290)" />
                    <circle cx="190" cy="10" r="5" transform="rotate(0,190,10)" />
                    <circle cx="190" cy="20" r="5" transform="rotate(0,190,20)" />
                    <circle cx="190" cy="40" r="5" transform="rotate(0,190,40)" />
                    <circle cx="190" cy="50" r="5" transform="rotate(0,190,50)" />
                    <circle cx="190" cy="60" r="5" transform="rotate(0,190,60)" />
                    <circle cx="190" cy="70" r="5" transform="rotate(0,190,70)" />
                    <circle cx="190" cy="90" r="5" transform="rotate(0,190,90)" />
                    <circle cx="190" cy="120" r="5" transform="rotate(0,190,120)" />
                    <circle cx="190" cy="150" r="5" transform="rotate(0,190,150)" />
                    <circle cx="190" cy="160" r="5" transform="rotate(0,190,160)" />
                    <circle cx="190" cy="190" r="5" transform="rotate(0,190,190)" />
                    <circle cx="190" cy="200" r="5" transform="rotate(0,190,200)" />
                    <circle cx="190" cy="210" r="5" transform="rotate(0,190,210)" />
                    <circle cx="190" cy="240" r="5" transform="rotate(0,190,240)" />
                    <circle cx="190" cy="270" r="5" transform="rotate(0,190,270)" />
                    <circle cx="190" cy="290" r="5" transform="rotate(0,190,290)" />
                    <circle cx="200" cy="60" r="5" transform="rotate(0,200,60)" />
                    <circle cx="200" cy="100" r="5" transform="rotate(0,200,100)" />
                    <circle cx="200" cy="110" r="5" transform="rotate(0,200,110)" />
                    <circle cx="200" cy="130" r="5" transform="rotate(0,200,130)" />
                    <circle cx="200" cy="140" r="5" transform="rotate(0,200,140)" />
                    <circle cx="200" cy="200" r="5" transform="rotate(0,200,200)" />
                    <circle cx="200" cy="210" r="5" transform="rotate(0,200,210)" />
                    <circle cx="200" cy="220" r="5" transform="rotate(0,200,220)" />
                    <circle cx="200" cy="230" r="5" transform="rotate(0,200,230)" />
                    <circle cx="200" cy="240" r="5" transform="rotate(0,200,240)" />
                    <circle cx="200" cy="290" r="5" transform="rotate(0,200,290)" />
                    <circle cx="210" cy="10" r="5" transform="rotate(0,210,10)" />
                    <circle cx="210" cy="20" r="5" transform="rotate(0,210,20)" />
                    <circle cx="210" cy="30" r="5" transform="rotate(0,210,30)" />
                    <circle cx="210" cy="40" r="5" transform="rotate(0,210,40)" />
                    <circle cx="210" cy="70" r="5" transform="rotate(0,210,70)" />
                    <circle cx="210" cy="100" r="5" transform="rotate(0,210,100)" />
                    <circle cx="210" cy="120" r="5" transform="rotate(0,210,120)" />
                    <circle cx="210" cy="130" r="5" transform="rotate(0,210,130)" />
                    <circle cx="210" cy="140" r="5" transform="rotate(0,210,140)" />
                    <circle cx="210" cy="160" r="5" transform="rotate(0,210,160)" />
                    <circle cx="210" cy="170" r="5" transform="rotate(0,210,170)" />
                    <circle cx="210" cy="190" r="5" transform="rotate(0,210,190)" />
                    <circle cx="210" cy="200" r="5" transform="rotate(0,210,200)" />
                    <circle cx="210" cy="210" r="5" transform="rotate(0,210,210)" />
                    <circle cx="210" cy="220" r="5" transform="rotate(0,210,220)" />
                    <circle cx="210" cy="230" r="5" transform="rotate(0,210,230)" />
                    <circle cx="210" cy="240" r="5" transform="rotate(0,210,240)" />
                    <circle cx="210" cy="250" r="5" transform="rotate(0,210,250)" />
                    <circle cx="210" cy="280" r="5" transform="rotate(0,210,280)" />
                    <circle cx="220" cy="90" r="5" transform="rotate(0,220,90)" />
                    <circle cx="220" cy="100" r="5" transform="rotate(0,220,100)" />
                    <circle cx="220" cy="110" r="5" transform="rotate(0,220,110)" />
                    <circle cx="220" cy="140" r="5" transform="rotate(0,220,140)" />
                    <circle cx="220" cy="160" r="5" transform="rotate(0,220,160)" />
                    <circle cx="220" cy="170" r="5" transform="rotate(0,220,170)" />
                    <circle cx="220" cy="210" r="5" transform="rotate(0,220,210)" />
                    <circle cx="220" cy="250" r="5" transform="rotate(0,220,250)" />
                    <circle cx="220" cy="260" r="5" transform="rotate(0,220,260)" />
                    <circle cx="220" cy="290" r="5" transform="rotate(0,220,290)" />
                    <circle cx="230" cy="110" r="5" transform="rotate(0,230,110)" />
                    <circle cx="230" cy="120" r="5" transform="rotate(0,230,120)" />
                    <circle cx="230" cy="160" r="5" transform="rotate(0,230,160)" />
                    <circle cx="230" cy="180" r="5" transform="rotate(0,230,180)" />
                    <circle cx="230" cy="190" r="5" transform="rotate(0,230,190)" />
                    <circle cx="230" cy="210" r="5" transform="rotate(0,230,210)" />
                    <circle cx="230" cy="230" r="5" transform="rotate(0,230,230)" />
                    <circle cx="230" cy="250" r="5" transform="rotate(0,230,250)" />
                    <circle cx="230" cy="260" r="5" transform="rotate(0,230,260)" />
                    <circle cx="230" cy="270" r="5" transform="rotate(0,230,270)" />
                    <circle cx="230" cy="290" r="5" transform="rotate(0,230,290)" />
                    <circle cx="240" cy="110" r="5" transform="rotate(0,240,110)" />
                    <circle cx="240" cy="130" r="5" transform="rotate(0,240,130)" />
                    <circle cx="240" cy="140" r="5" transform="rotate(0,240,140)" />
                    <circle cx="240" cy="150" r="5" transform="rotate(0,240,150)" />
                    <circle cx="240" cy="160" r="5" transform="rotate(0,240,160)" />
                    <circle cx="240" cy="190" r="5" transform="rotate(0,240,190)" />
                    <circle cx="240" cy="200" r="5" transform="rotate(0,240,200)" />
                    <circle cx="240" cy="210" r="5" transform="rotate(0,240,210)" />
                    <circle cx="240" cy="250" r="5" transform="rotate(0,240,250)" />
                    <circle cx="240" cy="260" r="5" transform="rotate(0,240,260)" />
                    <circle cx="240" cy="280" r="5" transform="rotate(0,240,280)" />
                    <circle cx="240" cy="290" r="5" transform="rotate(0,240,290)" />
                    <circle cx="250" cy="110" r="5" transform="rotate(0,250,110)" />
                    <circle cx="250" cy="160" r="5" transform="rotate(0,250,160)" />
                    <circle cx="250" cy="170" r="5" transform="rotate(0,250,170)" />
                    <circle cx="250" cy="180" r="5" transform="rotate(0,250,180)" />
                    <circle cx="250" cy="190" r="5" transform="rotate(0,250,190)" />
                    <circle cx="250" cy="200" r="5" transform="rotate(0,250,200)" />
                    <circle cx="250" cy="210" r="5" transform="rotate(0,250,210)" />
                    <circle cx="250" cy="220" r="5" transform="rotate(0,250,220)" />
                    <circle cx="250" cy="230" r="5" transform="rotate(0,250,230)" />
                    <circle cx="250" cy="240" r="5" transform="rotate(0,250,240)" />
                    <circle cx="250" cy="250" r="5" transform="rotate(0,250,250)" />
                    <circle cx="260" cy="110" r="5" transform="rotate(0,260,110)" />
                    <circle cx="260" cy="120" r="5" transform="rotate(0,260,120)" />
                    <circle cx="260" cy="130" r="5" transform="rotate(0,260,130)" />
                    <circle cx="260" cy="150" r="5" transform="rotate(0,260,150)" />
                    <circle cx="260" cy="170" r="5" transform="rotate(0,260,170)" />
                    <circle cx="260" cy="180" r="5" transform="rotate(0,260,180)" />
                    <circle cx="260" cy="190" r="5" transform="rotate(0,260,190)" />
                    <circle cx="260" cy="200" r="5" transform="rotate(0,260,200)" />
                    <circle cx="260" cy="210" r="5" transform="rotate(0,260,210)" />
                    <circle cx="260" cy="240" r="5" transform="rotate(0,260,240)" />
                    <circle cx="260" cy="250" r="5" transform="rotate(0,260,250)" />
                    <circle cx="260" cy="260" r="5" transform="rotate(0,260,260)" />
                    <circle cx="260" cy="280" r="5" transform="rotate(0,260,280)" />
                    <circle cx="270" cy="90" r="5" transform="rotate(0,270,90)" />
                    <circle cx="270" cy="110" r="5" transform="rotate(0,270,110)" />
                    <circle cx="270" cy="130" r="5" transform="rotate(0,270,130)" />
                    <circle cx="270" cy="170" r="5" transform="rotate(0,270,170)" />
                    <circle cx="270" cy="220" r="5" transform="rotate(0,270,220)" />
                    <circle cx="270" cy="250" r="5" transform="rotate(0,270,250)" />
                    <circle cx="270" cy="260" r="5" transform="rotate(0,270,260)" />
                    <circle cx="270" cy="280" r="5" transform="rotate(0,270,280)" />
                    <circle cx="270" cy="290" r="5" transform="rotate(0,270,290)" />
                    <circle cx="280" cy="90" r="5" transform="rotate(0,280,90)" />
                    <circle cx="280" cy="110" r="5" transform="rotate(0,280,110)" />
                    <circle cx="280" cy="120" r="5" transform="rotate(0,280,120)" />
                    <circle cx="280" cy="150" r="5" transform="rotate(0,280,150)" />
                    <circle cx="280" cy="160" r="5" transform="rotate(0,280,160)" />
                    <circle cx="280" cy="170" r="5" transform="rotate(0,280,170)" />
                    <circle cx="280" cy="210" r="5" transform="rotate(0,280,210)" />
                    <circle cx="280" cy="220" r="5" transform="rotate(0,280,220)" />
                    <circle cx="290" cy="120" r="5" transform="rotate(0,290,120)" />
                    <circle cx="290" cy="140" r="5" transform="rotate(0,290,140)" />
                    <circle cx="290" cy="170" r="5" transform="rotate(0,290,170)" />
                    <circle cx="290" cy="210" r="5" transform="rotate(0,290,210)" />
                    <circle cx="290" cy="220" r="5" transform="rotate(0,290,220)" />
                    <circle cx="290" cy="240" r="5" transform="rotate(0,290,240)" />
                    <circle cx="290" cy="250" r="5" transform="rotate(0,290,250)" />
                    <circle cx="290" cy="290" r="5" transform="rotate(0,290,290)" />
                </g>
                <g className="corners-square-color-0-0">
                    <circle cx="10" cy="10" r="5" transform="rotate(0,10,10)" />
                    <circle cx="10" cy="20" r="5" transform="rotate(0,10,20)" />
                    <circle cx="10" cy="30" r="5" transform="rotate(0,10,30)" />
                    <circle cx="10" cy="40" r="5" transform="rotate(0,10,40)" />
                    <circle cx="10" cy="50" r="5" transform="rotate(0,10,50)" />
                    <circle cx="10" cy="60" r="5" transform="rotate(0,10,60)" />
                    <circle cx="10" cy="70" r="5" transform="rotate(0,10,70)" />
                    <circle cx="20" cy="10" r="5" transform="rotate(0,20,10)" />
                    <circle cx="20" cy="70" r="5" transform="rotate(0,20,70)" />
                    <circle cx="30" cy="10" r="5" transform="rotate(0,30,10)" />
                    <circle cx="30" cy="70" r="5" transform="rotate(0,30,70)" />
                    <circle cx="40" cy="10" r="5" transform="rotate(0,40,10)" />
                    <circle cx="40" cy="70" r="5" transform="rotate(0,40,70)" />
                    <circle cx="50" cy="10" r="5" transform="rotate(0,50,10)" />
                    <circle cx="50" cy="70" r="5" transform="rotate(0,50,70)" />
                    <circle cx="60" cy="10" r="5" transform="rotate(0,60,10)" />
                    <circle cx="60" cy="70" r="5" transform="rotate(0,60,70)" />
                    <circle cx="70" cy="10" r="5" transform="rotate(0,70,10)" />
                    <circle cx="70" cy="20" r="5" transform="rotate(0,70,20)" />
                    <circle cx="70" cy="30" r="5" transform="rotate(0,70,30)" />
                    <circle cx="70" cy="40" r="5" transform="rotate(0,70,40)" />
                    <circle cx="70" cy="50" r="5" transform="rotate(0,70,50)" />
                    <circle cx="70" cy="60" r="5" transform="rotate(0,70,60)" />
                    <circle cx="70" cy="70" r="5" transform="rotate(0,70,70)" />
                </g>
                <g className="corners-dot-color-0-0">
                    <circle cx="30" cy="30" r="5" transform="rotate(0,30,30)" />
                    <circle cx="30" cy="40" r="5" transform="rotate(0,30,40)" />
                    <circle cx="30" cy="50" r="5" transform="rotate(0,30,50)" />
                    <circle cx="40" cy="30" r="5" transform="rotate(0,40,30)" />
                    <circle cx="40" cy="40" r="5" transform="rotate(0,40,40)" />
                    <circle cx="40" cy="50" r="5" transform="rotate(0,40,50)" />
                    <circle cx="50" cy="30" r="5" transform="rotate(0,50,30)" />
                    <circle cx="50" cy="40" r="5" transform="rotate(0,50,40)" />
                    <circle cx="50" cy="50" r="5" transform="rotate(0,50,50)" />
                </g>
                <g className="corners-square-color-1-0">
                    <circle cx="230" cy="10" r="5" transform="rotate(0,230,10)" />
                    <circle cx="230" cy="20" r="5" transform="rotate(0,230,20)" />
                    <circle cx="230" cy="30" r="5" transform="rotate(0,230,30)" />
                    <circle cx="230" cy="40" r="5" transform="rotate(0,230,40)" />
                    <circle cx="230" cy="50" r="5" transform="rotate(0,230,50)" />
                    <circle cx="230" cy="60" r="5" transform="rotate(0,230,60)" />
                    <circle cx="230" cy="70" r="5" transform="rotate(0,230,70)" />
                    <circle cx="240" cy="10" r="5" transform="rotate(0,240,10)" />
                    <circle cx="240" cy="70" r="5" transform="rotate(0,240,70)" />
                    <circle cx="250" cy="10" r="5" transform="rotate(0,250,10)" />
                    <circle cx="250" cy="70" r="5" transform="rotate(0,250,70)" />
                    <circle cx="260" cy="10" r="5" transform="rotate(0,260,10)" />
                    <circle cx="260" cy="70" r="5" transform="rotate(0,260,70)" />
                    <circle cx="270" cy="10" r="5" transform="rotate(0,270,10)" />
                    <circle cx="270" cy="70" r="5" transform="rotate(0,270,70)" />
                    <circle cx="280" cy="10" r="5" transform="rotate(0,280,10)" />
                    <circle cx="280" cy="70" r="5" transform="rotate(0,280,70)" />
                    <circle cx="290" cy="10" r="5" transform="rotate(0,290,10)" />
                    <circle cx="290" cy="20" r="5" transform="rotate(0,290,20)" />
                    <circle cx="290" cy="30" r="5" transform="rotate(0,290,30)" />
                    <circle cx="290" cy="40" r="5" transform="rotate(0,290,40)" />
                    <circle cx="290" cy="50" r="5" transform="rotate(0,290,50)" />
                    <circle cx="290" cy="60" r="5" transform="rotate(0,290,60)" />
                    <circle cx="290" cy="70" r="5" transform="rotate(0,290,70)" />
                </g>
                <g className="corners-dot-color-1-0">
                    <circle cx="250" cy="30" r="5" transform="rotate(0,250,30)" />
                    <circle cx="250" cy="40" r="5" transform="rotate(0,250,40)" />
                    <circle cx="250" cy="50" r="5" transform="rotate(0,250,50)" />
                    <circle cx="260" cy="30" r="5" transform="rotate(0,260,30)" />
                    <circle cx="260" cy="40" r="5" transform="rotate(0,260,40)" />
                    <circle cx="260" cy="50" r="5" transform="rotate(0,260,50)" />
                    <circle cx="270" cy="30" r="5" transform="rotate(0,270,30)" />
                    <circle cx="270" cy="40" r="5" transform="rotate(0,270,40)" />
                    <circle cx="270" cy="50" r="5" transform="rotate(0,270,50)" />
                </g>
                <g className="corners-square-color-0-1">
                    <circle cx="10" cy="230" r="5" transform="rotate(0,10,230)" />
                    <circle cx="10" cy="240" r="5" transform="rotate(0,10,240)" />
                    <circle cx="10" cy="250" r="5" transform="rotate(0,10,250)" />
                    <circle cx="10" cy="260" r="5" transform="rotate(0,10,260)" />
                    <circle cx="10" cy="270" r="5" transform="rotate(0,10,270)" />
                    <circle cx="10" cy="280" r="5" transform="rotate(0,10,280)" />
                    <circle cx="10" cy="290" r="5" transform="rotate(0,10,290)" />
                    <circle cx="20" cy="230" r="5" transform="rotate(0,20,230)" />
                    <circle cx="20" cy="290" r="5" transform="rotate(0,20,290)" />
                    <circle cx="30" cy="230" r="5" transform="rotate(0,30,230)" />
                    <circle cx="30" cy="290" r="5" transform="rotate(0,30,290)" />
                    <circle cx="40" cy="230" r="5" transform="rotate(0,40,230)" />
                    <circle cx="40" cy="290" r="5" transform="rotate(0,40,290)" />
                    <circle cx="50" cy="230" r="5" transform="rotate(0,50,230)" />
                    <circle cx="50" cy="290" r="5" transform="rotate(0,50,290)" />
                    <circle cx="60" cy="230" r="5" transform="rotate(0,60,230)" />
                    <circle cx="60" cy="290" r="5" transform="rotate(0,60,290)" />
                    <circle cx="70" cy="230" r="5" transform="rotate(0,70,230)" />
                    <circle cx="70" cy="240" r="5" transform="rotate(0,70,240)" />
                    <circle cx="70" cy="250" r="5" transform="rotate(0,70,250)" />
                    <circle cx="70" cy="260" r="5" transform="rotate(0,70,260)" />
                    <circle cx="70" cy="270" r="5" transform="rotate(0,70,270)" />
                    <circle cx="70" cy="280" r="5" transform="rotate(0,70,280)" />
                    <circle cx="70" cy="290" r="5" transform="rotate(0,70,290)" />
                </g>
                <g className="corners-dot-color-0-1">
                    <circle cx="30" cy="250" r="5" transform="rotate(0,30,250)" />
                    <circle cx="30" cy="260" r="5" transform="rotate(0,30,260)" />
                    <circle cx="30" cy="270" r="5" transform="rotate(0,30,270)" />
                    <circle cx="40" cy="250" r="5" transform="rotate(0,40,250)" />
                    <circle cx="40" cy="260" r="5" transform="rotate(0,40,260)" />
                    <circle cx="40" cy="270" r="5" transform="rotate(0,40,270)" />
                    <circle cx="50" cy="250" r="5" transform="rotate(0,50,250)" />
                    <circle cx="50" cy="260" r="5" transform="rotate(0,50,260)" />
                    <circle cx="50" cy="270" r="5" transform="rotate(0,50,270)" />
                </g>
            </svg></g>
    </svg></svg>
}